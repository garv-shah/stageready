"use client";

import * as React from "react";
import Image from "next/image";
import {
  House,
  LayoutTemplate,
  Bed,
  Proportions,
  Section,
  Columns4,
  LayoutPanelLeft,
  PanelRight,
  Heading3,
  AlignVerticalDistributeStart,
  SquarePilcrow,
  SeparatorHorizontal,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Service = {
  id: string;
  name: string;
  icon: React.ReactNode;
  summary: string;
  audience: string;
  value: string[];
  deliverables: string[];
  image: {
    src: string;
    alt: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  metrics?: { label: string; value: string }[];
};

export interface ServicesPageProps {
  className?: string;
  style?: React.CSSProperties;
  onInquire?: (serviceId?: string) => void;
  layout?: "compact" | "comfortable";
}

const services: Service[] = [
  {
    id: "vacant",
    name: "Vacant Property Styling",
    icon: <House className="size-5" aria-hidden="true" />,
    summary:
      "Full-service staging that transforms empty properties into warm, aspirational homes. We curate furniture, artwork, and styling to define space and create emotional connection.",
    audience:
      "Ideal for investors, agents, and homeowners selling empty or newly built properties.",
    value: [
      "Defines scale and flow so rooms feel spacious and functional",
      "Creates an inviting first impression for photography and open homes",
      "Helps buyers visualise lifestyle, increasing perceived value",
      "Typically reduces days on market and improves offer quality",
    ],
    deliverables: [
      "Concept and mood boards aligned to target buyer profile",
      "Furniture, art, soft furnishings, and dcor hire",
      "Professional installation, styling, and de-staging",
      "Photo-ready presentation with cohesive color story",
    ],
    image: {
      src: "/images/living-room-11.jpg",
      alt: "Light-filled staged living room with neutral palette and accents of colour",
    },
    testimonial: {
      quote:
        "We received multiple offers after the first weekend. The home felt elevated yet welcoming, exactly what the listing needed.",
      author: "Sophie M.",
      role: "Listing Agent",
    },
    metrics: [
      { label: "Avg. DOM Reduction", value: "3050%" },
      { label: "Photo Click-Through", value: "+42%" },
      { label: "Staged Rooms", value: "48+" },
    ],
  },
  {
    id: "occupied",
    name: "Occupied Property Styling",
    icon: <LayoutTemplate className="size-5" aria-hidden="true" />,
    summary:
      "Refine what you own and strategically add key pieces to elevate your lived-in home. We optimise layout, declutter, and style to balance comfort with buyer appeal.",
    audience:
      "Perfect for sellers living in the property who want a polished, market-ready presentation without moving out.",
    value: [
      "Highlights the home's best features while minimizing distractions",
      "Maximises light, space, and flow with purposeful layouts",
      "Cost-effective enhancements with high visual impact",
      "Professional guidance to streamline open-home prep",
    ],
    deliverables: [
      "Room-by-room strategy and prioritised action plan",
      "Furniture reconfiguration and selective rentals if required",
      "Artwork and soft furnishings to complete the look",
      "Styling day and photo-ready finishing touches",
    ],
    image: {
      src: "/images/kitchen-8.jpg",
      alt: "Refreshed dining area with curated styling in an occupied home",
    },
    testimonial: {
      quote:
        "They worked wonders with our existing pieces. The home felt bigger and the photos came out beautifully.",
      author: "Daniel K.",
      role: "Homeowner",
    },
    metrics: [
      { label: "Budget Efficiency", value: "Up to 60% vs. full stage" },
      { label: "Prep Time Saved", value: "15+ hrs" },
      { label: "Rooms Optimized", value: "Whole home" },
    ],
  },
  {
    id: "partial",
    name: "Partial Property Styling",
    icon: <Bed className="size-5" aria-hidden="true" />,
    summary:
      "Target high-impact rooms like living, primary suite, and entry to elevate the listing where it matters most. Strategic impact, streamlined scope.",
    audience:
      "Great for vendors seeking maximum ROI on select spaces or where timelines and budgets are tight.",
    value: [
      "Transforms priority rooms that drive buyer emotion",
      "Pairs seamlessly with existing pieces for cohesion",
      "Faster turnaround with focused logistics",
      "Maintains premium look with a leaner footprint",
    ],
    deliverables: [
      "Targeted concept board for included rooms",
      "Furniture, art, and soft furnishings for focus areas",
      "Professional styling and installation",
      "De-staging post-settlement or campaign end",
    ],
    image: {
      src: "/images/living-room-10.jpg",
      alt: "Calm, styled living room with layered textures and natural tones",
    },
    testimonial: {
      quote:
        "We focused on the living and primary suite; the difference was night and day. It photographed like a magazine.",
      author: "Priya N.",
      role: "Vendor",
    },
    metrics: [
      { label: "Rooms Covered", value: "24" },
      { label: "Install Window", value: "12 days" },
      { label: "ROI Focus", value: "High impact" },
    ],
  },
  {
    id: "developers",
    name: "Styling for Developers",
    icon: <Proportions className="size-5" aria-hidden="true" />,
    summary:
      "Model apartments, display homes, and repeatable schemes tailored to your brand and buyer demographic. Scalable styling with operational precision.",
    audience:
      "Developers, builders, and project marketers seeking consistent, on-brand presentation across multiple dwellings.",
    value: [
      "Cohesive, repeatable styling systems for multiple units",
      "Optimised for marketing photography and display walk throughs",
      "Durable selections designed for campaign duration",
      "Streamlined logistics, install, and refresh schedules",
    ],
    deliverables: [
      "Design packs with finish schedules and scheme variations",
      "Procurement, warehousing, and install management",
      "Model unit staging and ongoing maintenance",
      "Handover documentation and de-staging",
    ],
    image: {
      src: "/images/dining-room-7.jpg",
      alt: "Modern display kitchen and living space staged for developers",
    },
    testimonial: {
      quote:
        "Professional, consistent, and scalable. Their display suites elevated our marketing and foot traffic.",
      author: "Alex R.",
      role: "Project Marketing Manager",
    },
    metrics: [
      { label: "Portfolio Units", value: "10100+" },
      { label: "Turnaround", value: "As scheduled" },
      { label: "Brand Consistency", value: "Systemized" },
    ],
  },
];

function MetricChip(props: { label: string; value: string }) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-md border bg-card px-3 py-2">
      <div className="size-6 shrink-0 rounded-sm bg-background/60 ring-1 ring-border" aria-hidden="true" />
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{props.label}</div>
        <div className="truncate text-sm font-semibold">{props.value}</div>
      </div>
    </div>
  );
}

