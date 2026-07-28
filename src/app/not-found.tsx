import { Home, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-secondary/20 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />

      <Container className="relative flex flex-col items-center text-center">
        <span className="font-display text-[7rem] font-bold leading-none text-gradient sm:text-[10rem]">
          404
        </span>
        <h1 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
          <Button href="/#portfolio" variant="outline">
            <ArrowLeft className="h-4 w-4" />
            View Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
