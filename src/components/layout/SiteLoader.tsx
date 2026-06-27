"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const LOADER_KEY = "mankuu-intro-seen";
const FADE_OUT_MS = 500;
const SAFETY_MAX_MS = 15000;

export function SiteLoader() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<"loading" | "exit" | "hidden">("loading");
  const [skipLoader, setSkipLoader] = useState(false);

  useLayoutEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      sessionStorage.getItem(LOADER_KEY) === "1"
    ) {
      setSkipLoader(true);
      setPhase("hidden");
    }
  }, []);

  const finish = useCallback(() => {
    setPhase((current) => {
      if (current !== "loading") return current;
      sessionStorage.setItem(LOADER_KEY, "1");
      return "exit";
    });
  }, []);

  useEffect(() => {
    if (skipLoader || phase !== "loading") return;

    document.body.style.overflow = "hidden";

    let done = false;
    const finishLoader = () => {
      if (done) return;
      done = true;
      finish();
    };

    const video = videoRef.current;
    if (!video) return;

    const onEnded = () => finishLoader();
    const onError = () => finishLoader();

    video.addEventListener("ended", onEnded);
    video.addEventListener("error", onError);
    video.play().catch(onError);

    const safetyTimer = window.setTimeout(finishLoader, SAFETY_MAX_MS);

    return () => {
      window.clearTimeout(safetyTimer);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("error", onError);
      document.body.style.overflow = "";
    };
  }, [skipLoader, phase, finish]);

  useEffect(() => {
    if (phase !== "exit") return;

    const timer = window.setTimeout(() => {
      setPhase("hidden");
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("mankuu:loader-done"));
    }, FADE_OUT_MS);

    return () => window.clearTimeout(timer);
  }, [phase]);

  const handleVideoRef = (node: HTMLVideoElement | null) => {
    videoRef.current = node;
  };

  if (phase === "hidden") return null;

  return (
    <div
      className={`site-loader ${phase === "exit" ? "site-loader-exit" : ""}`}
      aria-hidden={phase === "exit"}
      role="presentation"
    >
      <div className="site-loader-glow" />
      <video
        ref={handleVideoRef}
        src="/videos/logo-intro.mp4"
        muted
        playsInline
        preload="auto"
        className="site-loader-video"
      />
    </div>
  );
}