function Bullet(props: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex size-5 flex-none items-center justify-center rounded-sm bg-background text-primary ring-1 ring-border">
        {props.icon}
      </span>
      <span className="text-sm leading-relaxed text-foreground/90">{props.children}</span>
    </li>
  );
}

export default function ServicesPage({
  className,
  style,
  onInquire,
  layout = "comfortable",
}: ServicesPageProps) {
  return (
    <section
      className={["w-full", layout === "compact" ? "space-y-8" : "space-y-12 md:space-y-16", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
      aria-label="Stage Ready Services"
    >
      <header className="w-full">
        <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs text-muted-foreground">
          <SeparatorHorizontal className="size-3.5" aria-hidden="true" />
          Our Services
        </div>
        <h1 className="mt-4 text-xl font-semibold leading-tight sm:text-2xl md:text-3xl">
          Thoughtful styling that sells the story of your home
        </h1>
        <p className="mt-3 max-w-[70ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
          Stage Ready delivers refined, market-driven presentations with a calm, neutral palette and subtle accents of colour. Each service is tailored to your property, audience, and campaign timeline.
        </p>
      </header>

      <div className="grid w-full gap-8">
        {services.map((svc, idx) => (
          <Card
            key={svc.id}
            className="overflow-hidden border bg-card transition-shadow duration-200 hover:shadow-sm"
            aria-labelledby={`${svc.id}-title`}
          >
            <CardHeader className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="secondary"
                  className="rounded-sm bg-background text-foreground hover:bg-background"
                  aria-hidden="true"
                >
                  <span className="sr-only">{svc.name} icon</span>
                  <span className="mr-1 inline-flex items-center">{svc.icon}</span>
                  {svc.id === "vacant" && "Vacant"}
                  {svc.id === "occupied" && "Occupied"}
                  {svc.id === "partial" && "Partial"}
                  {svc.id === "developers" && "Developers"}
                </Badge>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Columns4 className="size-3.5" aria-hidden="true" />
                  <span>{idx + 1} of {services.length}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <CardTitle id={`${svc.id}-title`} className="text-lg sm:text-xl">
                  {svc.name}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-foreground/80">
                  {svc.summary}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div
                className="relative overflow-hidden rounded-md ring-1 ring-border"
                aria-label={`${svc.name} example`}
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={svc.image.src}
                    alt={svc.image.alt}
                    fill
                    sizes="(min-width: 1024px) 900px, 100vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <LayoutPanelLeft className="size-4" aria-hidden="true" />
                    Who it's for
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/90">{svc.audience}</p>

                  <div className="pt-2">
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                      <Heading3 className="size-4" aria-hidden="true" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {svc.value.map((v, i) => (
                        <Bullet
                          key={i}
                          icon={<Section className="size-3.5" aria-hidden="true" />}
                        >
                          {v}
                        </Bullet>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <PanelRight className="size-4" aria-hidden="true" />
                    What's included
                  </h3>
                  <ul className="space-y-2">
                    {svc.deliverables.map((d, i) => (
                      <Bullet
                        key={i}
                        icon={<AlignVerticalDistributeStart className="size-3.5" aria-hidden="true" />}
                      >
                        {d}
                      </Bullet>
                    ))}
                  </ul>

                  {svc.metrics && (
                    <div className="pt-2">
                      <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                        <SquarePilcrow className="size-4" aria-hidden="true" />
                        Success metrics
                      </h4>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {svc.metrics.map((m) => (
                          <MetricChip key={`${svc.id}-${m.label}`} label={m.label} value={m.value} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {svc.testimonial && (
                <figure className="rounded-md border bg-secondary/30 p-4">
                  <blockquote className="text-sm leading-relaxed text-foreground/90">
                    "{svc.testimonial.quote}"
                  </blockquote>
                  <figcaption className="mt-2 text-xs text-muted-foreground">
                    {svc.testimonial.author}
                    {svc.testimonial.role ? `, ${svc.testimonial.role}` : ""}
                  </figcaption>
                </figure>
              )}

              {onInquire && (
                <div className="pt-1">
                  <Button
                    type="button"
                    onClick={() => onInquire?.(svc.id)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    aria-label={`Enquire about ${svc.name}`}
                  >
                    Enquire about {svc.name}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <aside className="w-full rounded-md border bg-card p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold">Our styling approach</p>
            <p className="mt-1 max-w-[65ch] text-sm text-muted-foreground">
              Neutral foundations, layered texture, and notes of colour. We tailor every
              scheme to your buyer profile and architecture to create a cohesive, photo-ready presentation.
            </p>
          </div>
          <div className="mt-2 flex gap-2 sm:mt-0">
            <Badge variant="secondary" className="rounded-sm bg-background">
              Calm & Cohesive
            </Badge>
            <Badge variant="secondary" className="rounded-sm bg-background">
              Market-Driven
            </Badge>
            <Badge variant="secondary" className="rounded-sm bg-background">
              Photo-Ready
            </Badge>
          </div>
        </div>
      </aside>
    </section>
  );
}
