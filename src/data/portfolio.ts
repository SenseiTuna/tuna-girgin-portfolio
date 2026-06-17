export type Language = 'tr' | 'en';

export type LocalizedText = Record<Language, string>;

export type Accent = {
  label: string;
  hex: string;
  rgb: string;
};

export type ProjectCaseStudy = Record<
  Language,
  {
    problem: string;
    solution: string;
    contribution: string;
    outcome: string;
  }
>;

export type Project = {
  id: string;
  title: LocalizedText;
  type: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  caseStudy: ProjectCaseStudy;
  role: LocalizedText;
  status: LocalizedText;
  technologies: string[];
  contributions: Record<Language, string[]>;
  github?: string;
  demo?: string;
  image: string;
  accent: Accent;
};

export type SkillGroup = {
  title: LocalizedText;
  items: Record<Language, string[]>;
  accent: Accent;
};

export const baseAccent: Accent = {
  label: 'Soft Steel',
  hex: '#cbd5e1',
  rgb: '203 213 225',
};

export const profile = {
  name: 'Tuna Girgin',
  title: {
    tr: 'Yazılım Mühendisliği Öğrencisi',
    en: 'Software Engineering Student',
  },
  location: 'İstanbul / Ankara, Türkiye',
  emails: ['tunagirgin@outlook.com'],
  github: 'https://github.com/SenseiTuna',
  linkedin: 'https://www.linkedin.com/in/tunagirgin/',
  cvFile: '/tuna_girgin_cv.pdf',
  profileImage: '/profile.png' as string | null,
  interests: {
    tr: [
      'Bilgisayarlı Görü',
      'Oyun Geliştirme',
      'Gömülü Sistemler',
      'Otomasyon',
      'Ar-Ge Yazılım Geliştirme',
      'Yapay Zeka',
    ],
    en: [
      'Computer Vision',
      'Game Development',
      'Embedded Systems',
      'Automation',
      'R&D Software Development',
      'Artificial Intelligence',
    ],
  },
};

