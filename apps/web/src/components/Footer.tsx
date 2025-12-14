'use client';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-black/40 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between text-sm">
        <span className="text-text-muted">© {year} Out Of Box Studio</span>
        <nav className="flex items-center gap-4">
          <Link href="/games" className="text-text-muted hover:text-text transition-colors">
            Games
          </Link>
          <Link href="/about" className="text-text-muted hover:text-text transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-text-muted hover:text-text transition-colors">
            Contact
          </Link>
        </nav>
      </div>
      <div className="text-center text-xs text-text-muted pb-8">
        Crafted with care. Built to last.
      </div>
    </footer>
  );
}
