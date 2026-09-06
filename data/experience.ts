export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  dates: string;
  periodLabel: string;
  mode: string;
  supervisor?: string;
  program?: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "visecure",
    role: "Summer Research Intern",
    organization: "ViSecure Systems Pvt. Ltd.",
    dates: "Jun 2026 – Aug 2026",
    periodLabel: "Summer 2026",
    mode: "Remote, Part-Time",
    summary: "Conducted deep learning research on super-resolution architectures and unsupervised representation pipelines.",
    highlights: [
      "Trained and benchmarked 10+ image super-resolution architectures — EDSR, VDSR, ESRGAN, Real-ESRGAN, SRTTA, DRCT, SwinIR, and HAT — on multiple datasets including Vehicle-10, PlantVillage Disease, and a custom combined HR/LR dataset.",
      "Engineered unsupervised super-resolution pipelines by applying self-supervised representation learning with SimCLR and contrastive loss alongside the EDSR, ESRGAN, and HAT architectures.",
      "Evaluated model performance using quantitative metrics (PSNR, SSIM) and qualitative visual analysis across benchmark datasets including RealSR, DIV2K, and Urban100.",
      "Implemented, configured, and executed research repositories for multiple super-resolution models across different datasets using Git for version control.",
      "Analyzed model architectures, training and inference pipelines, and loss functions to understand their impact on reconstruction quality and super-resolution performance."
    ],
    techStack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Deep Learning",
      "Computer Vision",
      "Git",
      "Linux",
      "Jupyter Notebook"
    ]
  },
  {
    id: "ashoka",
    role: "Research Intern",
    organization: "Ashoka University",
    dates: "Jun 2026 – Sep 2026",
    periodLabel: "Summer – Fall 2026",
    mode: "Remote, Part-Time",
    supervisor: "Prof. Anurag Agrawal",
    program: "Simons Fellowship Program",
    summary: "Investigated non-invasive animal biometric identification methods with focus on corneal reflection mitigation and feature extraction.",
    highlights: [
      "Conducted research on animal biometric identification under the Simons Fellowship Program, supervised by Prof. Anurag Agrawal.",
      "Captured and analyzed buffalo iris images under varied lighting conditions, including early-morning sessions, to reduce specular reflection and improve image quality for biometric feature extraction.",
      "Identified corneal specular reflection as a key limitation in buffalo iris imaging and evaluated capture-angle and lighting adjustments to mitigate it; determined that the lack of a large, labeled buffalo iris dataset was the primary blocker to model development and sourced an available public dataset to continue the analysis.",
      "Extended the research direction toward snake biometrics, adapting image-based biometric identification methods for individual snake identification.",
      "Conducted image analysis, dataset preparation, literature review, and experimental investigation as part of the ongoing research."
    ],
    techStack: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Biometric Identification",
      "Dataset Curation",
      "Exploratory Data Analysis"
    ]
  },
  {
    id: "robogenesis",
    role: "General Secretary & Co-Founder",
    organization: "RoboGenesis Club, Bennett University",
    dates: "Aug 2025 – Present",
    periodLabel: "2025 – Present",
    mode: "Leadership & Technical Mentorship",
    summary: "Co-founded and lead university robotics and AI society, organizing large-scale hackathons and guiding hands-on engineering projects.",
    highlights: [
      "Co-founded and lead a robotics and AI club with 60+ student members, managing a core team of 23 and organizing technical workshops, hackathons, and student onboarding sessions.",
      "Organized and ran a 24-hour industry-driven hackathon for the Club and School of AI, drawing 60 teams and 140+ participants from 14+ institutions.",
      "Mentor teams in developing end-to-end projects using Python, OpenCV, Arduino, and IoT systems.",
      "Drive student participation through structured mentorship, hands-on sessions, and technical activities."
    ],
    techStack: [
      "Python",
      "OpenCV",
      "Arduino",
      "ESP32",
      "Robotics",
      "IoT Systems",
      "Technical Mentorship"
    ]
  }
];
