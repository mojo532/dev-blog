import Cat from "./cat";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto min-h-screen font-mono text-retro-black p-6 md:p-12 transition-colors duration-500">
      <header className="flex justify-center items-center mb-24 pb-6">
        <nav className="flex justify-center gap-11">
          <a href="/" className="nav-bubble">
            HOME
          </a>
          <a href="/about" className="nav-bubble">
            ABOUT
          </a>
          <a href="/projects" className="nav-bubble">
            PROJECTS
          </a>
          <a href="/books" className="nav-bubble">
            BOOKS
          </a>
          <a href="/vinyls" className="nav-bubble">
            VINYLS
          </a>
          <a href="/logs" className="nav-bubble">
            LOGS
          </a>
        </nav>
      </header>

      <section className="mb-32 flex flex-col items-center text-center">
        <h1
          className="font-lacentralita text-[14vw] md:text-[18vw] leading-[0.8] tracking-normal mb-2"
          style={{
            color: "#3883da",
          }}
        >
          Kyungmin
        </h1>

        <p className="mt-25 text-base md:text-lg max-w-lg font-bold leading-relaxed">
          Translating <span className="text-retro-emerald">deep thoughts</span>{" "}
          into digital reality. Building spaces that are both functional and
          meaningful.
        </p>
      </section>

      <section className="space-y-12">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter border-b-4 border-retro-emerald pb-1 inline-block">
            Latest Posts
          </h2>
        </div>

        <div className="space-y-12 max-w-3xl mx-auto w-full">
          <article className="group cursor-pointer flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-retro-black/10 pb-8">
            <time className="text-retro-emerald text-sm font-black shrink-0 w-32">
              APR 16, 2026
            </time>
            <h3 className="text-2xl font-black group-hover:text-retro-emerald transition-colors leading-tight">
              "Implementing Cascadia Mono in Next.js"
            </h3>
          </article>

          <article className="group cursor-pointer flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-retro-black/10 pb-8">
            <time className="text-retro-emerald text-sm font-black shrink-0 w-32">
              APR 15, 2026
            </time>
            <h3 className="text-2xl font-black group-hover:text-retro-emerald transition-colors leading-tight opacity-70">
              "The Aesthetics of Brutalist Web Design"
            </h3>
          </article>
        </div>
      </section>

      <footer className="mt-32 border-t-2 border-retro-black pt-12 pb-20 flex flex-col items-center text-center gap-6 text-xs font-bold">
        <Cat />
        <div className="flex gap-8 uppercase text-sm text-[#3883da]">
          <a href="#" className="hover:underline">
            GitHub
          </a>
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
        </div>
        <div className="opacity-60 space-y-1">
          <p>© 2026 Student Dev. All rights reserved.</p>
          <p>Built with Next.js & Cascadia Mono</p>
        </div>
      </footer>
    </main>
  );
}
