"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Cat() {
  const [state, setState] = useState<"walk" | "stand" | "sleep">("walk");
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [frame, setFrame] = useState(1);

  // 1. 걷기 프레임 애니메이션 (0.35초마다 발 구르기)
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

  // 2. 'stand'와 'sleep' 시간 제어 및 방향 전환
  useEffect(() => {
    if (state === "stand") {
      const timer = setTimeout(() => setState("sleep"), 3000); // 3초 서있기
      return () => clearTimeout(timer);
    }
    if (state === "sleep") {
      const timer = setTimeout(() => {
        setDirection((prev) => (prev === "right" ? "left" : "right"));
        setState("walk");
      }, 15000); // 1분간 잠자기
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <motion.div
      // 🚨 요청하신 원래 스타일 구조 완벽 유지
      className="relative z-50 pointer-events-none"
      style={{ marginTop: "-55px", bottom: "100px" }}
      initial={{ x: "-400%" }}
      animate={{
        // 🚨 헷갈리는 계산식 대신 퍼센트로 딱 지정했습니다!
        // 오른쪽으로 갈 때는 부모 너비의 80% 위치까지, 왼쪽은 0% 위치까지 이동합니다.
        x: direction === "right" ? "400%" : "-400%",
      }}
      transition={{
        duration: 30, // 왕복 속도 (너무 빠르면 숫자를 더 늘리세요)
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
