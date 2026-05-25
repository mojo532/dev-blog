"use client";

import { motion } from "framer-motion";
import styles from "./about.module.css";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start px-4 my-12">
        {/* profil card */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className={`md:col-span-1 ${styles.profileCard} `}
        >
          <div className={styles.avatarBox}>
            <Image
              src="/me_image.jpg"
              alt="Kyungmin Kim Profile"
              width={300}
              height={200}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h2 className="text-2xl font-black mb-2">👾Kyungmin Kim</h2>
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
            <p className="text-lg font-bold leading-relaxed text-retro-black">
              Hi, I’m <span className="text-retro-orange">Kyungmin Kim.</span> I
              write code to make the digital world a more meaningful and
              enjoyable space. Right now, I'm studying Computer
              Science(Informatik) at the University of Rostock in Germany.
              Before pivoting to tech, I was a literature major and worked as a
              marketer in the publishing industry. I’m still deeply in love with
              art, avidly collecting vinyl, and sharing my space with a cat
              named <span className="italic">Mojo</span>.
            </p>
          </section>

          {/* Interests */}
          <section>
            <h3 className="section-title">Skills & Interests</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Frontend */}
              <li className={styles.interestCard}>
                <div className={styles.interestTitle}>
                  <span>✦</span> Frontend Engineering
                </div>
                <div className={styles.interestStack}>
                  Next.js, React, JavaScript
                </div>
              </li>

              {/* Backend */}
              <li className={styles.interestCard}>
                <div className={styles.interestTitle}>
                  <span>✦</span> Backend Engineering
                </div>
                <div className={styles.interestStack}>Java, Python, C</div>
              </li>

              {/* Cloud */}
              <li className={styles.interestCard}>
                <div className={styles.interestTitle}>
                  <span>✦</span> Cloud Engineering
                </div>
                <div className={styles.interestStack}>GCP</div>
              </li>

              {/* Art & Lifestyle */}
              <li className={styles.interestCard}>
                <div className={styles.interestTitle}>
                  <span>✦</span> Art & Lifestyle
                </div>
                <div className={styles.interestStack}>
                  Pixel Art, Literature, Vinyl
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
              <span className={styles.contactLabel}>📧 EMAIL</span>
              <h4 className={styles.contactValue}>rudals5320@gmail.com</h4>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
