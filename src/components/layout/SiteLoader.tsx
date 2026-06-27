"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const LOADER_KEY = "mankuu-intro-seen";
const FADE_OUT_MS = 400;
/** Loader kabhi bhi is se zyada der nahi dikhega — video load ho ya na ho */
const HARD_CAP_MS = 7000;
/** Autoplay block ho to itni der baad auto skip */
const AUTOPLAY_FAIL_MS = 2800;

function readSeen(): boolean {
  try {
    return sessionStorage.getItem(LOADER_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(LOADER_KEY, "1");
  } catch {
    /* private browsing */
  }
}

export function SiteLoader() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const finishedRef = useRef(false);
  const [phase, setPhase] = useState<"loading" | "exit" | "hidden">("loading");

  useLayoutEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      readSeen()
    ) {
      finishedRef.current = true;
      setPhase("hidden");
    }
  }, []);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    markSeen();
    setPhase("exit");
  }, []);

  /* Guaranteed dismiss — video se independent */
  useEffect(() => {
    if (phase !== "loading") return;

    document.body.style.overflow = "hidden";
    const hardCap = window.setTimeout(finish, HARD_CAP_MS);

    return () => {
      window.clearTimeout(hardCap);
      document.body.style.overflow = "";
    };
  }, [phase, finish]);

  /* Video play + early dismiss on end/error */
  useEffect(() => {
    if (phase !== "loading") return;

    let cancelled = false;
    let autoplayFailTimer: number | null = null;
    const cleanups: (() => void)[] = [];

    const bindVideo = () => {
      const video = videoRef.current;
      if (!video) {
        if (!cancelled) requestAnimationFrame(bindVideo);
        return;
      }
      if (cancelled) return;

      const onDone = () => finish();

      const onTimeUpdate = () => {
        const { currentTime, duration } = video;
        if (Number.isFinite(duration) && duration > 0 && currentTime >= duration - 0.35) {
          finish();
        }
      };

      video.addEventListener("ended", onDone);
      video.addEventListener("error", onDone);
      video.addEventListener("timeupdate", onTimeUpdate);
      cleanups.push(() => {
        video.removeEventListener("ended", onDone);
        video.removeEventListener("error", onDone);
        video.removeEventListener("timeupdate", onTimeUpdate);
      });

      const startPlay = () => {
        if (cancelled) return;
        const playPromise = video.play();
        if (playPromise) {
          playPromise
            .then(() => {
              if (autoplayFailTimer) window.clearTimeout(autoplayFailTimer);
            })
            .catch(() => {
              autoplayFailTimer = window.setTimeout(finish, AUTOPLAY_FAIL_MS);
            });
        }
      };

      if (video.readyState >= 3) startPlay();
      else {
        video.addEventListener("canplay", startPlay, { once: true });
        cleanups.push(() => video.removeEventListener("canplay", startPlay));
      }

      /* Video load hi na ho — 4s baad skip */
      const loadFailTimer = window.setTimeout(() => {
        if (video.readyState < 2) finish();
      }, 4000);
      cleanups.push(() => window.clearTimeout(loadFailTimer));
    };

    /* Ref mount hone ka wait */
    bindVideo();

    return () => {
      cancelled = true;
      if (autoplayFailTimer) window.clearTimeout(autoplayFailTimer);
      cleanups.forEach((fn) => fn());
    };
  }, [phase, finish]);

  useEffect(() => {
    if (phase !== "exit") return;

    const timer = window.setTimeout(() => {
      setPhase("hidden");
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("mankuu:loader-done"));
    }, FADE_OUT_MS);

    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      className={`site-loader ${phase === "exit" ? "site-loader-exit" : ""}`}
      role="presentation"
      onClick={finish}
      onTouchEnd={(e) => {
        e.preventDefault();
        finish();
      }}
    >
      <div className="site-loader-glow" />
      <video
        ref={videoRef}
        src="/videos/logo-intro.mp4"
        muted
        playsInline
        autoPlay
        preload="auto"
        className="site-loader-video"
      />
      <p className="site-loader-skip">Tap to skip</p>
    </div>
  );
}
