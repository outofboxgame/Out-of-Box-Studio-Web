'use client';
import Link from 'next/link';
import clsx from 'clsx';

export default function SocialCards({ className }: { className?: string }) {
  return (
    <div className={clsx('grid grid-cols-1 md:grid-cols-3 gap-6', className)}>
      <Link
        href="https://github.com/outofboxstudio"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-lg border border-white/10 bg-black/20 p-6 transition transform hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(147,197,253,0.08)]"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-accent/40 to-white/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49l-.01-1.89c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.55 1.06 1.55 1.06.9 1.58 2.37 1.12 2.95.85.09-.67.35-1.12.64-1.37-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.04-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.06.8-.23 1.66-.35 2.52-.35s1.72.12 2.52.35c1.9-1.33 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.65.72 1.04 1.64 1.04 2.77 0 3.98-2.35 4.85-4.58 5.11.36.31.68.92.68 1.86l-.01 2.75c0 .27.18.6.69.49 3.96-1.36 6.83-5.2 6.83-9.72C22 6.58 17.52 2 12 2Z"
                stroke="currentColor"
                strokeOpacity="0.8"
              />
            </svg>
          </span>
          <h3 className="text-text font-semibold">GitHub</h3>
        </div>
        <p className="mt-3 text-text-muted">Code and experiments.</p>
        <p className="mt-3 text-accent">github.com/outofboxstudio</p>
      </Link>

      <Link
        href="https://instagram.com/outofboxstudio"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-lg border border-white/10 bg-black/20 p-6 transition transform hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(147,197,253,0.08)]"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-accent/40 to-white/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeOpacity="0.8" />
              <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeOpacity="0.8" />
              <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
            </svg>
          </span>
          <h3 className="text-text font-semibold">Instagram</h3>
        </div>
        <p className="mt-3 text-text-muted">Visual snippets and process shots.</p>
        <p className="mt-3 text-accent">instagram.com/outofboxstudio</p>
      </Link>

      <Link
        href="mailto:contact@outofboxstudio.dev"
        className="group rounded-lg border border-white/10 bg-black/20 p-6 transition transform hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(147,197,253,0.08)]"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-accent/40 to-white/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18v12H3z" stroke="currentColor" strokeOpacity="0.8" />
              <path d="M3 6l9 7 9-7" stroke="currentColor" strokeOpacity="0.8" />
            </svg>
          </span>
          <h3 className="text-text font-semibold">Email</h3>
        </div>
        <p className="mt-3 text-text-muted">For publishing, partnerships, or thoughtful conversations.</p>
        <p className="mt-3 text-accent">contact@outofboxstudio.dev</p>
      </Link>
    </div>
  );
}
