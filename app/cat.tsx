"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Cat() {
  const [state, setState] = useState<"walk" | "stand" | "sleep">("walk");
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [frame, setFrame] = useState(1);

  // walk
  useEffect(() => {
    if (state === "walk") {
      const sequence = [1, 2, 1, 3];
      let currentIndex = 0;

      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % sequence.length;
        setFrame(sequence[currentIndex]);
      }, 350);

      return () => clearInterval(interval);
    }
  }, [state]);

  // stand and sleep
  useEffect(() => {
    if (state === "stand") {
      const timer = setTimeout(() => setState("sleep"), 3000); // 3sec standing
      return () => clearTimeout(timer);
    }
    if (state === "sleep") {
      const timer = setTimeout(() => {
        setDirection((prev) => (prev === "right" ? "left" : "right"));
        setState("walk");
      }, 15000); // sleeping
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <motion.div
      className="relative z-50 pointer-events-none"
      style={{ marginTop: "-55px", bottom: "100px" }}
      initial={{ x: "-400%" }}
      animate={{
        //direction setting
        x: direction === "right" ? "400%" : "-400%",
      }}
      transition={{
        duration: 30, // speed
        ease: "linear",
      }}
      onAnimationComplete={() => {
        if (state === "walk") {
          setState("stand");
        }
      }}
    >
      <img
        src={
          state === "sleep"
            ? "/cat4.png"
            : state === "stand"
              ? "/cat1.png"
              : `/cat${frame}.png`
        }
        alt="cat"
        className="w-32 h-32"
        style={{
          transform: direction === "right" ? "scaleX(-1)" : "scaleX(1)",
          imageRendering: "pixelated",
        }}
      />
    </motion.div>
  );
}
