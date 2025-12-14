import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type SectionProps = PropsWithChildren<{ className?: string }>;

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={clsx('mx-auto max-w-6xl px-4 pt-24', className)}>
      {children}
    </section>
  );
}

