"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ExternalLink,
  Download,
  Server,
  CheckCircle2,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import type { Project } from "@/types";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const images = project ? project.gallery ?? [project.image] : [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [project?.slug]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose, images.length]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>

            <div
              className={`group/gallery relative aspect-video w-full overflow-hidden ${
                project.imageBg === "black" ? "bg-black" : "bg-muted"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[index]}
                    alt={`${project.name} screenshot ${index + 1}`}
                    fill
                    className={project.imageFit === "contain" ? "object-contain" : "object-cover"}
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover/gallery:opacity-100"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setIndex((i) => (i + 1) % images.length)}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover/gallery:opacity-100"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {images.map((img, i) => (
                      <button
                        key={img}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to screenshot ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-7">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {project.categoryLabel}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold">{project.name}</h3>
              <p className="mt-3 text-muted-foreground">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Key Features
              </h4>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-6">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Website
                  </a>
                )}
                {project.links.apk && (
                  <a
                    href={project.links.apk}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary/50 hover:text-primary"
                  >
                    <Download className="h-4 w-4" /> Download APK
                  </a>
                )}
                {project.links.liveBackend && (
                  <a
                    href={project.links.liveBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary/50 hover:text-primary"
                  >
                    <Server className="h-4 w-4" /> Live Backend
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary/50 hover:text-primary"
                  >
                    <GithubIcon className="h-4 w-4" /> Source Code
                  </a>
                )}
                {!project.links.live &&
                  !project.links.apk &&
                  !project.links.liveBackend &&
                  !project.links.github && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-muted px-5 py-2.5 text-sm font-semibold text-muted-foreground">
                      <Lock className="h-4 w-4" /> Private Project — not publicly released
                    </span>
                  )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
