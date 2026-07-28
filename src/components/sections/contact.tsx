"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact-form";
import { personal } from "@/data/personal";

const infoItems = [
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phoneHref}` },
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: MapPin, label: "Location", value: personal.location, href: undefined },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project in mind? Send a message and let's discuss how I can help bring it to life."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="space-y-4">
              {infoItems.map((item) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <a
              href={`https://wa.me/${personal.phoneHref.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>

            <div className="relative h-56 overflow-hidden rounded-2xl border border-border">
              <div className="bg-grid absolute inset-0" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted/60 text-center">
                <MapPin className="h-8 w-8 text-primary" />
                <p className="text-sm font-medium">{personal.location}</p>
                <p className="text-xs text-muted-foreground">Map placeholder</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
