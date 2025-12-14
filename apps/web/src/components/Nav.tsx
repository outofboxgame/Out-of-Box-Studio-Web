'use client';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/games', label: 'Games' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/20 bg-black/30 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg tracking-wide font-semibold text-text">
          Out Of Box Studio
        </Link>
        <button
          className="sm:hidden text-text"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <ul className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-text-muted hover:text-text transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-black/60">
          <ul className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-1 text-text-muted hover:text-text"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
