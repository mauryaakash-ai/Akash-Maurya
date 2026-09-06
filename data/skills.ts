export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages & Core",
    description: "Programming languages, foundational computer science principles, and core systems paradigms.",
    skills: ["Python", "C/C++", "SQL", "Data Structures", "Algorithms", "OOP"]
  },
  {
    category: "ML/DL Frameworks",
    description: "Core numerical computation, tensor manipulation, and deep learning framework ecosystems.",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    category: "Techniques & Paradigms",
    description: "Methodological domains across machine learning, computer vision, and neural network engineering.",
    skills: [
      "Deep Learning",
      "Computer Vision",
      "Image Super-Resolution",
      "Self-Supervised Learning (SimCLR)",
      "CNN",
      "RNN",
      "LSTM",
      "GRU",
      "Transformers",
      "Regression",
      "Classification",
      "Clustering (K-Means)",
      "Model Evaluation",
      "Feature Engineering",
      "Data Preprocessing"
    ]
  },
  {
    category: "Models & Architectures",
    description: "Deep convolutional backbones, generative adversarial models, and vision transformer architectures researched and evaluated.",
    skills: [
      "EDSR",
      "ESRGAN",
      "Real-ESRGAN",
      "SRCNN",
      "FSRCNN",
      "VDSR",
      "SwinIR",
      "HAT",
      "DRCT",
      "SRTTA"
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Developer tooling, operating environments, backend frameworks, and embedded hardware platforms.",
    skills: [
      "Flask",
      "Git",
      "GitHub",
      "Linux",
      "Jupyter Notebook",
      "VS Code",
      "Arduino",
      "ESP32"
    ]
  }
];
