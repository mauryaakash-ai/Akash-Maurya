export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Deep Learning" | "Embedded AI" | "Machine Learning" | "Full-Stack Web";
  dates: string;
  teamType: "Team" | "Independent";
  description: string;
  problem: string;
  approach: string;
  keyContributions: string[];
  results: string[];
  techStack: string[];
  learnings: string[];
  githubUrl?: string;
  liveUrl?: string;
  diagramSpec: {
    title: string;
    stages: { label: string; detail: string; tag?: string }[];
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "thermal-sr",
    title: "Thermal Image Super-Resolution Research",
    subtitle: "Comparative evaluation of CNN & Vision Transformer architectures for infrared image enhancement",
    category: "Deep Learning",
    dates: "Jan 2026 – May 2026",
    teamType: "Team",
    description: "Evaluated deep learning-based super-resolution models including SRCNN, FSRCNN, VDSR, and EDSR alongside SwinIR and transformer-based architectures for thermal and low-resolution infrared image reconstruction.",
    problem: "Thermal infrared sensors often produce low-resolution, noisy imagery due to physical detector constraints and sensor cost. Standard optical super-resolution models often blur subtle thermal gradients and edge boundaries without specialized architectural analysis.",
    approach: "Benchmarked convolutional backbones (SRCNN, FSRCNN, VDSR, EDSR) and transformer-based networks (SwinIR). Analyzed architectural components, receptive field sizes, inference pipelines, loss functions, and spatial attention mechanisms on low-resolution infrared datasets.",
    keyContributions: [
      "Evaluated deep learning-based super-resolution models including SRCNN, FSRCNN, VDSR, and EDSR for thermal image enhancement.",
      "Analyzed SwinIR and transformer-based super-resolution models, examining architectures, inference pipelines, and reconstruction performance on low-resolution infrared images.",
      "Built practical expertise in model training, inference, dataset preprocessing, image reconstruction, and evaluation using PSNR and SSIM metrics."
    ],
    results: [
      "Formulated a structured experimental pipeline for low-resolution thermal image preprocessing and high-resolution reconstruction.",
      "Conducted rigorous quantitative evaluation using Peak Signal-to-Noise Ratio (PSNR) and Structural Similarity Index (SSIM).",
      "Compared inference computational profiles between residual CNN blocks and windowed self-attention mechanisms in SwinIR."
    ],
    techStack: ["Python", "PyTorch", "OpenCV", "TensorFlow", "Deep Learning", "Transformer Architectures"],
    learnings: [
      "Deep understanding of how inductive biases in CNNs vs. shifted-window self-attention impact high-frequency thermal edge recovery.",
      "Hands-on experience configuring training loops, loss functions (L1, perceptual, adversarial), and patch-based evaluation pipelines."
    ],
    githubUrl: "https://github.com/mauryaakash-ai",
    diagramSpec: {
      title: "Thermal Super-Resolution Reconstruction Pipeline",
      stages: [
        { label: "LR Thermal Sensor Input", detail: "Low-res infrared input degradation & patch extraction", tag: "Input" },
        { label: "Feature Extraction", detail: "Shallow conv layers & token embedding projection", tag: "Conv/Tokens" },
        { label: "Deep Backbone Processing", detail: "Residual blocks (EDSR/VDSR) or Swin Transformer blocks", tag: "Latent Space" },
        { label: "Sub-Pixel Upsampling", detail: "PixelShuffle / transposed convolution upscaling (2x / 4x)", tag: "Upscale" },
        { label: "Evaluation & Reconstruction", detail: "PSNR & SSIM quantitative analysis against HR target", tag: "Metrics" }
      ]
    }
  },
  {
    id: "autonomous-rc-car",
    title: "Autonomous Line-Following RC Car",
    subtitle: "Closed-loop PID steering control and obstacle detection with embedded sensor fusion",
    category: "Embedded AI",
    dates: "Sep 2025 – Mar 2026",
    teamType: "Team",
    description: "Developed a line-following robotic platform using infrared sensor arrays and PID control with obstacle detection and real-time sensor fusion.",
    problem: "Real-time line tracking at varying speeds requires low-latency error correction to avoid track oscillations, overshoot, and sensor noise while responding dynamically to physical obstacles.",
    approach: "Integrated multi-channel IR reflectance sensor arrays with an Arduino / ESP32 microcontroller architecture. Implemented a discrete PID control loop for differential steering and fused ultrasonic/proximity data for collision prevention.",
    keyContributions: [
      "Developed a line-following robot using IR sensors and PID control with obstacle detection and basic sensor fusion.",
      "Engineered firmware in C/C++ with calibrated ADC thresholding to filter ambient illumination noise.",
      "Tuned Proportional, Integral, and Derivative gain parameters for smooth trajectory tracking across tight curvatures."
    ],
    results: [
      "Achieved stable high-speed autonomous navigation with continuous trajectory correction and zero derailment on benchmark tracks.",
      "Integrated active obstacle detection fallback routine for emergency braking and bypass maneuvering."
    ],
    techStack: ["Arduino", "ESP32", "C/C++", "IR Sensor Arrays", "PID Control", "Embedded Systems", "Sensor Fusion"],
    learnings: [
      "Mastered real-time hardware constraints, timer interrupts, PWM motor driver interfacing, and analog sensor signal conditioning.",
      "Gained practical intuition for PID tuning, derivative kick mitigation, and multi-sensor latency budgeting."
    ],
    githubUrl: "https://github.com/mauryaakash-ai",
    diagramSpec: {
      title: "Embedded Closed-Loop Control Architecture",
      stages: [
        { label: "Sensor Array Input", detail: "Multi-channel analog IR reflectance & Ultrasonic distance", tag: "Sensors" },
        { label: "Noise Filtering & ADC", detail: "Threshold calibration and ambient light rejection", tag: "Signal" },
        { label: "PID Error Controller", detail: "Discrete error computation (P + I + D loop calculation)", tag: "Control Loop" },
        { label: "PWM Motor Driver", detail: "H-Bridge differential drive & steering speed regulation", tag: "Actuation" }
      ]
    }
  },
  {
    id: "imagelab-kmeans",
    title: "ImageLab — K-Means Image Compressor",
    subtitle: "Unsupervised vector quantization and color space clustering for perceptual image compression",
    category: "Machine Learning",
    dates: "Sep 2025",
    teamType: "Team",
    description: "Built an image compression system using K-Means clustering in RGB color space, reducing image size by 40–60% while maintaining perceptual quality.",
    problem: "High-resolution digital images require substantial storage and bandwidth. Standard lossy compression can produce severe blocking artifacts unless color palettes are intelligently quantized.",
    approach: "Formulated color quantization as an unsupervised clustering problem. Flattened RGB pixel matrices into a 3D feature space, applied K-Means clustering to discover optimal centroid color codebooks, and replaced pixel coordinates with cluster index references.",
    keyContributions: [
      "Built an image compression system using K-Means clustering, reducing image size by 40-60% while maintaining perceptual quality.",
      "Optimized Euclidean distance computation and matrix reshaping pipelines using NumPy and scikit-learn.",
      "Implemented compressed payload serialization to store the color codebook dictionary alongside compact cluster index maps."
    ],
    results: [
      "Achieved 40–60% reduction in image file size across diverse photographic test sets.",
      "Maintained crisp perceptual edges and continuous color fidelity by tuning the optimal cluster count (K)."
    ],
    techStack: ["Python", "OpenCV", "scikit-learn", "NumPy", "Clustering (K-Means)", "Data Compression"],
    learnings: [
      "Deep practical insight into unsupervised clustering convergence, Lloyd's algorithm behavior, and vector quantization limits.",
      "Explored trade-offs between compression ratio, computational complexity (O(n * k * d)), and visual fidelity."
    ],
    githubUrl: "https://github.com/mauryaakash-ai/ImageLab",
    diagramSpec: {
      title: "K-Means Color Quantization & Compression Flow",
      stages: [
        { label: "Raw RGB Image Matrix", detail: "Image loading and reshaping into (Height x Width, 3) vector", tag: "Input" },
        { label: "K-Means Clustering", detail: "Unsupervised centroid convergence in 3D RGB color space", tag: "K-Means" },
        { label: "Codebook & Index Map", detail: "Extract K-color palette and map each pixel to nearest centroid", tag: "Quantization" },
        { label: "Compressed Bitstream", detail: "40–60% payload reduction with reconstructed visual quality", tag: "Output: -40-60%" }
      ]
    }
  },
  {
    id: "krishishram",
    title: "KrishiShram — Farmer Labour Management Web App",
    subtitle: "Full-stack web application for digitized farm labor attendance, task tracking, and wage calculation",
    category: "Full-Stack Web",
    dates: "Jan 2025",
    teamType: "Independent",
    description: "Developed a full-stack web application to digitize labour records and automate wage calculation, reducing manual effort by 60% through automation.",
    problem: "Agricultural labor management in rural India relies heavily on physical paper ledgers, causing frequent record discrepancies, lost logs, and tedious manual wage calculation errors.",
    approach: "Engineered an accessible web platform with responsive interfaces, relational database models in SQLite, and modular Flask RESTful endpoints to manage workers, daily logs, piece-rate wages, and aggregate payrolls.",
    keyContributions: [
      "Developed a full-stack web application to digitize labour records and automate wage calculation, reducing manual effort by 60% through automation.",
      "Built RESTful APIs using Flask and SQLite for efficient data handling and validation.",
      "Constructed intuitive reporting views for daily attendance tracking, wage disbursals, and exportable ledger summaries."
    ],
    results: [
      "Reduced manual record-keeping and payroll calculation effort by 60% through automated wage computation algorithms.",
      "Delivered a zero-dependency lightweight web application suitable for local deployment."
    ],
    techStack: ["Python", "Flask", "SQLite", "HTML5", "CSS3", "JavaScript", "REST APIs", "Git"],
    learnings: [
      "End-to-end full-stack software lifecycle: schema design, RESTful endpoint architecture, session handling, and clean UI design for non-technical users.",
      "Database indexing, transaction integrity, and CRUD optimization in SQLite."
    ],
    githubUrl: "https://github.com/mauryaakash-ai/Krishishram",
    diagramSpec: {
      title: "Full-Stack Application Architecture",
      stages: [
        { label: "Client Frontend", detail: "Responsive HTML5/CSS/JS interface for attendance & log entry", tag: "UI Layer" },
        { label: "RESTful API Endpoints", detail: "Flask controller routing, authentication, and wage calculation", tag: "Flask App" },
        { label: "Relational Storage", detail: "SQLite database storing workers, daily logs, and wage records", tag: "SQLite DB" },
        { label: "Automated Payroll Engine", detail: "60% reduction in manual effort via instant ledger reports", tag: "60% Efficiency" }
      ]
    }
  }
];
