import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="section-band scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? <p className="mb-3 text-sm font-medium accent-text">{eyebrow}</p> : null}
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
