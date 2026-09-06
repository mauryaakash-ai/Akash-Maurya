export interface Profile {
  name: string;
  role: string;
  subRole: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  currentStatus: string;
  institution: string;
  expectedGraduation: string;
}

export const profileData: Profile = {
  name: "Akash Maurya",
  role: "AI Engineer Intern",
  subRole: "Machine Learning & Computer Vision",
  tagline: "Building intelligent systems through research, experimentation, and engineering.",
  bio: "AI/ML undergraduate with hands-on research and internship experience in deep learning, computer vision, and image super-resolution. Skilled in PyTorch, Python, OpenCV, and Flask, with proven ability to implement, train, and evaluate CNN- and Transformer-based models (EDSR, ESRGAN, Real-ESRGAN, SwinIR, HAT, DRCT) across multiple public and custom datasets. Research exposure to self-supervised learning (SimCLR), biometric image identification, and real-time embedded systems.",
  location: "Greater Noida, Uttar Pradesh, India",
  email: "mauryaakash2005@gmail.com",
  phone: "+91 88699 73263",
  github: "mauryaakash-ai",
  githubUrl: "https://github.com/mauryaakash-ai",
  linkedin: "akash-maurya-97617a32a",
  linkedinUrl: "https://linkedin.com/in/akash-maurya-97617a32a",
  currentStatus: "Undergraduate AI Researcher & Student Leader",
  institution: "Bennett University",
  expectedGraduation: "May 2028",
};
