import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "LayoutGrid",
    skills: [
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 88 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 85 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    category: "Mobile Development",
    icon: "Smartphone",
    skills: [
      { name: "Flutter", level: 92 },
      { name: "Dart", level: 90 },
      { name: "Android", level: 85 },
      { name: "Firebase", level: 90 },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "Firebase Firestore", level: 90 },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 82 },
      { name: "Postman", level: 90 },
      { name: "Android Studio", level: 85 },
    ],
  },
];
