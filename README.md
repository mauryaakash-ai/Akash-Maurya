# Akash Maurya — AI/ML Engineer & Computer Vision Researcher Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A high-craft, professional personal portfolio and research hub for **Akash Maurya** — AI Engineer Intern & Undergraduate Researcher at Bennett University specializing in **Deep Learning**, **Image Super-Resolution**, and **Computer Vision**.

Designed with an **editorial research lab** aesthetic, featuring multi-page deep dives, interactive super-resolution reconstruction visualizations, case study modals, and 100% fidelity to verified curriculum vitae records.

---

## 🔬 Research & Engineering Profile

- **Name**: Akash Maurya
- **Role**: AI Engineer Intern | Machine Learning & Computer Vision
- **Institution**: Bennett University (B.Tech in Artificial Intelligence, Aug 2024 – Present, Expected May 2028)
- **Academic Standing**: CGPA **8.71 / 10** | UP Board Class XII: **88%** (Top 10 Merit Medal) | Class X: **92.17%**
- **Core Research Domains**:
  1. **Image Super-Resolution (SISR)**: CNN & Vision Transformer backbones (EDSR, SwinIR, HAT, Real-ESRGAN, DRCT, SRTTA, VDSR).
  2. **Self-Supervised Learning**: Contrastive representation learning with SimCLR and contrastive loss for label-efficient image restoration.
  3. **Animal Biometrics**: Specular reflection mitigation and iris feature extraction under the **Simons Fellowship Program** (supervised by **Prof. Anurag Agrawal** at Ashoka University).
  4. **Embedded Robotics**: Real-time closed-loop PID control and multi-sensor fusion on ESP32/Arduino microcontrollers.
  5. **Full-Stack Engineering**: Production REST APIs and database modeling in Flask and SQLite.

---

## 🌐 Multi-Page Architecture

Every navigation section is organized into dedicated routes with deep-dive technical content:

