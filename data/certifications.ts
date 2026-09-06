export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  issueDate: string;
  category: "Certification" | "Award";
  description?: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-google-ai",
    title: "Google AI Essentials",
    issuer: "Google",
    platform: "Coursera",
    issueDate: "Jul 2025",
    category: "Certification",
    description: "Foundational AI principles, generative workflows, and practical machine learning implementation techniques."
  },
  {
    id: "cert-prompt-eng",
    title: "Prompt Engineering",
    issuer: "Infosys Springboard",
    platform: "Infosys Springboard",
    issueDate: "Sep 2025",
    category: "Certification",
    description: "Advanced prompt design paradigms, context structuring, and LLM evaluation strategies."
  },
  {
    id: "cert-deeplearning-nn",
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    issueDate: "Feb 2026",
    category: "Certification",
    description: "Vectorized forward propagation, backpropagation computation, gradient descent optimization, and deep architecture tuning."
  },
  {
    id: "award-inspire",
    title: "INSPIRE Scholarship",
    issuer: "Department of Science and Technology (DST), Govt. of India",
    issueDate: "Merit-Based Award",
    category: "Award",
    description: "National scholarship awarded to top academic performers to foster high-caliber scientific research and education."
  },
  {
    id: "award-silver-medal",
    title: "Academic Silver Medal (Top 10 Position)",
    issuer: "UP Board",
    issueDate: "Class XII Examination",
    category: "Award",
    description: "Awarded for securing a top 10 statewide merit standing in the Class XII Board Examination."
  }
];
