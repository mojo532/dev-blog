import Link from "next/link";
import Cat from "./cat";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <h1
          className={`${styles.mainTitle} font-consolamono !text-[170px] md:!text-[170px] font-bold [-webkit-text-stroke:10px_white] [paint-order:stroke_fill] clean-bounce-title`}
        >
          Kyungmin
        </h1>

        <p className={styles.heroDescription}>
          Translating <span className="text-retro-orange">deep thoughts</span>{" "}
          into digital reality. Building spaces that are both functional and
          meaningful.
        </p>

        {/* search- About */}
        <div className="flex justify-center w-full mt-10">
          <Link
            href="/about"
            className="group flex items-center justify-between w-full max-w-[550px] h-12 px-5 bg-white hover:bg-orange-50 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-200 cursor-pointer"
          >
            <span className="text-sm font-normal text-gray-500 group-hover:text-gray-700 transition-colors">
              Would you like to know more about me?
            </span>

            <div className="flex items-center justify-center pl-3 border-l border-gray-200 group-hover:border-gray-300 transition-colors">
              <svg
                className="w-5 h-5 text-gray-800 group-hover:scale-105 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* blog */}
      <section className={styles.blogSection}>
        <div className={styles.sectionTitleWrapper}>
          <h2 className={styles.sectionTitle}>Latest Posts</h2>
        </div>

        <div className="space-y-12 max-w-3xl mx-auto w-full">
          <article className="group cursor-pointer flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-retro-black/10 pb-8">
            <time className="text-retro-orange text-sm font-black shrink-0 w-32">
              APR 16, 2026
            </time>
            <h3 className="text-2xl font-black group-hover:text-retro-orange transition-colors leading-tight">
              "Implementing Cascadia Mono in Next.js"
            </h3>
          </article>

          <article className="group cursor-pointer flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-retro-black/10 pb-8">
            <time className="text-retro-orange text-sm font-black shrink-0 w-32">
              APR 15, 2026
            </time>
            <h3 className="text-2xl font-black group-hover:text-retro-orange transition-colors leading-tight opacity-70">
              "The Aesthetics of Brutalist Web Design"
            </h3>
          </article>
        </div>
      </section>

      {/* moving cat */}
      <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <Cat />
        </div>
      </div>
    </div>
  );
}