| Route | Page | Description |
| :--- | :--- | :--- |
| [`/`](https://mauryaakash-ai.github.io/Akash-Maurya-portfolio/) | **Home Portal** | Hero with research console, super-resolution reconstruction graphic, and section directory |
| [`/about`](https://mauryaakash-ai.github.io/Akash-Maurya-portfolio/about/) | **About & Research Profile** | Biographical background, Bennett University AI curriculum, and research pillars |
| [`/research`](https://mauryaakash-ai.github.io/Akash-Maurya-portfolio/research/) | **Research Interests** | 5 core areas with deep-dive area inspector and associated models/datasets |
| [`/experience`](https://mauryaakash-ai.github.io/Akash-Maurya-portfolio/experience/) | **Experience & Leadership** | ViSecure Systems, Ashoka University (Simons Fellow), and RoboGenesis Club |
| [`/projects`](https://mauryaakash-ai.github.io/Akash-Maurya-portfolio/projects/) | **Selected Projects** | Detailed project cards with system pipeline architecture diagrams and case studies |
| [`/benchmarks`](https://mauryaakash-ai.github.io/Akash-Maurya-portfolio/benchmarks/) | **Evaluation & Demo** | Interactive Thermal SR comparison slider & 10+ architecture evaluation taxonomy |
| [`/skills`](https://mauryaakash-ai.github.io/Akash-Maurya-portfolio/skills/) | **Technical Skills** | Categorized technical inventory without arbitrary progress meters |
| [`/education`](https://mauryaakash-ai.github.io/Akash-Maurya-portfolio/education/) | **Academic Education** | B.Tech AI (Bennett Univ., CGPA 8.71) and UP Board examination records |
| [`/certifications`](https://mauryaakash-ai.github.io/Akash-Maurya-portfolio/certifications/) | **Honors & Certifications** | INSPIRE Scholarship (DST), Academic Silver Medal, Google AI & DeepLearning.AI |
| [`/contact`](https://mauryaakash-ai.github.io/Akash-Maurya-portfolio/contact/) | **Contact & Verification** | Direct WhatsApp messaging button, email trigger with clipboard copy, and inquiry dispatcher |

---

## ⚡ Interactive Features

1. **Interactive Thermal Super-Resolution Comparison Slider (`/benchmarks`)**:
   - Dual-pane drag and touch comparison slider illustrating low-resolution infrared sensor input vs. deep super-resolution reconstruction (4x sub-pixel feature recovery).
   - Quantitative evaluation context with PSNR and SSIM benchmarks.

2. **Super-Resolution Discrete Reconstruction Grid (`/` Hero)**:
   - Inline SVG/Canvas rendering an interactive pixel matrix showcasing **1× Low-Res** → **2× Sub-Pixel Interpolation** → **4× High-Res Detail Target** with animated 3×3 convolution receptive field tracking.

3. **Project Deep-Dive Case Study Modals (`/projects`)**:
   - Comprehensive modals presenting: *Problem Statement, Methodology & Pipeline Stages, Key Contributions, Quantified Results, and Engineering Takeaways*.

---

## 🔗 Connected Open-Source Repositories

| Repository | Focus | Tech Stack | Link |
| :--- | :--- | :--- | :--- |
| **ImageLab** | K-Means color quantization & perceptual compression (-40–60% file size) | Python, OpenCV, scikit-learn, NumPy | [GitHub](https://github.com/mauryaakash-ai/ImageLab) |
| **KrishiShram** | Farm labor tracking & automated payroll ledger (-60% manual effort) | Python, Flask, SQLite, HTML/JS | [GitHub](https://github.com/mauryaakash-ai/Krishishram) |
| **SimCLR PyTorch** | Self-supervised visual representation learning with contrastive loss | PyTorch, torchvision, Python | [GitHub](https://github.com/mauryaakash-ai/SIMCLR_PYTORCH) |
| **RoboGenesis Club** | Official university robotics & AI club website | Web, Community, Workshops | [robogenesissoai.in](https://robogenesissoai.in) |

---

## 🛠️ Tech Stack & Engineering Standards

- **Framework**: Next.js 14 (App Router) with Static Site Generation (`output: 'export'`)
- **Language**: TypeScript (strict type safety)
- **Styling**: Tailwind CSS (editorial palette, dark/light theme switching with instant localStorage persistence)
- **Icons**: Lucide React
- **Architecture**: Strict decoupling of content (`data/*.ts`) from UI presentation (`components/` & `app/`)
- **Accessibility & SEO**: Semantic HTML5, ARIA labels, OpenGraph meta tags, responsive typography across mobile (360px–390px), tablet (768px), and desktop (1024px–1440px).

---

## 📂 Project Structure

```
Akash-Maurya-portfolio/
├── app/                        # Next.js 14 App Router Pages
│   ├── about/page.tsx          # Dedicated About page
│   ├── benchmarks/page.tsx     # Dedicated Evaluation & Demo page
│   ├── certifications/page.tsx # Dedicated Honors & Certifications page
│   ├── contact/page.tsx        # Dedicated Contact & Verification page
│   ├── education/page.tsx      # Dedicated Education page
│   ├── experience/page.tsx     # Dedicated Experience timeline page
│   ├── projects/page.tsx       # Dedicated Projects page
│   ├── research/page.tsx       # Dedicated Research Interests page
│   ├── skills/page.tsx         # Dedicated Technical Skills page
│   ├── globals.css             # Base styles & theme variables
│   ├── layout.tsx              # Metadata, OpenGraph & ThemeProvider shell
│   └── page.tsx                # Home portal & directory grid
├── components/
│   ├── hero/                   # Hero, SuperResolutionGrid, ResearchConsole
│   ├── layout/                 # Navbar (responsive drawer) & Footer
│   ├── modals/                 # ProjectDetailModal case study dialog
│   ├── sections/               # Modular page sections
│   └── ThemeProvider.tsx       # Dark / Light theme provider
├── data/                       # Strict CV-Grounded Data Layer
│   ├── benchmarks.ts           # Evaluation metrics & architectures taxonomy
│   ├── certifications.ts       # Awards, honors, and verified certs
│   ├── education.ts            # Academic history
│   ├── experience.ts           # ViSecure, Ashoka Univ, RoboGenesis
│   ├── profile.ts              # Bio, metadata, and verified links
│   ├── projects.ts             # 4 project case studies & diagram specs
│   ├── research.ts             # 5 core research domains
│   └── skills.ts               # Categorized skills (no progress meters)
├── public/                     # Static assets (profile.jpg, resume.pdf)
├── next.config.mjs             # Next.js static export configuration
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/mauryaakash-ai/Akash-Maurya-portfolio.git
cd Akash-Maurya-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production (Static Export)
```bash
npm run build
```
The optimized static HTML/CSS/JS files will be generated in the `./out/` directory.

---

## 📦 Deployment Instructions

### Deploy to GitHub Pages
1. Push to your `main` branch:
   ```bash
   git push origin main
   ```
2. In GitHub repository settings:
   - Go to **Settings → Pages**.
   - Under **Build and deployment**, select **GitHub Actions** → **Next.js**.

### Deploy to Vercel (Recommended)
1. Import repository `mauryaakash-ai/Akash-Maurya-portfolio` on [vercel.com](https://vercel.com/new).
2. Framework Preset will auto-detect **Next.js**.
3. Click **Deploy**.

---

## 📬 Contact & Verification

- **Email**: [mauryaakash2005@gmail.com](mailto:mauryaakash2005@gmail.com)
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/918869973263)
- **GitHub**: [github.com/mauryaakash-ai](https://github.com/mauryaakash-ai)
- **LinkedIn**: [linkedin.com/in/akash-maurya-97617a32a](https://linkedin.com/in/akash-maurya-97617a32a)
- **Location**: Greater Noida, Uttar Pradesh, India

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
