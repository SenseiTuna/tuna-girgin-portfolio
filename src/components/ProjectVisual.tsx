import { useState } from 'react';
import type { Language, Project } from '../data/portfolio';

type ProjectVisualProps = {
  project: Project;
  language: Language;
  compact?: boolean;
};

export default function ProjectVisual({ project, language, compact = false }: ProjectVisualProps) {
  const [failed, setFailed] = useState(false);

  if (project.image && !failed) {
    return (
      <img
        src={project.image}
        alt={`${project.title[language]} screenshot`}
        className="h-full w-full object-cover"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="grid h-full w-full place-items-center bg-[#101516] p-5">
      <div className="w-full max-w-[360px] space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="font-mono text-xs text-white/55">{project.id}</span>
          <span className="h-2 w-2 rounded-full accent-bg" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-3/4 accent-soft" />
          <div className="h-3 w-1/2 bg-white/10" />
          <div className="h-3 w-5/6 bg-white/10" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {project.technologies.slice(0, compact ? 3 : 6).map((technology) => (
            <div key={technology} className="border border-white/10 bg-white/[0.03] px-2 py-2 text-center font-mono text-[10px] text-white/55">
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