export const copy = {
  nav: {
    about: { tr: 'Hakkımda', en: 'About' },
    skills: { tr: 'Yetkinlikler', en: 'Skills' },
    projects: { tr: 'Projeler', en: 'Projects' },
    experience: { tr: 'Deneyim', en: 'Experience' },
    education: { tr: 'Eğitim', en: 'Education' },
    contact: { tr: 'İletişim', en: 'Contact' },
  },
  hero: {
    eyebrow: {
      tr: 'Merhaba, ben Tuna.',
      en: 'Hi, I am Tuna.',
    },
    headline: {
      tr: 'Yazılım, görüntü işleme ve prototipleme taraflarını birleştiren projeler geliştiriyorum.',
      en: 'I build projects that connect software, computer vision and prototyping.',
    },
    body: {
      tr: 'Ankara Üniversitesi Yazılım Mühendisliği öğrencisiyim. Görüntü işleme, oyun sistemleri, gömülü sistemler ve otomasyon alanlarında üretmeyi; fikirleri çalışan prototiplere dönüştürmeyi seviyorum.',
      en: 'I am a Software Engineering student at Ankara University. I enjoy building in computer vision, game systems, embedded systems and automation, and turning ideas into working prototypes.',
    },
    primaryCta: { tr: 'Projeleri İncele', en: 'View Projects' },
    secondaryCta: { tr: 'CV İndir', en: 'Download CV' },
    contactCta: { tr: 'İletişime Geç', en: 'Contact' },
  },
  heroPanel: {
    title: { tr: 'Odak Alanları', en: 'Current Focus' },
    signal: {
      tr: 'Staj, junior yazılım ve Ar-Ge fırsatlarına açık',
      en: 'Open to internship, junior software and R&D opportunities',
    },
    featuredProjects: { tr: 'Öne çıkan proje', en: 'Featured projects' },
    gpa: { tr: 'Not ortalaması', en: 'GPA' },
    education: { tr: 'Ankara Üniversitesi', en: 'Ankara University' },
    location: { tr: 'Konum', en: 'Location' },
    note: {
      tr: 'Gerçek kullanım senaryolarına odaklanan proje seçkisi',
      en: 'Selected work focused on real-use scenarios',
    },
  },
  about: {
    title: { tr: 'Hakkımda', en: 'About' },
    body: {
      tr: 'Ankara Üniversitesi Yazılım Mühendisliği öğrencisiyim. Bilgisayarlı görü, oyun geliştirme, gömülü sistemler, otomasyon ve Ar-Ge yazılım geliştirme alanlarında proje üretmeye odaklanıyorum. Donanım, prototipleme ve yazılım taraflarını birlikte düşünmeyi seviyorum; bu yüzden projelerimde görüntü işleme, oyun mekaniği, tarayıcı otomasyonu, test ve hata ayıklama süreçleri bir araya gelebiliyor.',
      en: 'I am a Software Engineering student at Ankara University. My work focuses on computer vision, game development, embedded systems, automation and R&D software development. I like connecting hardware, prototyping and software thinking, which leads my projects to combine image processing, gameplay systems, browser automation and testing/debugging workflows.',
    },
  },
  sections: {
    skills: { tr: 'Teknik Yetkinlikler', en: 'Technical Skills' },
    projects: { tr: 'Öne Çıkan Projeler', en: 'Featured Projects' },
    experience: { tr: 'İş Deneyimi', en: 'Experience' },
    education: { tr: 'Eğitim', en: 'Education' },
    contact: { tr: 'İletişim', en: 'Contact' },
  },
  projectDetails: {
    role: { tr: 'Rol', en: 'Role' },
    status: { tr: 'Durum', en: 'Status' },
    problem: { tr: 'Problem', en: 'Problem' },
    solution: { tr: 'Çözüm', en: 'Solution' },
    contribution: { tr: 'Benim Katkım', en: 'My Contribution' },
    outcome: { tr: 'Sonuç', en: 'Outcome' },
    technologies: { tr: 'Teknolojiler', en: 'Technologies' },
    contributions: { tr: 'Öne Çıkan Katkılar', en: 'Key Contributions' },
    github: { tr: 'GitHub', en: 'GitHub' },
    demo: { tr: 'Demo', en: 'Demo' },
    privateLabel: { tr: 'Açık kaynak deposu yok', en: 'No public repository' },
    close: { tr: 'Kapat', en: 'Close' },
  },
  contact: {
    intro: {
      tr: 'Staj, junior yazılım, Ar-Ge, bilgisayarlı görü, oyun geliştirme veya gömülü sistem fırsatları için iletişime geçebilirsiniz.',
      en: 'Open to internship, junior software, R&D, computer vision, game development and embedded systems opportunities.',
    },
  },
};

export const skillGroups: SkillGroup[] = [
  {
    title: { tr: 'Bilgisayarlı Görü', en: 'Computer Vision' },
    items: {
      tr: ['Python', 'OpenCV', 'YOLO', 'OCR', 'SQLite'],
      en: ['Python', 'OpenCV', 'YOLO', 'OCR', 'SQLite'],
    },
    accent: { label: 'Cyan', hex: '#22d3ee', rgb: '34 211 238' },
  },
  {
    title: { tr: 'Oyun Geliştirme', en: 'Game Development' },
    items: {
      tr: ['Unity', 'C#', 'Oynanış Mekanikleri', 'Savaş Sistemleri', '2D Roguelike'],
      en: ['Unity', 'C#', 'Gameplay Mechanics', 'Combat Systems', '2D Roguelike'],
    },
    accent: { label: 'Violet', hex: '#a78bfa', rgb: '167 139 250' },
  },
  {
    title: { tr: 'Gömülü Sistemler ve Prototipleme', en: 'Embedded Systems & Prototyping' },
    items: {
      tr: ['Devre Montajı', 'Test', 'Hata Ayıklama', '3D Parça Tasarımı', 'Prototipleme'],
      en: ['Circuit Assembly', 'Testing', 'Debugging', '3D Part Design', 'Prototyping'],
    },
    accent: { label: 'Emerald', hex: '#34d399', rgb: '52 211 153' },
  },
  {
    title: { tr: 'Otomasyon ve Tarayıcı Araçları', en: 'Automation & Web Tools' },
    items: {
      tr: ['JavaScript', 'Tampermonkey', 'DOM İşleme', 'Tarayıcı Eklentileri'],
      en: ['JavaScript', 'Tampermonkey', 'DOM Manipulation', 'Browser Extensions'],
    },
    accent: { label: 'Amber', hex: '#f59e0b', rgb: '245 158 11' },
  },
  {
    title: { tr: 'Ar-Ge Yazılım Geliştirme', en: 'R&D Software Development' },
    items: {
      tr: ['İç Araçlar', 'Hata Ayıklama Akışları', 'Teknik Dokümantasyon', 'Problem Çözme'],
      en: ['Internal Tools', 'Debugging Workflows', 'Technical Documentation', 'Problem Solving'],
    },
    accent: { label: 'Blue', hex: '#60a5fa', rgb: '96 165 250' },
  },
  {
    title: { tr: 'Yapay Zeka', en: 'Artificial Intelligence' },
    items: {
      tr: ['Model Entegrasyonu', 'Veri Odaklı Düşünme', 'Uygulamalı Yapay Zeka İlgisi'],
      en: ['Model Integration', 'Data-Oriented Thinking', 'Applied AI Interest'],
    },
    accent: { label: 'Rose', hex: '#fb7185', rgb: '251 113 133' },
  },
];

