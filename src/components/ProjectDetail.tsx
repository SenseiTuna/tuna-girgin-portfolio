import { ExternalLink, Github, LockKeyhole, X } from 'lucide-react';
import type { Language, Project } from '../data/portfolio';
import { copy } from '../data/portfolio';
import ProjectVisual from './ProjectVisual';

type ProjectDetailProps = {
  project: Project | null;
  language: Language;
  onClose: () => void;
};

export default function ProjectDetail({ project, language, onClose }: ProjectDetailProps) {
  if (!project) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label={copy.projectDetails.close[language]}
        className="modal-overlay absolute inset-0 bg-black/72 backdrop-blur-sm"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        className="modal-panel relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden border border-white/10 bg-[#0c1011] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0c1011]/95 px-5 py-4 backdrop-blur sm:px-7">
          <div>
            <p className="text-sm accent-text">{project.type[language]}</p>
            <h3 id="project-detail-title" className="mt-1 text-xl font-semibold text-white sm:text-2xl">
              {project.title[language]}
            </h3>
          </div>
          <button type="button" className="icon-button" onClick={onClose} title={copy.projectDetails.close[language]}>
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-8 overflow-y-auto px-5 py-6 sm:px-7 sm:py-7">
          <div className="overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="aspect-[16/9] w-full">
              <ProjectVisual project={project} language={language} />
            </div>
          </div>

          <div>
            <p className="text-base leading-7 text-white/72">{project.description[language]}</p>
          </div>

          <div className="case-study-grid">
            <CaseStudyBlock title={copy.projectDetails.problem[language]} body={project.caseStudy[language].problem} />
            <CaseStudyBlock title={copy.projectDetails.solution[language]} body={project.caseStudy[language].solution} />
            <CaseStudyBlock title={copy.projectDetails.contribution[language]} body={project.caseStudy[language].contribution} />
            <CaseStudyBlock title={copy.projectDetails.outcome[language]} body={project.caseStudy[language].outcome} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="detail-block">
              <p className="detail-label">{copy.projectDetails.role[language]}</p>
              <p className="mt-2 text-white">{project.role[language]}</p>
            </div>
            <div className="detail-block">
              <p className="detail-label">{copy.projectDetails.status[language]}</p>
              <p className="mt-2 text-white">{project.status[language]}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{copy.projectDetails.technologies[language]}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="tech-chip">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{copy.projectDetails.contributions[language]}</h4>
            <ul className="mt-4 space-y-3">
              {project.contributions[language].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/72">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full accent-bg" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" className="button-primary">
                <Github size={18} aria-hidden="true" />
                <span>{copy.projectDetails.github[language]}</span>
              </a>
            ) : (
              <span className="button-muted">
                <LockKeyhole size={18} aria-hidden="true" />
                <span>{copy.projectDetails.privateLabel[language]}</span>
              </span>
            )}
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer" className="button-secondary">
                <ExternalLink size={18} aria-hidden="true" />
                <span>{copy.projectDetails.demo[language]}</span>
              </a>
            ) : null}
          </div>
        </div>
      </aside>
    </div>
  );
}

function CaseStudyBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="case-study-block">
      <h4 className="case-study-title">{title}</h4>
      <p className="mt-3 text-sm leading-6 text-white/66">{body}</p>
    </section>
  );
}
