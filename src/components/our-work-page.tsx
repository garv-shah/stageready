"use client"

import React, { useMemo, useState } from "react"
import {
  LayoutGrid,
  LayoutList,
  GalleryHorizontal,
  Grid3x2,
  Columns2,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

type StyleType = "rustic" | "contemporary" | "coastal" | "organic"
type PropertyType = "apartment" | "single-family" | "townhouse" | "condo" | "luxury" | "cottage"

export type Project = {
  id: string
  title: string
  propertyType: PropertyType
  style: StyleType
  beforeImage: string
  afterImage: string
  description: string
  testimonial?: {
    quote: string
    client: string
    role?: string
  }
  metrics?: {
    daysOnMarketReduced?: number
    offersReceived?: number
    saleOverAskPercent?: number
  }
}

export interface OurWorkPageProps {
  className?: string
  style?: React.CSSProperties
  layout?: "comfortable" | "compact"
  initialStyleFilter?: "all" | StyleType
  initialPropertyFilter?: "all" | PropertyType
  projects?: Project[]
  showTestimonials?: boolean
  showCaseStudies?: boolean
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: "r1",
    title: "Warm Rustic Revival",
    propertyType: "single-family",
    style: "rustic",
    beforeImage:
      "/images/rustic-living-room-2.jpg",
    afterImage:
      "/images/rustic-living-room-1.jpg",
    description:
      "We transformed a dated living area into a warm, textural retreat using layered woods, earthy textiles, and grounded neutrals with soft pink accents.",
    testimonial: {
      quote:
        "Stage Ready completely changed how buyers experienced our home. We received multiple offers the first weekend.",
      client: "Elena & Marco",
      role: "Homeowners",
    },
    metrics: {
      daysOnMarketReduced: 14,
      offersReceived: 5,
      saleOverAskPercent: 7,
    },
  },
  {
    id: "c2",
    title: "Contemporary Clarity",
    propertyType: "condo",
    style: "contemporary",
    beforeImage:
      "/images/contemporary-living-room-2.jpg",
    afterImage:
      "/images/contemporary-living-room-1.jpg",
    description:
      "A sleek condo elevated with clean lines, balanced contrasts, and purposeful negative space to spotlight light and views.",
    testimonial: {
      quote: "Minimal, modern, and incredibly welcoming. Exactly what we needed.",
      client: "Brenna",
      role: "Listing Agent",
    },
    metrics: {
      daysOnMarketReduced: 10,
      offersReceived: 3,
      saleOverAskPercent: 4,
    },
  },
  {
    id: "co3",
    title: "Calm Coastal Light",
    propertyType: "luxury",
    style: "coastal",
    beforeImage:
      "/images/cozy-living-room-2.jpg",
    afterImage:
      "/images/cozy-living-room-1.jpg",
    description:
      "Breezy layers, softened tones, and natural textures bring an effortless coastal sensibility that photographs beautifully.",
    testimonial: {
      quote:
        "The home felt like a magazine. The staging captured the lifestyle perfectly.",
      client: "Julian",
      role: "Seller",
    },
    metrics: {
      daysOnMarketReduced: 21,
      offersReceived: 8,
      saleOverAskPercent: 9,
    },
  },
  {
    id: "o4",
    title: "Organic Ease",
    propertyType: "townhouse",
    style: "organic",
    beforeImage:
      "/images/modern-living-room-2.jpg",
    afterImage:
      "/images/modern-living-room-1.jpg",
    description:
      "A mindful, nature-forward palette with rounded forms and plants to soften edges and enhance flow across compact spaces.",
    testimonial: {
      quote:
        "Every room felt intentional. Buyers commented on the warmth and flow.",
      client: "Kara",
      role: "Agent",
    },
    metrics: {
      daysOnMarketReduced: 12,
      offersReceived: 4,
      saleOverAskPercent: 5,
    },
  },
  {
    id: "r5",
    title: "Refined Rustic Loft",
    propertyType: "apartment",
    style: "rustic",
    beforeImage:
      "/images/rustic-kitchen-1.jpg",
    afterImage:
      "/images/rustic-dining-room-1.jpg",
    description:
      "Exposed textures grounded by elegant accents, balancing character and polish to broaden buyer appeal.",
  },
  {
    id: "co6",
    title: "Soft Coastal Townhome",
    propertyType: "townhouse",
    style: "coastal",
    beforeImage:
      "/images/cozy-kitchen-1.jpg",
    afterImage:
      "/images/cozy-kitchen-2.jpg",
    description:
      "Sunlight-forward styling with breathable fabrics and sandy neutrals accented by gentle pink tones from the brand.",
  },
]

