"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experienceTimeline } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey"
          description="A timeline of growth — from my first client project to completing my MPhil in Computer Science."
        />

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-7 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experienceTimeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative flex items-start gap-6"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-linear-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] font-display text-xs font-bold text-white shadow-lg">
                  {item.year}
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
