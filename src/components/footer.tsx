import { MessageCircle, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/icons/brand-icons";
import { Container } from "@/components/ui/container";
import { navLinks, personal, socialLinks } from "@/data/personal";
import { services } from "@/data/services";

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Facebook: FacebookIcon,
  MessageCircle,
  Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-xl font-bold tracking-tight">
              Anus<span className="text-gradient">.dev</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {personal.intro}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>{personal.location}</li>
              <li>
                <a href={`tel:${personal.phoneHref}`} className="hover:text-primary">
                  {personal.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${personal.email}`} className="hover:text-primary">
                  {personal.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {personal.name}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 fill-accent text-accent" /> using Next.js
            &amp; Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