const STYLE_OPTIONS: { key: "all" | StyleType; label: string }[] = [
  { key: "all", label: "All styles" },
  { key: "rustic", label: "Rustic" },
  { key: "contemporary", label: "Contemporary" },
  { key: "coastal", label: "Coastal" },
  { key: "organic", label: "Organic" },
]

const PROPERTY_OPTIONS: { key: "all" | PropertyType; label: string }[] = [
  { key: "all", label: "All property types" },
  { key: "apartment", label: "Apartment" },
  { key: "single-family", label: "Single-family" },
  { key: "townhouse", label: "Townhouse" },
  { key: "condo", label: "Condo" },
  { key: "luxury", label: "Luxury" },
  { key: "cottage", label: "Cottage" },
]

export default function OurWorkPage({
  className,
  style: styleProp,
  layout = "comfortable",
  initialStyleFilter = "all",
  initialPropertyFilter = "all",
  projects = DEFAULT_PROJECTS,
  showTestimonials = true,
  showCaseStudies = true,
}: OurWorkPageProps) {
  const [styleFilter, setStyleFilter] = useState<"all" | StyleType>(initialStyleFilter)
  const [propertyFilter, setPropertyFilter] = useState<"all" | PropertyType>(initialPropertyFilter)
  const [view, setView] = useState<"grid" | "list">("grid")

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchStyle = styleFilter === "all" ? true : p.style === styleFilter
      const matchType = propertyFilter === "all" ? true : p.propertyType === propertyFilter
      return matchStyle && matchType
    })
  }, [projects, styleFilter, propertyFilter])

  const pad = layout === "compact" ? "p-4" : "p-6"
  const mediaAspect = layout === "compact" ? "aspect-[4/3]" : "aspect-[16/10]"

  return (
    <section
      className={cn(
        "w-full max-w-full bg-background text-foreground overflow-x-hidden",
        className
      )}
      style={styleProp}
      aria-label="Our work portfolio"
    >
      <div className="w-full max-w-full">
        <header className={cn("mb-6 sm:mb-8", pad)}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Badge className="bg-primary text-primary-foreground" variant="default">
                Our Work
              </Badge>
              <span className="text-muted-foreground text-sm">Stage Ready</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-tight">
              Beautiful transformations that sell the story
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-prose">
              A curated selection of staging projects across styles and property types. Explore
              before/after transformations, design approaches, and measurable results.
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
                <Tabs
                  value={styleFilter}
                  onValueChange={(v) => setStyleFilter(v as "all" | StyleType)}
                >
                  <div className="max-w-full overflow-x-auto">
                    <TabsList className="inline-flex w-max gap-1 whitespace-nowrap bg-card">
                      {STYLE_OPTIONS.map((opt) => (
                        <TabsTrigger key={opt.key} value={opt.key} className="transition-all">
                          {opt.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                </Tabs>
                <div className="w-full sm:w-auto sm:min-w-[180px]">
                  <Select
                    value={propertyFilter === "all" ? undefined : propertyFilter}
                    onValueChange={(v) =>
                      setPropertyFilter((v as PropertyType) ?? "all")
                    }
                  >
                    <SelectTrigger className="bg-card w-full">
                      <SelectValue placeholder="All property types" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover">
                      {/* Do not include 'all' as an item per component API safety */}
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="single-family">Single-family</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                      <SelectItem value="cottage">Cottage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 rounded-md bg-card p-1">
                  <Button
                    type="button"
                    size="sm"
                    variant={view === "grid" ? "default" : "ghost"}
                    className={cn("gap-2", view === "grid" ? "" : "text-foreground")}
                    aria-pressed={view === "grid"}
                    onClick={() => setView("grid")}
                  >
                    <LayoutGrid className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only sm:not-sr-only sm:inline">Grid</span>
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant={view === "list" ? "default" : "ghost"}
                    className={cn("gap-2", view === "list" ? "" : "text-foreground")}
                    aria-pressed={view === "list"}
                    onClick={() => setView("list")}
                  >
                    <LayoutList className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only sm:not-sr-only sm:inline">List</span>
                  </Button>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
                  <Columns2 className="h-4 w-4" aria-hidden="true" />
                  <span className="text-xs">Responsive layout</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Separator className="bg-border" />

        <div
          className={cn(
            "w-full",
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6"
              : "flex flex-col gap-4 sm:gap-6 p-4 sm:p-6"
          )}
        >
          {filtered.map((project) =>
            view === "grid" ? (
              <ProjectCard
                key={project.id}
                project={project}
                mediaAspect={mediaAspect}
                pad={pad}
              />
            ) : (
              <ProjectRow
                key={project.id}
                project={project}
                mediaAspect={mediaAspect}
                pad={pad}
              />
            )
          )}
          {filtered.length === 0 && (
            <div className="col-span-full">
              <Card className="bg-card">
                <CardContent className={cn("text-center", pad)}>
                  <p className="text-muted-foreground">
                    No projects match your filters. Try a different combination.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {showCaseStudies && (
          <CaseStudies
            projects={projects.slice(0, 3)}
            pad={pad}
          />
        )}

        {showTestimonials && (
          <Testimonials
            projects={projects.filter((p) => p.testimonial).slice(0, 6)}
            pad={pad}
          />
        )}

        <footer className={cn("mt-2 sm:mt-4", pad)}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Ready to elevate your listing?</h2>
              <p className="text-sm text-muted-foreground">
                We tailor staging to your buyer profile, property type, and story.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/book">
                <Button className="bg-primary text-primary-foreground">
                  Book a consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">View services</Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  mediaAspect,
  pad,
}: {
  project: Project
  mediaAspect: string
  pad: string
}) {
  return (
    <Card className="group bg-card overflow-hidden">
      <CardHeader className={cn("space-y-2", pad)}>
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-base sm:text-lg truncate">{project.title}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {capitalize(project.style)}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {formatProperty(project.propertyType)}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 break-words">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className={cn("pt-0", pad)}>
        <BeforeAfter mediaAspect={mediaAspect} before={project.beforeImage} after={project.afterImage} />
      </CardContent>

      <CardFooter className={cn("flex items-center justify-between", pad)}>
        <ProjectMetrics metrics={project.metrics} />
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <GalleryHorizontal className="h-4 w-4" aria-hidden="true" />
          Before / After
        </span>
      </CardFooter>
    </Card>
  )
}

function ProjectRow({
  project,
  mediaAspect,
  pad,
}: {
  project: Project
  mediaAspect: string
  pad: string
}) {
  return (
    <Card className="group bg-card overflow-hidden">
      <div className={cn("flex flex-col md:flex-row gap-0")}>
        <div className={cn("md:w-2/5", pad, "pt-6 md:pt-6")}>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg truncate">{project.title}</h3>
              <p className="text-sm text-muted-foreground truncate">
                {formatProperty(project.propertyType)}
              </p>
            </div>
            <Badge variant="outline" className="shrink-0">
              {capitalize(project.style)}
            </Badge>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-4">
            <ProjectMetrics metrics={project.metrics} />
          </div>
        </div>
        <div className={cn("md:w-3/5", pad, "pt-0 md:pt-6")}>
          <BeforeAfter mediaAspect={mediaAspect} before={project.beforeImage} after={project.afterImage} />
        </div>
      </div>
    </Card>
  )
}

function BeforeAfter({
  before,
  after,
  mediaAspect,
}: {
  before: string
  after: string
  mediaAspect: string
}) {
  return (
    <div className={cn("relative w-full", mediaAspect, "rounded-md overflow-hidden bg-secondary")}>
      <div className="absolute inset-0 grid grid-cols-2">
        <figure className="relative overflow-hidden">
          <img
            src={before}
            alt="Before staging"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute left-2 top-2 z-10">
            <Badge variant="outline" className="bg-card/70 backdrop-blur">
              Before
            </Badge>
          </div>
        </figure>
        <figure className="relative overflow-hidden">
          <img
            src={after}
            alt="After staging"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute left-2 top-2 z-10">
            <Badge className="bg-primary text-primary-foreground/90">After</Badge>
          </div>
        </figure>
      </div>
      <div className="pointer-events-none absolute inset-0 grid grid-cols-2">
        <div className="border-r border-border" />
        <div />
      </div>
    </div>
  )
}

function ProjectMetrics({
  metrics,
}: {
  metrics?: Project["metrics"]
}) {
  if (!metrics) {
    return (
      <div className="text-xs text-muted-foreground">Tailored staging for impact</div>
    )
  }
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-foreground">
      {typeof metrics.daysOnMarketReduced === "number" && (
        <MetricPill label="Days reduced" value={`-${metrics.daysOnMarketReduced}d`} />
      )}
      {typeof metrics.offersReceived === "number" && (
        <MetricPill label="Offers" value={`${metrics.offersReceived}`} />
      )}
      {typeof metrics.saleOverAskPercent === "number" && (
        <MetricPill label="Over ask" value={`+${metrics.saleOverAskPercent}%`} />
      )}
    </div>
  )
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-1">
      <Grid3x2 className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      <span className="sr-only">{label}</span>
      <span className="text-xs font-medium">{value}</span>
    </span>
  )
}

function CaseStudies({
  projects,
  pad,
}: {
  projects: Project[]
  pad: string
}) {
  if (!projects.length) return null
  return (
    <section className="w-full max-w-full">
      <div className={cn("mt-2 sm:mt-4", pad)}>
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl">Case studies</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
        {projects.map((p) => (
          <Card key={p.id} className="bg-card overflow-hidden">
            <CardHeader className={pad}>
              <CardTitle className="text-base sm:text-lg">{p.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {capitalize(p.style)}  {formatProperty(p.propertyType)}
              </p>
            </CardHeader>
            <CardContent className={cn("pt-0", pad)}>
              <figure className="relative aspect-[16/9] overflow-hidden rounded-md bg-secondary">
                <img
                  src={p.afterImage}
                  alt={`${p.title} after staging`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
              </figure>
              <p className="mt-3 text-sm text-muted-foreground">
                {p.description}
              </p>
            </CardContent>
            <CardFooter className={cn("flex items-center justify-between", pad)}>
              <ProjectMetrics metrics={p.metrics} />
              <span className="text-xs text-muted-foreground">Story-led approach</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Testimonials({
  projects,
  pad,
}: {
  projects: Project[]
  pad: string
}) {
  const testimonials = projects
    .filter((p) => p.testimonial)
    .map((p) => ({ ...p.testimonial!, refTitle: p.title }))

  if (!testimonials.length) return null
  return (
    <section className="w-full max-w-full">
      <div className={cn("mt-2 sm:mt-4", pad)}>
        <h2 className="text-xl sm:text-2xl">What clients are saying</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
        {testimonials.map((t, idx) => (
          <Card key={idx} className="bg-card">
            <CardContent className={cn("space-y-3", pad)}>
              <blockquote className="text-sm md:text-base leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex min-w-0 flex-col">
                  <span className="text-sm font-medium truncate">{t.client}</span>
                  <span className="text-xs text-muted-foreground truncate">
                    {t.role ?? "Client"}  {t.refTitle}
                  </span>
                </div>
                <Badge variant="outline" className="shrink-0">
                  Featured
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function formatProperty(s: PropertyType) {
  switch (s) {
    case "single-family":
      return "Single-family"
    default:
      return capitalize(s)
  }
}