export const projects: Project[] = [
  {
    id: 'campus-vehicle-system',
    title: {
      tr: 'Kampüs Taşıt Sistemi',
      en: 'Campus Vehicle System',
    },
    type: {
      tr: 'Okul ve ekip projesi',
      en: 'School and team project',
    },
    summary: {
      tr: 'Kampüs araç giriş-çıkış takibi için görüntü işleme tabanlı araç ve plaka takip sistemi.',
      en: 'Computer vision based vehicle and license plate tracking system for campus entry and exit monitoring.',
    },
    description: {
      tr: 'Kampüs güvenliği ve araç hareketlerinin izlenmesi için geliştirilen sistem; araç algılama, plaka okuma, kayıt tutma ve giriş-çıkış akışlarını bir araya getirir. Proje okul içinde kullanılacağı için kaynak kodu açık değildir.',
      en: 'Built for campus security and vehicle movement monitoring, this system combines vehicle detection, license plate OCR, record keeping and entry-exit workflows. The source code is not public because the project is intended for internal campus use.',
    },
    caseStudy: {
      tr: {
        problem: 'Kampüs araç giriş-çıkışlarının manuel takibi hem zaman kaybettiriyor hem de kayıtların tutarlı yönetilmesini zorlaştırıyordu.',
        solution: 'Araç algılama, plaka okuma ve yerel kayıt tutma akışlarını birleştiren görüntü işleme tabanlı bir takip sistemi tasarlandı.',
        contribution: 'YOLO, OpenCV ve OCR bileşenleriyle çalışan algılama akışlarına; kayıt yapısı ve sistem mimarisi kararlarına katkı sağladım.',
        outcome: 'Okul içinde kullanılmak üzere geliştirilen, kaynak kodu kapalı tutulan ve kampüs güvenliği senaryosuna odaklanan bir ekip projesi ortaya çıktı.',
      },
      en: {
        problem: 'Manual tracking of campus vehicle entry and exit created friction and made consistent record keeping harder.',
        solution: 'The team designed a computer vision based tracking system that combines vehicle detection, license plate OCR and local record keeping.',
        contribution: 'I contributed to detection workflows using YOLO, OpenCV and OCR, and supported decisions around records and system architecture.',
        outcome: 'The result is a private team project built for internal school use and focused on a real campus security workflow.',
      },
    },
    role: {
      tr: 'Ekip üyesi, geliştirici, bilgisayarlı görü model eğitmeni',
      en: 'Team member, developer, computer vision model trainer',
    },
    status: {
      tr: 'Okul içi kullanım için kapalı proje',
      en: 'Private project for internal school use',
    },
    technologies: ['Python', 'YOLO', 'OpenCV', 'OCR', 'SQLite'],
    contributions: {
      tr: [
        'Araç ve plaka takibi için görüntü işleme akışlarına katkı sağladım.',
        'YOLO, OpenCV ve OCR teknolojileriyle çalışan sistem mimarisine destek verdim.',
        'Araç giriş-çıkış kayıtlarının tutulduğu yerel veri akışlarının tasarımında yer aldım.',
      ],
      en: [
        'Contributed to computer vision workflows for vehicle and license plate tracking.',
        'Supported the system architecture using YOLO, OpenCV and OCR technologies.',
        'Worked on local data flow design for vehicle entry and exit records.',
      ],
    },
    image: '/projects/campus-vehicle-system.png',
    accent: { label: 'Cyan / Electric Blue', hex: '#22d3ee', rgb: '34 211 238' },
  },
  {
    id: 'olympus-voidbound',
    title: {
      tr: 'Olympus Voidbound',
      en: 'Olympus Voidbound',
    },
    type: {
      tr: 'Ekip oyunu',
      en: 'Team game project',
    },
    summary: {
      tr: 'Yunan mitolojisi temalı 2D roguelike oyun projesi.',
      en: 'Greek mythology themed 2D roguelike game project.',
    },
    description: {
      tr: 'Unity ve C# ile geliştirilen Olympus Voidbound, oyuncu yetenekleri, düşman sistemleri, savaş akışı ve zindan ilerleyişi üzerine kurulu 2D roguelike bir oyun projesidir. Projede teknik geliştirme ile görsel gereksinimler birlikte yönetildi.',
      en: 'Built with Unity and C#, Olympus Voidbound is a 2D roguelike game centered on player abilities, enemy systems, combat flow and dungeon progression. The project required both technical development and visual direction.',
    },
    caseStudy: {
      tr: {
        problem: 'Ekip projesinde hem oynanış sistemlerinin tutarlı ilerlemesi hem de mitoloji temasına uygun bir görsel yön oluşturulması gerekiyordu.',
        solution: 'Unity üzerinde oyuncu yetenekleri, düşman davranışları, savaş akışı ve zindan ilerleyişini bir araya getiren 2D roguelike yapı kuruldu.',
        contribution: 'Proje liderliği, sanat yönetmenliği ve geliştirme rollerini birlikte yürüttüm; oynanış mekanikleri, savaş sistemleri ve görsel gereksinimlerde aktif sorumluluk aldım.',
        outcome: 'GitHub üzerinde erişilebilir, ekip çalışmasıyla geliştirilmiş ve teknik-görsel kararları birlikte taşıyan oynanabilir bir oyun projesi oluştu.',
      },
      en: {
        problem: 'The team needed to keep gameplay systems coherent while also building a visual direction that matched the Greek mythology theme.',
        solution: 'A 2D roguelike structure was built in Unity, combining player abilities, enemy behavior, combat flow and dungeon progression.',
        contribution: 'I worked as project leader, art director and developer, taking responsibility for gameplay mechanics, combat systems and visual requirements.',
        outcome: 'The result is a public GitHub team project with playable systems and a clear combination of technical and visual direction.',
      },
    },
    role: {
      tr: 'Proje lideri, sanat yönetmeni ve geliştirici',
      en: 'Project leader, art director and developer',
    },
    status: {
      tr: 'GitHub üzerinde açık ekip projesi',
      en: 'Public team project on GitHub',
    },
    technologies: ['Unity', 'C#'],
    contributions: {
      tr: [
        'Oynanış mekanikleri, oyuncu yetenekleri ve savaş sistemleri üzerinde çalıştım.',
        'Düşman davranışları, zindan ilerleyişi ve oyun akışı gereksinimlerini yönettim.',
        'Proje liderliği ve sanat yönetmenliği sorumluluklarını geliştirici rolüyle birlikte yürüttüm.',
      ],
      en: [
        'Worked on gameplay mechanics, player abilities and combat systems.',
        'Managed enemy behavior, dungeon progression and game flow requirements.',
        'Led the project and art direction while contributing as a developer.',
      ],
    },
    github: 'https://github.com/SenseiTuna/YMH212-Exponentia',
    image: '/projects/olympus-voidbound.png',
    accent: { label: 'Violet / Mythic Amber', hex: '#a78bfa', rgb: '167 139 250' },
  },
  {
    id: 'tcdd-seat-finder',
    title: {
      tr: 'TCDD Koltuk Bulucu',
      en: 'TCDD Seat Finder Browser Extension',
    },
    type: {
      tr: 'Bireysel proje',
      en: 'Individual project',
    },
    summary: {
      tr: 'TCDD bilet ekranındaki koltuk verilerini analiz ederek müsait koltukları fark etmeyi kolaylaştıran tarayıcı aracı.',
      en: 'Browser tool that analyzes seat data on the TCDD ticket screen and makes available seats easier to notice.',
    },
    description: {
      tr: 'Yoğun saatlerde TCDD bilet ekranında müsait koltukları daha hızlı fark etmek için geliştirilen bireysel bir Tampermonkey / tarayıcı eklentisi projesidir. DOM üzerindeki koltuk verisini analiz eder ve kullanıcının karar vermesini kolaylaştıran görsel destek sağlar.',
      en: 'An individual Tampermonkey/browser extension project built to make available seats easier to notice on the TCDD ticket screen during busy times. It analyzes seat data from the DOM and provides visual support for faster decisions.',
    },
    caseStudy: {
      tr: {
        problem: 'Yoğun saatlerde TCDD bilet ekranında müsait koltukları hızlı fark etmek zorlaşabiliyor ve kullanıcı gereksiz zaman kaybedebiliyor.',
        solution: 'Sayfadaki DOM verisini okuyarak koltuk durumlarını analiz eden ve müsait koltukları daha görünür hale getiren bir tarayıcı aracı geliştirildi.',
        contribution: 'Projeyi bireysel olarak tasarladım ve geliştirdim; veri okuma mantığı, kullanıcı tarafı görsel iyileştirme ve GitHub üzerinden kurulabilir yapı üzerinde çalıştım.',
        outcome: 'Kullanıcıların kendi tarayıcılarına ekleyebileceği, açık kaynak kodlu ve pratik bir otomasyon aracı ortaya çıktı.',
      },
      en: {
        problem: 'During busy periods, noticing available seats on the TCDD ticket screen can become slow and frustrating.',
        solution: 'I built a browser tool that reads DOM data, analyzes seat states and makes available seats visually easier to notice.',
        contribution: 'I designed and developed the project individually, covering data extraction logic, client-side visual improvements and GitHub-ready installation.',
        outcome: 'The result is an open-source practical automation tool that users can add to their browser.',
      },
    },
    role: {
      tr: 'Tasarım ve geliştirme',
      en: 'Design and development',
    },
    status: {
      tr: 'GitHub üzerinde açık bireysel proje',
      en: 'Public individual project on GitHub',
    },
    technologies: ['JavaScript', 'Tampermonkey', 'DOM Manipulation'],
    contributions: {
      tr: [
        'TCDD bilet ekranındaki DOM yapısından koltuk verisini okuyacak analiz mantığını geliştirdim.',
        'Müsait koltukların daha hızlı fark edilmesi için kullanıcı tarafında görsel iyileştirme sağladım.',
        'Kodları GitHub üzerinden erişilebilir ve tarayıcıya eklenebilir şekilde hazırladım.',
      ],
      en: [
        'Built the analysis logic that reads seat data from the TCDD ticket screen DOM.',
        'Improved the client-side visual experience for noticing available seats faster.',
        'Prepared the code to be accessible on GitHub and installable in the browser.',
      ],
    },
    github: 'https://github.com/SenseiTuna/TCDD-Koltuk-Bulucu',
    image: '/projects/tcdd-seat-finder.png',
    accent: { label: 'Signal Amber', hex: '#f59e0b', rgb: '245 158 11' },
  },
];

