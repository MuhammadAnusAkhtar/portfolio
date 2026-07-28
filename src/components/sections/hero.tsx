"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MessageCircle, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/icons/brand-icons";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TypingEffect } from "@/components/typing-effect";
import { personal, socialLinks } from "@/data/personal";

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Facebook: FacebookIcon,
  MessageCircle,
  Mail,
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-secondary/25 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        style={{ animationDelay: "-8s" }}
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">{personal.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 h-9 text-xl font-semibold text-muted-foreground sm:text-2xl"
          >
            <TypingEffect words={personal.typingTitles} className="text-foreground" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
          >
            {personal.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#portfolio" size="lg">
              View Projects
            </Button>
            <Button href={personal.resumeUrl} external size="lg" variant="secondary">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button href="#contact" size="lg" variant="outline">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 flex items-center gap-4"
          >
            {socialLinks.map((social, i) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.06 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
