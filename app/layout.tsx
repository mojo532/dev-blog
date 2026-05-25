import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const laCentralita = localFont({
  src: "./LaCentralita.otf",
  variable: "--font-lacentralita",
});

export const metadata: Metadata = {
  title: "The Homepage of Kyungmin Kim",
  description: "A dev-blog of Kyungmin Kim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`antialiased relative min-h-screen text-retro-black ${laCentralita.variable}`}
      >
        <div className="sand-texture" />
        <div className="relative z-10 max-w-6xl mx-auto min-h-screen p-6 md:p-12 flex flex-col justify-between">
          {/* header */}
          <header className="flex justify-center items-center mb-18 pb-6">
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

          {/* body */}
          <main className="flex-grow w-full">{children}</main>

          {/* footer */}
          <footer className="relative z-50 mt-32 border-t-2 border-retro-black pt-12 pb-20 flex flex-col items-center text-center gap-6 text-xs font-bold">
            <div className="flex gap-8 uppercase text-sm text-[#e09969]">
              <a
                href="https://github.com/mojo532"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
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
        </div>
      </body>
    </html>
  );
}
