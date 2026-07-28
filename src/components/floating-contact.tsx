"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { personal } from "@/data/personal";

const actions = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${personal.phoneHref.replace("+", "")}`,
    icon: MessageCircle,
    color: "bg-[#25D366]",
  },
  {
    label: "Call",
    href: `tel:${personal.phoneHref}`,
    icon: Phone,
    color: "bg-primary",
  },
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    icon: Mail,
    color: "bg-secondary",
  },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 10 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.08 }}
              aria-label={action.label}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg ${action.color}`}
            >
              <action.icon className="h-5 w-5" />
            </motion.a>
          ))}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle contact options"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] text-white shadow-xl shadow-primary/30"
      >
        <motion.span animate={{ rotate: open ? 135 : 0 }} transition={{ duration: 0.25 }}>
          {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </motion.span>
      </motion.button>
    </div>
  );
}
