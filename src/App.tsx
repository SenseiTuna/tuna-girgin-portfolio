import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import {
  ArrowDownToLine,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  Send,
} from 'lucide-react';
import InteractiveBackdrop from './components/InteractiveBackdrop';
import ProjectDetail from './components/ProjectDetail';
import ProjectVisual from './components/ProjectVisual';
import Section from './components/Section';
import {
  baseAccent,
  copy,
  education,
  experience,
  profile,
  projects,
  skillGroups,
  type Language,
  type Project,
} from './data/portfolio';

type CssVars = CSSProperties & {
  '--accent-rgb': string;
  '--accent-hex': string;
};

const LANGUAGE_STORAGE_KEY = 'portfolio-language-v2';

function localize<T extends Record<Language, string>>(value: T, language: Language) {
  return value[language];
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return saved === 'en' || saved === 'tr' ? saved : 'en';
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    window.localStorage.removeItem('portfolio-language');
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    }

    document.body.style.overflow = selectedProject ? 'hidden' : '';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  const activeAccent = selectedProject?.accent ?? baseAccent;
  const heroInterests = profile.interests[language];
  const appStyle = useMemo<CssVars>(
    () => ({
      '--accent-rgb': activeAccent.rgb,
      '--accent-hex': activeAccent.hex,
    }),
    [activeAccent],
  );

  const navItems = [
    ['about', copy.nav.about],
    ['skills', copy.nav.skills],
    ['projects', copy.nav.projects],
    ['experience', copy.nav.experience],
    ['education', copy.nav.education],
    ['contact', copy.nav.contact],
  ] as const;

  return (
    <div style={appStyle} className="relative min-h-screen overflow-hidden bg-[#020304] text-white antialiased">
      <InteractiveBackdrop />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05080a]/88 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2 sm:gap-3">
            <img src="/logo.png" alt="Tuna Girgin logo" className="h-8 w-8 object-contain" />
            <span className="hidden text-sm font-semibold text-white/86 sm:inline">{profile.name}</span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="text-sm text-white/62 transition hover:text-white">
                {localize(label, language)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex border border-white/10 bg-white/[0.03] p-1">
              {(['tr', 'en'] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-semibold uppercase transition ${
                    language === item ? 'accent-button-quiet text-black' : 'text-white/62 hover:text-white'
                  }`}
                  onClick={() => setLanguage(item)}
                  aria-pressed={language === item}
                >
                  {item}
                </button>
              ))}
            </div>
            <a href={profile.cvFile} download className="hidden sm:inline-flex button-primary px-3 py-2">
              <ArrowDownToLine size={17} aria-hidden="true" />
              <span>CV</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="section-band pt-14 sm:pt-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="hero-copy relative flex min-h-[620px] flex-col justify-center overflow-hidden py-10 sm:min-h-[680px] lg:min-h-[760px]">
              {profile.profileImage ? (
                <div className="hero-portrait-bg" aria-hidden="true">
                  <img src={profile.profileImage} alt="" />
                </div>
              ) : null}

              <div className="relative z-10">
                <p className="mb-4 text-sm font-medium accent-text">{copy.hero.eyebrow[language]}</p>
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  {profile.name}
                </h1>
                <p className="mt-3 text-lg font-medium text-white/74 sm:text-xl">{profile.title[language]}</p>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">{copy.hero.headline[language]}</p>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">{copy.hero.body[language]}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#projects" className="button-primary">
                    <Code2 size={18} aria-hidden="true" />
                    <span>{copy.hero.primaryCta[language]}</span>
                  </a>
                  <a href={profile.cvFile} download className="button-secondary">
                    <ArrowDownToLine size={18} aria-hidden="true" />
                    <span>{copy.hero.secondaryCta[language]}</span>
                  </a>
                  <a href="#contact" className="button-ghost">
                    <Send size={18} aria-hidden="true" />
                    <span>{copy.hero.contactCta[language]}</span>
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {heroInterests.map((interest) => (
                    <span key={interest} className="rounded-none border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/62">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center lg:justify-end">
              <div className="profile-panel w-full max-w-[460px] shadow-accent">
                <div>
                  <div className="flex items-start justify-between gap-5 border-b border-white/10 p-5 sm:p-6">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] accent-text">{copy.heroPanel.title[language]}</p>
                      <p className="mt-3 max-w-[300px] text-sm leading-6 text-white/64">{copy.heroPanel.signal[language]}</p>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center border border-white/10 bg-white/[0.04] p-2">
                      <img src="/logo.png" alt="Tuna Girgin logo" className="h-full w-full object-contain" />
                    </span>
                  </div>

                  <div className="px-5 py-5 sm:px-6">
                    <div className="space-y-3">
                      {heroInterests.slice(0, 4).map((item, index) => (
                        <div key={item} className="focus-row">
                          <span className="font-mono text-xs accent-text">0{index + 1}</span>
                          <span className="text-sm font-medium text-white/82">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-y border-white/10">
                    <div className="profile-metric border-r border-white/10">
                      <p className="text-xl font-semibold text-white">{projects.length}</p>
                      <p className="mt-1 text-xs text-white/48">{copy.heroPanel.featuredProjects[language]}</p>
                    </div>
                    <div className="profile-metric">
                      <p className="text-xl font-semibold text-white">3.84</p>
                      <p className="mt-1 text-xs text-white/48">{copy.heroPanel.gpa[language]}</p>
                    </div>
                  </div>

                  <div className="space-y-3 p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-white/48">{language === 'tr' ? 'Eğitim' : 'Education'}</span>
                      <span className="text-right font-medium text-white/76">{copy.heroPanel.education[language]}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="flex items-center gap-2 text-white/48">
                        <MapPin size={16} aria-hidden="true" />
                        {copy.heroPanel.location[language]}
                      </span>
                      <span className="text-right font-medium text-white/76">{profile.location}</span>
                    </div>
                  </div>
                  <div className="border-t border-white/10 px-5 py-4 sm:px-6">
                    <div className="flex items-center gap-2 text-xs text-white/48">
                      <span className="h-2 w-2 rounded-full accent-bg" />
                      <span>{copy.heroPanel.note[language]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" title={copy.about.title[language]}>
          <div className="grid gap-6 lg:grid-cols-[0.72fr_0.28fr]">
            <p className="max-w-4xl text-base leading-8 text-white/70">{copy.about.body[language]}</p>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <InfoStat label={language === 'tr' ? 'Ortalama' : 'GPA'} value="3.84 / 4.00" />
              <InfoStat label={language === 'tr' ? 'Odak' : 'Focus'} value={language === 'tr' ? 'Görü / Oyun / Ar-Ge' : 'Vision / Game / R&D'} />
              <InfoStat label={language === 'tr' ? 'Konum' : 'Location'} value={profile.location} />
            </div>
          </div>
        </Section>

        <Section id="skills" title={copy.sections.skills[language]}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title.en}
                className="skill-card"
                style={{ '--card-accent-rgb': group.accent.rgb, '--card-accent-hex': group.accent.hex } as CSSProperties}
              >
                <div className="mb-4 h-1 w-14 bg-[var(--card-accent-hex)]" />
                <h3 className="text-base font-semibold text-white">{group.title[language]}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items[language].map((item) => (
                    <span key={item} className="border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/62">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title={copy.sections.projects[language]}>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                className="project-card group text-left"
                onClick={() => setSelectedProject(project)}
                style={{ '--card-accent-rgb': project.accent.rgb, '--card-accent-hex': project.accent.hex } as CSSProperties}
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-white/10">
                  <ProjectVisual project={project} language={language} compact />
                </div>
                <div className="flex min-h-[260px] flex-col p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-[var(--card-accent-hex)]">{project.type[language]}</span>
                    <MoveRight size={18} className="text-white/40 transition group-hover:text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{project.title[language]}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{project.summary[language]}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <span key={technology} className="tech-chip">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Section>

        <Section id="experience" title={copy.sections.experience[language]}>
          <div className="space-y-4">
            {experience.map((item) => (
              <article key={item.company} className="timeline-item">
                <div className="flex gap-4">
                  <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center border border-white/10 bg-white/[0.03] accent-text">
                    <BriefcaseBusiness size={19} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-white/55">{item.period[language]}</p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{item.role[language]}</h3>
                    <p className="mt-1 text-sm text-white/68">{item.company}</p>
                    <p className="mt-4 max-w-3xl text-sm leading-6 text-white/64">{item.description[language]}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title={copy.sections.education[language]}>
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.school.en} className="timeline-item">
                <div className="flex gap-4">
                  <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center border border-white/10 bg-white/[0.03] accent-text">
                    <GraduationCap size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-white/55">{item.period[language]}</p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{item.school[language]}</h3>
                    <p className="mt-1 text-sm text-white/68">{item.degree[language]}</p>
                    <p className="mt-4 font-mono text-sm accent-text">{language === 'tr' ? 'Ortalama' : 'GPA'}: {item.gpa}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title={copy.sections.contact[language]}>
          <div className="grid gap-6 lg:grid-cols-[0.65fr_0.35fr]">
            <div>
              <p className="max-w-2xl text-base leading-7 text-white/70">{copy.contact.intro[language]}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${profile.emails[0]}`} className="button-primary">
                  <Mail size={18} aria-hidden="true" />
                  <span>{profile.emails[0]}</span>
                </a>
                <a href={profile.cvFile} download className="button-secondary">
                  <ArrowDownToLine size={18} aria-hidden="true" />
                  <span>CV</span>
                </a>
              </div>
            </div>
            <div className="grid gap-3">
              <ContactLink icon={<Github size={18} aria-hidden="true" />} label="GitHub" href={profile.github} />
              <ContactLink icon={<Linkedin size={18} aria-hidden="true" />} label="LinkedIn" href={profile.linkedin} />
              <ContactLink icon={<MapPin size={18} aria-hidden="true" />} label={profile.location} />
            </div>
          </div>
        </Section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>{profile.name}</span>
          <span>{profile.location}</span>
        </div>
      </footer>

      <ProjectDetail project={selectedProject} language={language} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

function InfoStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs text-white/45">{label}</p>
      <p className="mt-2 text-sm font-medium text-white/82">{value}</p>
    </div>
  );
}

function ContactLink({ icon, label, href }: { icon: ReactNode; label: string; href?: string }) {
  const className = 'flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white';

  if (!href) {
    return (
      <div className={className}>
        <span className="accent-text">{icon}</span>
        <span>{label}</span>
      </div>
    );
  }

  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className={className}>
      <span className="accent-text">{icon}</span>
      <span>{label}</span>
      {href.startsWith('http') ? <ExternalLink size={15} className="ml-auto text-white/30" aria-hidden="true" /> : null}
    </a>
  );
}
