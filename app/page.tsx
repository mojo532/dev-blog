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
