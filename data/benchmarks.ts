export interface BenchmarkArchitecture {
  name: string;
  family: "CNN" | "Transformer" | "GAN" | "Self-Supervised";
  description: string;
  keyTraits: string;
}

export interface BenchmarkDataset {
  name: string;
  domain: string;
  roleInResearch: string;
  type: string;
}

export interface EvaluationMetric {
  metric: string;
  fullName: string;
  focus: string;
  interpretation: string;
}

export const benchmarkArchitectures: BenchmarkArchitecture[] = [
  {
    name: "EDSR",
    family: "CNN",
    description: "Enhanced Deep Residual Networks removing unnecessary batch normalization layers for superior high-frequency pixel mapping.",
    keyTraits: "Deep residual scaling, optimized L1 convergence, high structural fidelity."
  },
  {
    name: "SwinIR",
    family: "Transformer",
    description: "Image restoration using shifted-window self-attention mechanisms to capture both local detail and long-range content context.",
    keyTraits: "Shifted window multi-head attention, residual Swin Transformer blocks (RSTB)."
  },
  {
    name: "HAT",
    family: "Transformer",
    description: "Hybrid Attention Transformer combining channel attention with window-based self-attention for state-of-the-art super-resolution.",
    keyTraits: "Cross-attention aggregation, deep feature interaction, high PSNR performance."
  },
  {
    name: "Real-ESRGAN / ESRGAN",
    family: "GAN",
    description: "Enhanced super-resolution GANs optimized for complex real-world sensor degradation with perceptual and relativistic loss functions.",
    keyTraits: "High perceptual sharpness, adversarial generator-discriminator training."
  },
  {
    name: "SimCLR Formulation",
    family: "Self-Supervised",
    description: "Contrastive representation learning framework applied to learn invariant feature embeddings without supervised ground-truth labels.",
    keyTraits: "Normalized temperature-scaled cross entropy (NT-Xent) loss, latent projector head."
  },
  {
    name: "DRCT / SRTTA / VDSR",
    family: "CNN",
    description: "Deep recursive, test-time adaptation, and very deep convolutional networks analyzed across multi-scale degradation profiles.",
    keyTraits: "Deep residual formulation, multi-scale feature aggregation."
  }
];

export const benchmarkDatasets: BenchmarkDataset[] = [
  {
    name: "DIV2K",
    domain: "High-Definition Optical Imagery",
    roleInResearch: "Standard 2K resolution dataset used for high-fidelity model training, baseline calibration, and benchmark validation.",
    type: "Public Benchmark"
  },
  {
    name: "RealSR",
    domain: "Real-World Camera Degradations",
    roleInResearch: "Real-world low-resolution/high-resolution paired camera images used for evaluating generalization against realistic sensor artifacts.",
    type: "Real-World Sensor Set"
  },
  {
    name: "Urban100",
    domain: "Architectural & Geometric Patterns",
    roleInResearch: "Challenging urban structural images containing repetitive patterns, sharp corners, and high-frequency lines.",
    type: "Geometric Edge Benchmark"
  },
  {
    name: "Vehicle-10",
    domain: "Automotive & Surveillance Imagery",
    roleInResearch: "Multi-vehicle visual dataset utilized for specialized domain adaptation and low-resolution object enhancement.",
    type: "Domain-Specific"
  },
  {
    name: "PlantVillage Disease",
    domain: "Agricultural & Leaf Pathology",
    roleInResearch: "High-resolution botanical disease imagery evaluated for diagnostic feature recovery in crop pathology.",
    type: "Agricultural Vision"
  },
  {
    name: "Combined HR/LR Dataset",
    domain: "Cross-Domain Custom Pairs",
    roleInResearch: "Curated dataset engineered for unsupervised representation learning with SimCLR and self-supervised super-resolution.",
    type: "Custom Curated"
  }
];

export const evaluationMetrics: EvaluationMetric[] = [
  {
    metric: "PSNR",
    fullName: "Peak Signal-to-Noise Ratio",
    focus: "Pixel-Level Reconstruction Fidelity",
    interpretation: "Measures logarithmic ratio between maximum possible signal power and corrupting noise (dB). Higher indicates closer mathematical pixel alignment."
  },
  {
    metric: "SSIM",
    fullName: "Structural Similarity Index Measure",
    focus: "Human Perceptual Structural Consistency",
    interpretation: "Evaluates luminance, contrast, and structural degradation (scale 0 to 1). Captures visual edge coherence and perceptual texture fidelity."
  },
  {
    metric: "Contrastive Loss",
    fullName: "NT-Xent (Normalized Temperature-scaled Cross Entropy)",
    focus: "Self-Supervised Embedding Alignment",
    interpretation: "Maximizes agreement between differently augmented views of the same sample while repelling negative sample pairs in latent space."
  }
];
