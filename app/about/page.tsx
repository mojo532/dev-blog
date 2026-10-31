"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import Image from "next/image";

export default function AboutPage() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetY = e.clientY - rect.top;
    const percentage = (offsetY / rect.height) * 100;
    setSliderPos(Math.min(Math.max(percentage, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const offsetY = touch.clientY - rect.top;
    const percentage = (offsetY / rect.height) * 100;
    setSliderPos(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start px-4 my-8">
        {/* profil card */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className={`md:col-span-1 ${styles.profileCard} `}
        >
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className={`${styles.avatarBox} relative cursor-row-resize overflow-hidden select-none`}
          >
            {/* real photo */}
            <Image
              src="/me_image.jpg"
              alt="Kyungmin Kim Profile"
              fill
              className="object-cover"
              priority
            />

            {/* overlay-pixel art */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                clipPath: `polygon(0 0, 100% 0, 100% ${sliderPos}%, 0 ${sliderPos}%)`,
              }}
            >
              <Image
                src="/me-pixel3.jpg"
                alt="Kyungmin Kim Pixel Art"
                fill
                className="object-cover [image-rendering:pixelated]"
                priority
              />
            </div>

            {/* handle */}
            <div
              className="absolute left-0 w-full flex items-center pointer-events-none"
              style={{ top: `${sliderPos}%` }}
            >
              <div className="w-full h-[2px] bg-black shadow-sm" />
              <div className="absolute left-1.5 w-3.5 h-3.5 bg-[#c0c0c0] border border-white border-r-black border-b-black shadow" />
            </div>
          </div>

          <h2 className="text-2xl font-black mb-2 mt-4">👾Kyungmin Kim</h2>
          <p className="text-sm leading-tight mb-4">
            Computer Science Student & <br />
            Developer
          </p>
        </motion.div>

        {/* body */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`md:col-span-2 ${styles.rightContent} space-y-10`}
        >
          {/* about me */}
          <section>
            <h3 className="section-title">About me</h3>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-semibold leading-snug text-retro-black">
                Hi, I’m{" "}
                <span className="text-retro-orange font-bold">Kyungmin.</span>{" "}
                <span className="text-gray-400">
                  A CS student and aspiring software engineer bridging human
                  values and technology.
                </span>
              </p>

              {/* Inhalt */}
              <p className="text-base font-normal leading-relaxed text-retro-black">
                Right now, I'm studying Computer Science (B.Sc. Informatik) at{" "}
                <a
                  href="https://www.ief.uni-rostock.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold underline-offset-4 hover:text-gray-500 transition-colors"
                >
                  Universität Rostock
                </a>{" "}
                in Germany. University Rostock in Germany. I love building
                things from scratch.
                <br />
                <br />
                Coming from a background in literature and publishing, I
                naturally care about clear structure,{" "}
                <span className="font-semibold">
                  {" "}
                  thoughtful communication, and human-centered design.
                </span>{" "}
                As a software engineer, I enjoy building robust and purposeful
                systems. My work spans from designing data structures and
                backend logic to crafting responsive, interactive web
                interfaces.
                <br />
                <br />
                My goal is to create software that genuinely serves people,
                learn continuously through hands-on engineering projects, and{" "}
                <span className="font-semibold">
                  make technology approachable and meaningful.
                </span>
              </p>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h3 className="section-title">Skills & Interests</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Frontend */}
              <li className={styles.interestCard}>
                <div className={styles.interestTitle}>
                  <span>
                    <span className="grayscale opacity-80 inline-block">
                      🖥️
                    </span>
                  </span>{" "}
                  Frontend Engineering
                </div>
                <div className={styles.interestStack}>React, JavaScript</div>
              </li>

              {/* Backend */}
              <li className={styles.interestCard}>
                <div className={styles.interestTitle}>
                  <span>
                    <span className="grayscale opacity-80 inline-block">
                      🖥️
                    </span>
                  </span>{" "}
                  Backend Engineering
                </div>
                <div className={styles.interestStack}>Java, Python, C, SQL</div>
              </li>

              {/* Cloud */}
              <li className={styles.interestCard}>
                <div className={styles.interestTitle}>
                  <span>
                    <span className="grayscale opacity-80 inline-block">
                      🌐
                    </span>
                  </span>{" "}
                  Cloud Engineering
                </div>
                <div className={styles.interestStack}>GCP, Kubernetes</div>
              </li>

              {/* Art & Lifestyle */}
              <li className={styles.interestCard}>
                <div className={styles.interestTitle}>
                  <span>
                    <span className="grayscale opacity-80 inline-block">
                      🎵
                    </span>
                  </span>{" "}
                  Art & Lifestyle
                </div>
                <div className={styles.interestStack}>
                  Pixel Art, Literature, Collecting Vinyls
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="section-title">Experience & Education</h3>
            <div className={`${styles.interestCard} p-6 flex flex-col`}>
              {/* 1. Universität Rostock */}
              <div className="flex flex-col md:flex-row gap-4 pb-6 border-b border-dashed border-gray-200">
                <div className="flex-shrink-0 md:w-[160px]">
                  <span className="text-xs font-bold px-2 py-0.5 bg-retro-orange/10 text-retro-orange rounded uppercase tracking-wider block w-max mb-1">
                    Education
                  </span>
                  <span className="text-[12px] font-medium text-gray-500 block">
                    Sep 2024 – Present
                  </span>
                </div>
                <div className={styles.timelineRight}>
                  <h4>B.Sc. in Informatik (Computer Science)</h4>
                  <h5>Universität Rostock, Germany</h5>
                  <div className="projectSection">
                    <div>
                      <span className="boldLabel">Relevant Core:</span>
                      <p className="leading-relaxed">
                        Programming in Java, Python and C, Algorithms and Data
                        Structures, Databases, Software Engineering
                      </p>
                    </div>
                    <div>
                      <span className="projectSubTitle">Ongoing Projects</span>
                      <ul>
                        <li>
                          <span className="boldLabel">
                            Scrum Board Web Application
                          </span>{" "}
                          — Developed a collaborative project management tool
                          (Mainly focused on Frontend Engineering)
                        </li>
                        <li>
                          <span className="boldLabel">
                            Battlesnake AI Agent
                          </span>{" "}
                          — Designed and implemented an autonomous AI snake for
                          the Battlesnake programming competition
                        </li>
                        <li>
                          <span className="boldLabel">
                            Modelling & Simulation
                          </span>{" "}
                          — Designed and evaluated computational models for
                          dynamic systems, applying simulation methodologies to
                          solve complex engineering problems.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Public Official */}
              <div className="flex flex-col md:flex-row gap-4 pt-6 pb-6 border-b border-dashed border-gray-200">
                <div className="flex-shrink-0 md:w-[160px]">
                  <span className="text-xs font-bold px-2 py-0.5 bg-retro-orange/10 text-retro-orange rounded uppercase tracking-wider block w-max mb-1">
                    Experience
                  </span>
                  <span className="text-[12px] font-medium text-gray-500 block">
                    Aug 2021 – Jul 2022
                  </span>
                </div>
                <div className={styles.timelineRight}>
                  <h4>Public Official (9th Grade for Local Administration)</h4>
                  <h5>Goyang-si, South Korea</h5>
                  <ul>
                    <li>
                      Served as a public servant handling local administrative
                      duties and public services.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Marketer */}
              <div className="flex flex-col md:flex-row gap-4 pt-6 pb-6 border-b border-dashed border-gray-200">
                <div className="flex-shrink-0 md:w-[160px]">
                  <span className="text-xs font-bold px-2 py-0.5 bg-retro-orange/10 text-retro-orange rounded uppercase tracking-wider block w-max mb-1">
                    Experience
                  </span>
                  <span className="text-[12px] font-medium text-gray-500 block">
                    Dec 2018 – Oct 2020
                  </span>
                </div>
                <div className={styles.timelineRight}>
                  <h4>Marketing Specialist</h4>
                  <h5>Areumdaun Saramdeul Publishing, Paju-si, South Korea</h5>
                  <ul>
                    <li>
                      Responsible for planning marketing campaigns and creating
                      promotional/advertising materials.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 4. Dongguk University */}
              <div className="flex flex-col md:flex-row gap-4 pt-6">
                <div className="flex-shrink-0 md:w-[160px]">
                  <span className="text-xs font-bold px-2 py-0.5 bg-retro-orange/10 text-retro-orange rounded uppercase tracking-wider block w-max mb-1">
                    Education
                  </span>
                  <span className="text-[12px] font-medium text-gray-500 block">
                    Mar 2014 – Feb 2019
                  </span>
                </div>
                <div className={styles.timelineRight}>
                  <h4>Bachelor of Arts (B.A.)</h4>
                  <h5>Dongguk University, Seoul, South Korea</h5>
                  <ul>
                    <li>First Major: Buddhist Studies</li>
                    <li>Second Major: Creative Writing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* contact */}
          <section>
            <h3 className="section-title">Contact</h3>
            <div className={styles.contactRow}>
              <span className={styles.contactLabel}>EMAIL</span>
              <h4 className={styles.contactValue}>rudals5320@gmail.com</h4>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
