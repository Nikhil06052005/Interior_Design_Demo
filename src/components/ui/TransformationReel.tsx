"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface TransformationReelProps {
  before: string;
  after: string;
  title: string;
}

export function TransformationReel({ before, after, title }: TransformationReelProps) {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setShowAfter((v) => !v), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl bg-black shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={showAfter ? "after" : "before"}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={showAfter ? after : before}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="mt-1 flex items-center gap-2 text-xs text-white/80">
          <span className={`inline-block h-2 w-2 rounded-full ${showAfter ? "bg-mankuu-red" : "bg-white/60"}`} />
          {showAfter ? "After — Finished Space" : "Before — Original Space"}
        </p>
      </div>
      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white">Live Preview</span>
      </div>
    </div>
  );
}
