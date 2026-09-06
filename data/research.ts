export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  keyConcepts: string[];
  modelsAndMethods: string[];
  datasetsAndTools: string[];
  githubUrl?: string;
}

export const researchAreasData: ResearchArea[] = [
  {
    id: "super-resolution",
    title: "Image Super-Resolution",
    description: "Reconstructing high-frequency textures and geometric edges from low-resolution sensors through deep convolutional and vision transformer architectures.",
    keyConcepts: [
      "Single Image Super-Resolution (SISR)",
      "High-Frequency Reconstruction",
      "Infrared & Optical Degradation Modeling",
      "Sub-Pixel Upsampling (PixelShuffle)"
    ],
    modelsAndMethods: ["EDSR", "VDSR", "ESRGAN", "Real-ESRGAN", "SwinIR", "HAT", "DRCT", "SRTTA", "SRCNN", "FSRCNN"],
    datasetsAndTools: ["DIV2K", "RealSR", "Urban100", "Vehicle-10", "PlantVillage Disease", "PyTorch", "OpenCV"],
    githubUrl: "https://github.com/mauryaakash-ai"
  },
  {
    id: "self-supervised-learning",
    title: "Self-Supervised Representation Learning",
    description: "Engineering contrastive learning pipelines to extract robust visual feature representations without relying exclusively on expensive annotated labels.",
    keyConcepts: [
      "Contrastive Representation Learning",
      "InfoNCE / Contrastive Loss",
      "Data Augmentation Invariance",
      "Unsupervised Super-Resolution Pipelines"
    ],
    modelsAndMethods: ["SimCLR", "Contrastive Loss", "Self-Supervised EDSR", "Self-Supervised HAT", "Self-Supervised ESRGAN"],
    datasetsAndTools: ["Custom Combined HR/LR Dataset", "Vehicle-10", "PyTorch", "Jupyter Notebook"],
    githubUrl: "https://github.com/mauryaakash-ai/SIMCLR_PYTORCH"
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Visual Analysis",
    description: "Developing robust image processing, spatial filtering, feature extraction, and perceptual image quality assessment pipelines.",
    keyConcepts: [
      "Perceptual Image Quality Assessment",
      "Quantitative Degradation Analysis",
      "Receptive Field Analysis",
      "Color Space Transformations & Clustering"
    ],
    modelsAndMethods: ["PSNR (Peak Signal-to-Noise Ratio)", "SSIM (Structural Similarity)", "K-Means Quantization", "Spatial Filtering"],
    datasetsAndTools: ["OpenCV", "scikit-learn", "NumPy", "Matplotlib", "Python"],
    githubUrl: "https://github.com/mauryaakash-ai/ImageLab"
  },
  {
    id: "biometric-identification",
    title: "Animal Biometric Identification",
    description: "Investigating non-invasive biometric recognition in livestock and biological species with specialized handling of corneal reflection artifacts.",
    keyConcepts: [
      "Corneal Specular Reflection Mitigation",
      "Iris Feature Extraction Under Variable Lighting",
      "Dataset Scarcity & Domain Transfer",
      "Morphological Pattern Identification (Snake Biometrics)"
    ],
    modelsAndMethods: ["Biometric Feature Extraction", "Reflection Correction Algorithms", "Lighting Angle Modulation"],
    datasetsAndTools: ["Buffalo Iris Image Sets", "Public Biometric Datasets", "OpenCV", "Simons Fellowship Research"],
    githubUrl: "https://github.com/mauryaakash-ai"
  },
  {
    id: "embedded-ai-robotics",
    title: "Embedded AI & Real-Time Robotics",
    description: "Implementing closed-loop feedback controllers, sensor fusion routines, and low-latency algorithmic control on edge microcontroller hardware.",
    keyConcepts: [
      "Closed-Loop PID Control (P, I, D Gain Tuning)",
      "Multi-Channel Sensor Fusion",
      "Low-Latency Microcontroller Firmware",
      "Hardware Timer & PWM Speed Modulation"
    ],
    modelsAndMethods: ["Proportional-Integral-Derivative (PID)", "ADC Signal Filtering", "Obstacle Detection State Machine"],
    datasetsAndTools: ["ESP32", "Arduino", "C/C++", "IR Sensor Arrays", "Ultrasonic Transducers"],
    githubUrl: "https://github.com/mauryaakash-ai"
  }
];
