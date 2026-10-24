"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PROJECTS", href: "/projects" },
  { name: "BOOKS", href: "/books" },
  { name: "VINYLS", href: "/vinyls" },
  { name: "PLAYGROUND", href: "/playground" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-11 font-medium">
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-bubble transition-all ${
              isActive
                ? "!font-black !text-retro-black"
                : "opacity-75 hover:opacity-100"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
