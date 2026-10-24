"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface StickerItem {
  id: string;
  type: "image" | "notice";
  src?: string;
  alt?: string;
  x: number;
  y: number;
  width: number;
  label?: string;
}

// 16 Stickers + Notice.txt
const initialStickers: StickerItem[] = [
  { id: "notice", type: "notice", x: 5, y: 5, width: 220 },
  {
    id: "welcome",
    type: "image",
    src: "/playground/welcome.gif",
    alt: "Welcome Banner",
    x: 38,
    y: 6,
    width: 240,
  },
  {
    id: "bird",
    type: "image",
    src: "/playground/bird.gif",
    alt: "Flying Bird",
    x: 84,
    y: 8,
    width: 140,
  },
  {
    id: "wing",
    type: "image",
    src: "/playground/wing.gif",
    alt: "Spinning img",
    x: 30,
    y: 20,
    width: 100,
  },

  {
    id: "computer",
    type: "image",
    src: "/playground/computer.gif",
    alt: "Retro PC",
    x: 10,
    y: 34,
    width: 120,
  },
  {
    id: "world",
    type: "image",
    src: "/playground/world.gif",
    alt: "Spinning Globe",
    x: 55,
    y: 24,
    width: 120,
  },
  {
    id: "music",
    type: "image",
    src: "/playground/music.gif",
    alt: "Music",
    x: 30,
    y: 45,
    width: 400,
  },
  {
    id: "cd",
    type: "image",
    src: "/playground/cd.gif",
    alt: "Spinning CD",
    x: 74,
    y: 22,
    width: 100,
  },
  {
    id: "dice",
    type: "image",
    src: "/playground/dice.gif",
    alt: "Spinning Dice",
    x: 86,
    y: 34,
    width: 150,
  },

  {
    id: "mojo",
    type: "image",
    src: "/playground/mojo.png",
    alt: "Mojo",
    x: 45,
    y: 50,
    width: 130,
    label: "★ MOJO ★",
  },
  {
    id: "duck",
    type: "image",
    src: "/playground/duck.gif",
    alt: "Duck",
    x: 16,
    y: 52,
    width: 120,
  },
  {
    id: "bear",
    type: "image",
    src: "/playground/bear.gif",
    alt: "Teddy Bear",
    x: 5,
    y: 54,
    width: 70,
  },
  {
    id: "hamster",
    type: "image",
    src: "/playground/hamster.gif",
    alt: "Spinning Hamster",
    x: 63,
    y: 54,
    width: 55,
  },
  {
    id: "newfriends",
    type: "image",
    src: "/playground/newfriends.gif",
    alt: "New Friends",
    x: 68,
    y: 48,
    width: 150,
  },

  {
    id: "water",
    type: "image",
    src: "/playground/water.gif",
    alt: "Water plant",
    x: 13,
    y: 67,
    width: 140,
  },
  {
    id: "shark",
    type: "image",
    src: "/playground/shark.gif",
    alt: "Swimming Shark",
    x: 32,
    y: 85,
    width: 170,
  },
  {
    id: "tresure",
    type: "image",
    src: "/playground/tresure.gif",
    alt: "Treasure Chest",
    x: 80,
    y: 65,
    width: 100,
  },
  {
    id: "cool",
    type: "image",
    src: "/playground/cool.gif",
    alt: "Cool text",
    x: 50,
    y: 74,
    width: 400,
  },
];

