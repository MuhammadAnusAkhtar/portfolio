import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

// Note: deal-one-real-estate, shopit-ecommerce, and lifetime-auto-repair now
// use real .png screenshots in public/projects/ instead of generated SVGs.
const projects = [
  { file: "nova-ai-assistant", label: "Nova AI Assistant", a: "#4c1d95", b: "#0891b2" },
];

const projectsDir = join(process.cwd(), "public", "projects");
if (!existsSync(projectsDir)) mkdirSync(projectsDir, { recursive: true });

function projectSvg({ label, a, b }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="800" fill="url(#g)"/>
  <rect width="1200" height="800" fill="url(#grid)"/>
  <circle cx="1020" cy="140" r="180" fill="rgba(255,255,255,0.08)"/>
  <circle cx="140" cy="700" r="220" fill="rgba(255,255,255,0.06)"/>
  <text x="600" y="420" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="700" fill="white" text-anchor="middle" opacity="0.95">${label}</text>
  <text x="600" y="470" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="white" text-anchor="middle" opacity="0.75">Project Preview Placeholder</text>
</svg>`;
}

for (const p of projects) {
  writeFileSync(join(projectsDir, `${p.file}.svg`), projectSvg(p), "utf8");
}

const avatarsDir = join(process.cwd(), "public", "testimonials");
if (!existsSync(avatarsDir)) mkdirSync(avatarsDir, { recursive: true });

const avatarColors = ["#7c3aed", "#06b6d4", "#f43f5e", "#10b981"];
const initials = ["SM", "DC", "ER", "OF"];

function avatarSvg(color, initial) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <rect width="200" height="200" rx="100" fill="${color}"/>
  <text x="100" y="122" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="700" fill="white" text-anchor="middle">${initial}</text>
</svg>`;
}

for (let i = 0; i < 4; i++) {
  writeFileSync(
    join(avatarsDir, `avatar-${i + 1}.svg`),
    avatarSvg(avatarColors[i], initials[i]),
    "utf8"
  );
}

console.log("Placeholder assets generated.");
