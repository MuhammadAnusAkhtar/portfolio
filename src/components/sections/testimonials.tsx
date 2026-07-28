"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-muted/30 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          description="Feedback from businesses and teams I've partnered with on web and mobile projects."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-black/5"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/10" />

              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>

              <p className="mt-4 text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>

              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
