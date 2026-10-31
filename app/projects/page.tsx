"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../about/about.module.css";

interface Project {
  id: string;
  title: string;
  tag: string;
  year: string;
  isOngoing?: boolean;
  previewName: string;
  image?: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Zoomable Music Graph",
    tag: "INTERACTION",
    year: "2026",
    isOngoing: true,
    previewName: "music_graph.jsx",
    image: "/images/placeholder.png",
    description:
      "Interactive lens-based graph visualization exploring rock musician networks using Fisheye, Local-Edge, and Bring-Neighbors lenses.",
  },
  {
    id: "2",
    title: "Multi-Agent Wumpus",
    tag: "AI AGENT",
    year: "2026",
    isOngoing: true,
    previewName: "wumpus_sim.py",
    image: "/images/placeholder.png",
    description:
      "Cooperative multi-agent environment built on top of the classic Hunt the Wumpus game, coordinating sensing and decentralized navigation.",
  },
  {
    id: "3",
    title: "Battlesnake",
    tag: "ALGORITHM",
    year: "2026",
    isOngoing: false,
    previewName: "battlesnake.py",
    image: "/images/placeholder.png",
    description:
      "Autonomous snake agent competing in real-time grid game battles, optimized with spatial heuristics and flood-fill survival logic.",
  },
  {
    id: "4",
    title: "Scrum Board Application",
    tag: "FULL-STACK",
    year: "2025",
    isOngoing: false,
    previewName: "scrum_board.tsx",
    image: "/images/placeholder.png",
    description:
      "Collaborative project management dashboard supporting sprint cycles, drag-and-drop task tracking, and role-based permissions.",
  },

  {
    id: "5",
    title: "Dynamic System Modelling",
    tag: "SIMULATION",
    year: "2026",
    isOngoing: false,
    previewName: "system_sim.py",
    image: "/images/placeholder.png",
    description:
      "Designed and evaluated computational models for dynamic systems, applying simulation methodologies and numerical analysis to solve engineering problems.",
  },
];

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full"
    >
      <div className="max-w-5xl mx-auto px-4 my-8 space-y-8">
        <section>
          <h3 className="section-title">Projects</h3>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`${styles.interestCard} p-6 flex flex-col justify-between group cursor-pointer`}
            >
              <div>
                <div className="flex items-baseline justify-between mb-3.5">
                  <h4 className="font-consolamono text-lg md:text-xl font-bold tracking-tight text-retro-black transition-colors duration-150 group-hover:text-retro-orange">
                    {project.title}
                  </h4>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-xs font-bold px-2 py-0.5 bg-neutral-100 text-neutral-600 border border-neutral-200/80 rounded uppercase tracking-wider font-mono">
                      #{project.tag}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="w-full aspect-[16/10] bg-[#faf8f5] rounded-xl overflow-hidden mb-4 border border-black/10 flex flex-col">
                  <div className="h-7 bg-white/90 border-b border-black/5 px-3 flex items-center justify-between select-none">
                    <div className="flex gap-1.5 items-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#d97768] inline-block shadow-inner" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e5ab55] inline-block shadow-inner" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#6ea88f] inline-block shadow-inner" />
                    </div>

                    <div className="flex items-center gap-2">
                      {project.isOngoing && (
                        <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#008080]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#008080] animate-pulse inline-block" />
                          in-progress
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-gray-400 tracking-tight">
                        {project.previewName}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center p-4">
                    <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">
                      [ Image Area ]
                    </span>
                  </div>
                </div>

                <p className="text-sm text-retro-black/80 font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </motion.div>
  );
}
