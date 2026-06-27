"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projectVideos } from "@/lib/content";

const AFTER_PLAYBACK_RATE = 0.65;

interface VideoCardProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  src: string;
  poster: string;
  title: string;
  label: "Before" | "After";
  onToggle: () => void;
  playing: boolean;
}

function VideoCard({
  videoRef,
  src,
  poster,
  title,
  label,
  onToggle,
  playing,
}: VideoCardProps) {
  const isBefore = label === "Before";

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black shadow-xl ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.02]">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-video w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      <span
        className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${
          isBefore ? "bg-black/60" : "bg-mankuu-red"
        }`}
      >
        {label}
      </span>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-bold text-white">{title}</p>
      </div>
      <button
        type="button"
        onClick={onToggle}
        aria-label={playing ? "Pause both videos" : "Play both videos"}
        className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-mankuu-charcoal shadow-lg transition-all hover:scale-110 md:opacity-0 md:group-hover:opacity-100"
      >
        {playing ? (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="h-6 w-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        )}
      </button>
    </div>
  );
}

export function BeforeAfterVideoPair() {
  const beforeRef = useRef<HTMLVideoElement>(null);
  const afterRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  const beforeVideo = projectVideos[1];
  const afterVideo = projectVideos[0];

  const playBoth = useCallback(async (fromStart = false) => {
    const before = beforeRef.current;
    const after = afterRef.current;
    if (!before || !after) return;

    before.playbackRate = 1;
    after.playbackRate = AFTER_PLAYBACK_RATE;

    if (fromStart || !hasStartedRef.current) {
      before.currentTime = 0;
      after.currentTime = 0;
      hasStartedRef.current = true;
    }

    try {
      await Promise.all([before.play(), after.play()]);
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }, []);

  const pauseBoth = useCallback(() => {
    beforeRef.current?.pause();
    afterRef.current?.pause();
    setPlaying(false);
  }, []);

  const toggleBoth = useCallback(() => {
    if (playing) pauseBoth();
    else playBoth();
  }, [playing, pauseBoth, playBoth]);

  useEffect(() => {
    const after = afterRef.current;
    if (after) after.playbackRate = AFTER_PLAYBACK_RATE;
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playBoth(!hasStartedRef.current);
        } else {
          pauseBoth();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [pauseBoth, playBoth]);

  return (
    <div ref={containerRef} className="grid gap-6 lg:grid-cols-2">
      <VideoCard
        videoRef={beforeRef}
        src={beforeVideo.src}
        poster={beforeVideo.poster}
        title={beforeVideo.title}
        label="Before"
        onToggle={toggleBoth}
        playing={playing}
      />
      <VideoCard
        videoRef={afterRef}
        src={afterVideo.src}
        poster={afterVideo.poster}
        title={afterVideo.title}
        label="After"
        onToggle={toggleBoth}
        playing={playing}
      />
    </div>
  );
}