export default function LogsPage() {
  const [positions, setPositions] = useState<{
    [key: string]: { x: number; y: number; z: number };
  }>({});
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [maxZ, setMaxZ] = useState(30);
  const dragOffset = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Location reset
  const resetPositions = () => {
    const initPos: { [key: string]: { x: number; y: number; z: number } } = {};
    initialStickers.forEach((item, idx) => {
      initPos[item.id] = { x: item.x, y: item.y, z: idx + 1 };
    });
    setPositions(initPos);
    setMaxZ(30);
  };

  useEffect(() => {
    resetPositions();
  }, []);

  const startDrag = (id: string, clientX: number, clientY: number) => {
    if (!containerRef.current || !positions[id]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const current = positions[id];

    const currentPxX = (current.x / 100) * rect.width;
    const currentPxY = (current.y / 100) * rect.height;

    dragOffset.current = {
      x: clientX - rect.left - currentPxX,
      y: clientY - rect.top - currentPxY,
    };

    setDraggingId(id);
    setMaxZ((prev) => prev + 1);
    setPositions((prev) => ({
      ...prev,
      [id]: { ...prev[id], z: maxZ + 1 },
    }));
  };

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!draggingId || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const newPxX = clientX - rect.left - dragOffset.current.x;
      const newPxY = clientY - rect.top - dragOffset.current.y;

      const newPercentX = Math.max(
        0,
        Math.min(92, (newPxX / rect.width) * 100),
      );
      const newPercentY = Math.max(
        0,
        Math.min(88, (newPxY / rect.height) * 100),
      );

      setPositions((prev) => ({
        ...prev,
        [draggingId]: { ...prev[draggingId], x: newPercentX, y: newPercentY },
      }));
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const stopDrag = () => setDraggingId(null);

    if (draggingId) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", stopDrag);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", stopDrag);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [draggingId]);

  return (
    <div className="w-full px-4 my-8 select-none font-sans">
      {/* Retro frame*/}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full bg-[#c0c0c0] border-2 border-white border-b-black border-r-black p-1 shadow-2xl"
      >
        {/*Title*/}
        <div className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between text-xs font-mono font-bold select-none">
          <div className="flex items-center gap-2">
            <span>📁</span>
            <span>C:\Kyungmin\Playground\SCRAPBOOK.EXE</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={resetPositions}
              title="Reset Positions"
              className="w-4 h-4 bg-[#c0c0c0] text-black border border-white border-b-black border-r-black flex items-center justify-center font-bold text-[9px] active:border-black active:border-b-white active:border-r-white"
            >
              ↺
            </button>
            <button className="w-4 h-4 bg-[#c0c0c0] text-black border border-white border-b-black border-r-black flex items-center justify-center font-bold text-[10px]">
              _
            </button>
            <button className="w-4 h-4 bg-[#c0c0c0] text-black border border-white border-b-black border-r-black flex items-center justify-center font-bold text-[10px]">
              □
            </button>
            <button className="w-4 h-4 bg-[#c0c0c0] text-black border border-white border-b-black border-r-black flex items-center justify-center font-bold text-[10px]">
              ✕
            </button>
          </div>
        </div>
        {/*Canvas*/}
        <div
          ref={containerRef}
          className="relative w-full h-[680px] bg-white mt-1 border border-black overflow-hidden cursor-default touch-none"
          style={{
            backgroundImage:
              "radial-gradient(#d1d5db 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        >
          {/* Sticker List + Notice.txt */}
          {initialStickers.map((item) => {
            const pos = positions[item.id] || { x: item.x, y: item.y, z: 1 };
            return (
              <div
                key={item.id}
                onMouseDown={(e) => startDrag(item.id, e.clientX, e.clientY)}
                onTouchStart={(e) => {
                  if (e.touches.length > 0) {
                    startDrag(
                      item.id,
                      e.touches[0].clientX,
                      e.touches[0].clientY,
                    );
                  }
                }}
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  zIndex: pos.z,
                  width: `${item.width}px`,
                }}
                className={`absolute cursor-grab active:cursor-grabbing transition-transform select-none ${
                  draggingId === item.id ? "scale-105 drop-shadow-xl" : ""
                }`}
              >
                {/* Notice.txt */}
                {item.type === "notice" ? (
                  <div className="bg-[#c0c0c0] border-2 border-white border-b-black border-r-black p-1 shadow-md text-xs select-none">
                    <div className="bg-[#000080] text-white px-2 py-0.5 font-bold flex justify-between items-center text-[11px]">
                      <span className="flex items-center gap-1">
                        Notice.txt
                      </span>
                      <span className="text-[9px] cursor-pointer">✕</span>
                    </div>
                    <div className="p-2.5 font-mono bg-white mt-1 border border-black text-[11px] leading-relaxed text-black">
                      Welcome to my digital scrapbook. You can click and move
                      these stickers freely!
                    </div>
                  </div>
                ) : (
                  /* GIF/PNG Stickers */
                  <div>
                    <img
                      src={item.src}
                      alt={item.alt}
                      draggable={false}
                      className="w-full h-auto object-contain [image-rendering:pixelated] pointer-events-none drop-shadow-sm"
                    />
                    {item.label && (
                      <span className="block text-center text-[9px] font-mono font-bold bg-black text-white px-1 mt-0.5 rounded shadow">
                        {item.label}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>{" "}
      </motion.div>
    </div>
  );
}
