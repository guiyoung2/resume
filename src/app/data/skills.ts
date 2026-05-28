import type { SkillCategory } from "@/app/types/skills";

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    label: "State & Server",
    skills: ["React Query", "Zustand", "Supabase"],
  },
  {
    label: "Styling",
    skills: ["Emotion", "Styled Components", "Tailwind CSS"],
  },
  {
    label: "Tools",
    skills: ["Git", "Vite", "Vercel", "ESLint"],
  },
  {
    label: "AI Tools",
    skills: ["Claude Code", "Codex"],
  },
];
