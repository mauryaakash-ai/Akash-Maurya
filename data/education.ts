export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  dates: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  location?: string;
  details?: string[];
  expectedGraduation?: string;
}

export const educationData: EducationItem[] = [
  {
    id: "bennett-btech",
    degree: "B.Tech in Artificial Intelligence",
    institution: "Bennett University",
    dates: "Aug 2024 – Present",
    score: "8.71 / 10",
    scoreType: "CGPA",
    expectedGraduation: "May 2028",
    details: [
      "Rigorous coursework spanning Artificial Intelligence, Data Structures & Algorithms, Object-Oriented Programming, and Mathematics.",
      "Hands-on laboratory research in computer vision, deep neural networks, and embedded robotics.",
      "Active leadership as General Secretary and Co-Founder of RoboGenesis Club."
    ]
  },
  {
    id: "up-board-12",
    degree: "Class XII (PCM) — Intermediate",
    institution: "UP Board",
    dates: "Apr 2022 – Mar 2023",
    score: "88%",
    scoreType: "Percentage",
    details: [
      "Physics, Chemistry, and Mathematics (PCM) specialization.",
      "Awarded Academic Silver Medal for achieving top 10 merit rank in UP Board examinations.",
      "Recipient of the prestigious INSPIRE Scholarship by the Department of Science & Technology (DST), Govt. of India."
    ]
  },
  {
    id: "up-board-10",
    degree: "Class X — High School",
    institution: "UP Board",
    dates: "Apr 2020 – Mar 2021",
    score: "92.17%",
    scoreType: "Percentage",
    details: [
      "Comprehensive curriculum in Mathematics, Science, and Social Sciences with high academic distinction."
    ]
  }
];
