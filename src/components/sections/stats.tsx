"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { stats } from "@/data/experience";
import { useCountUp } from "@/hooks/use-count-up";

function StatCard({ label, value, suffix, index }: { label: string; value: number; suffix: string; index: number }) {
  const { ref, value: displayValue } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm"
    >
      <span className="font-display text-4xl font-bold text-white sm:text-5xl">
        {displayValue}
        {suffix}
      </span>
      <span className="text-sm font-medium text-white/70">{label}</span>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] py-20">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
