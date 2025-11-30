"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { House, Sofa, Frame, LayoutTemplate, Section as SectionIcon } from "lucide-react";

interface HomePageProps {
  className?: string;
}

type StyleItem = {
  key: "rustic" | "contemporary" | "coastal" | "organic";
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  icon: React.ReactNode;
};

function StyleCard({
  item,
}: {
  item: StyleItem;
}) {
  return (
    <Card className="group overflow-hidden rounded-[var(--radius)] border border-border bg-card transition-shadow hover:shadow-md focus-within:shadow-md">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          priority={item.key === "rustic"}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-black/0" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-accent-foreground/90 px-3 py-1 text-xs font-medium text-primary shadow-sm">
          <span className="sr-only">{item.title} style icon</span>
          <span aria-hidden="true" className="text-primary/80">{item.icon}</span>
          <span className="tracking-wide">{item.title}</span>
        </div>
      </div>
      <CardContent className="p-5">
        <p className="text-sm text-muted-foreground">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function HomePageSection({ className }: HomePageProps) {
  return (
    <section className={cn("w-full", className)} aria-label="Stage Ready home">
      {/* Hero */}
      <div className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/homepage-background.jpg"
          alt="Elegant home staging background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-6xl p-4 sm:p-6">
          <Card className="overflow-hidden border-none bg-background/95 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/85 sm:max-w-2xl">
            <CardContent className="p-6 sm:p-10">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-foreground/80 px-3 py-1 text-xs font-semibold text-primary">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <House className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  Stage Ready - Home Staging & Styling
                </div>
                <div className="max-w-3xl">
                  <h1 className="break-words text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    Story-led home staging that inspires buyers and elevates value
                  </h1>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    We craft spaces that feel lived, loved, and ready. From cozy nooks to open-plan living,
                    our styling draws out each property's unique narrative - so buyers can picture their life there.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring"
                  >
                    <Link href="/book">Book a consultation</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-input bg-background text-foreground hover:bg-muted focus-visible:ring-ring"
                  >
                    <Link href="/services">View services</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Styles Showcase
      <div className="mx-auto w-full max-w-6xl">
        <div className="mt-12 sm:mt-16">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Our styling language
            </div>
            <h2 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">
              Four distinct styles, one cohesive story
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              We tailor each property with a focused palette and consistent details - resulting in spaces that
              feel effortless, memorable, and market-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stylesData.map((s) => (
              <StyleCard key={s.key} item={s} />
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="my-12 sm:my-16">
          <Card className="overflow-hidden border border-border">
            <div className="flex flex-col items-start gap-4 bg-accent-foreground/70 px-6 py-8 text-primary sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold sm:text-2xl">Ready to stage your next listing?</h3>
                <p className="mt-2 text-sm text-primary/80 sm:text-base">
                  Book a no-pressure consultation. We'll discuss your goals and suggest a clear, story-led plan.
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring"
                >
                  <Link href="/book">Book consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-foreground/30 bg-transparent text-foreground hover:bg-card focus-visible:ring-ring"
                >
                  <Link href="/services">Learn more</Link>
                </Button>
              </div>
            </div>
            <Separator />
            <CardContent className="flex flex-wrap items-center gap-4 p-4 text-xs text-muted-foreground">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Tailored packages
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Flexible timelines
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Photo-ready results
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="min-w-0 rounded-[var(--radius)] border border-border bg-card p-5 transition-colors hover:bg-muted">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-md bg-accent-foreground/80 text-primary shadow-sm">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  context,
}: {
  quote: string;
  author: string;
  context: string;
}) {
  return (
    <Card className="h-full border border-border bg-card">
      <div className="h-1 w-full bg-accent-foreground" aria-hidden="true" />
      <CardContent className="p-5">
        <blockquote className="text-sm leading-relaxed text-foreground sm:text-base">
          "{quote}"
        </blockquote>
        <div className="mt-4 text-sm font-medium">
          {author}
          <span className="ml-2 text-muted-foreground">- {context}</span>
        </div>
      </CardContent>
    </Card>
  );
}