export const experience = [
  {
    company: 'OSTO Teknoloji Sanayi Ticaret Ltd. Şti.',
    role: {
      tr: 'Junior Ar-Ge Teknikeri',
      en: 'Junior R&D Technician',
    },
    period: {
      tr: 'Temmuz 2022 - Temmuz 2023',
      en: 'July 2022 - July 2023',
    },
    description: {
      tr: 'İç yazılım araçları, elektronik devre montajı, test, hata ayıklama, 3D parça tasarımı ve prototipleme süreçlerinde çalıştım.',
      en: 'Worked on internal software tools, electronic circuit assembly, testing, debugging, 3D part design and prototyping.',
    },
  },
];

export const education = [
  {
    school: {
      tr: 'Ankara Üniversitesi',
      en: 'Ankara University',
    },
    degree: {
      tr: 'Yazılım Mühendisliği',
      en: 'Software Engineering',
    },
    period: {
      tr: '2024 - Devam ediyor',
      en: '2024 - Present',
    },
    gpa: '3.84 / 4.00',
  },
  {
    school: {
      tr: 'Çapa Fen Lisesi',
      en: 'Çapa Science High School',
    },
    degree: {
      tr: 'Fen Lisesi',
      en: 'Science High School',
    },
    period: {
      tr: '2018 - 2022',
      en: '2018 - 2022',
    },
    gpa: '94.36 / 100',
  },
];
