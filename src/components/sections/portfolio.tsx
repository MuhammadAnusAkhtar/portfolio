"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Websites", value: "websites" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Desktop Apps", value: "desktop" },
  { label: "UI Designs", value: "ui-design" },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeFilter === "all" ||
        project.category === activeFilter ||
        project.additionalCategories?.includes(activeFilter);
      const matchesQuery =
        query.trim() === "" ||
        project.name.toLowerCase().includes(query.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work"
          description="A mix of websites, mobile apps, and UI designs I've built for clients and personal projects."
        />

        <div className="mb-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  activeFilter === filter.value
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeFilter === filter.value && (
                  <motion.span
                    layoutId="portfolio-filter-pill"
                    className="absolute inset-0 rounded-full bg-linear-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)]"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative">{filter.label}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary/50"
            />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} onViewDetails={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">
            No projects match your search. Try a different keyword or filter.
          </p>
        )}
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
