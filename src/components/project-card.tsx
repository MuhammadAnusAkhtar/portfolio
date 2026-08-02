"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Download, Server, Eye, Lock } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import type { Project } from "@/types";

export function ProjectCard({ project, onViewDetails }: { project: Project; onViewDetails: (project: Project) => void }) {
  const hasLinks = Boolean(
    project.links.live || project.links.apk || project.links.liveBackend || project.links.github
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-black/10"
    >
      <div
        className={`relative aspect-[3/2] w-full overflow-hidden ${
          project.imageFit === "contain"
            ? project.imageBg === "black"
              ? "bg-black"
              : "bg-muted"
            : ""
        }`}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={`transition-transform duration-500 group-hover:scale-105 ${
            project.imageFit === "contain" ? "object-contain" : "object-cover"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={() => onViewDetails(project)}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            <Eye className="h-4 w-4" /> View Details
          </button>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {project.categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold">{project.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Website
            </a>
          )}
          {project.links.apk && (
            <a
              href={project.links.apk}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Download className="h-3.5 w-3.5" /> Download APK
            </a>
          )}
          {project.links.liveBackend && (
            <a
              href={project.links.liveBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Server className="h-3.5 w-3.5" /> Live Backend
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon className="h-3.5 w-3.5" /> Source Code
            </a>
          )}
          {!hasLinks && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
              <Lock className="h-3.5 w-3.5" /> Private Project
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
