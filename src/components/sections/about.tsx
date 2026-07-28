"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/personal";

const highlights = [
  { icon: Briefcase, label: personal.experienceLabel },
  { icon: GraduationCap, label: personal.education },
  { icon: MapPin, label: personal.location },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="About Me" title="Get to know me better" />

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-tr from-primary/20 via-transparent to-secondary/20 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-black/10">
              <Image
                src="/profile.jpg"
                alt={personal.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 448px"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass absolute -bottom-6 -right-6 flex items-center gap-3 rounded-2xl px-5 py-4 shadow-xl"
            >
              <Sparkles className="h-6 w-6 text-primary" />
              <div>
                <p className="font-display text-lg font-bold leading-none">4.5+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              {personal.title}
            </h3>
            <div className="mt-5 space-y-4 text-muted-foreground">
              {personal.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
                >
                  <item.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact">Let&apos;s Work Together</Button>
              <Button href={personal.resumeUrl} external variant="outline">
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
