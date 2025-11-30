"use client"

import { TextQuote, Linkedin, House, Sofa, Armchair, Layers, RockingChair, LayoutTemplate, LayoutPanelLeft, StretchVertical, Wallpaper, LayoutDashboard } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import * as React from "react"

type AboutPageProps = {
  className?: string
}

const values = [
  {
    title: "Crafted with Intention",
    icon: Layers,
    description:
      "An interior designer and property stylist with an eye for detail every texture, line, and placement serves a purpose.",
  },
  {
    title: "Client-Centred",
    icon: LayoutDashboard,
    description:
      "Deeply understanding your needs, lifestyle, and goals to deliver spaces that feel personal, functional, and effortless.",
  },
  {
    title: "Market-Savvy",
    icon: House,
    description:
      "Grounded in local market knowledge and current trends to style homes that stand out and sell faster.",
  },
]

const expertise = [
  {
    title: "Space Planning",
    icon: LayoutPanelLeft,
    description: "Balanced layouts that guide the eye and enhance natural flow.",
  },
  {
    title: "Furniture Curation",
    icon: Sofa,
    description: "Pieces that anchor each room and harmonise scale and proportion.",
  },
  {
    title: "Materiality + Layers",
    icon: Layers,
    description: "Thoughtful layers, textiles, and finishes add depth.",
  },
  {
    title: "Style Direction",
    icon: LayoutTemplate,
    description: "Helping you choose a style that complements your architecture.",
  },
  {
    title: "Scale + Proportion",
    icon: StretchVertical,
    description: "Right-size selections for comfort, usability, and impact.",
  },
  {
    title: "Colour + Texture",
    icon: Wallpaper,
    description: "Neutral foundations with accents of colour.",
  },
]

const testimonials = [
  {
    quote:
      "Stage Ready transformed our listing, and buyers immediately connected with the space. We received multiple offers in the first week.",
    name: "Olivia Martin",
    role: "Realtor, Martin & Co.",
    avatar:
      "/images/testimonial-1.jpg",
  },
  {
    quote:
      "They understood our needs and created a home that felt calm, cohesive, and elevated, without losing our personality.",
    name: "Daniel Lee",
    role: "Homeowner",
    avatar:
      "/images/testimonial-2.jpg",
  },
  {
    quote:
      "Professional, detail-oriented, and market-aware. The styling made our photos shine and traffic skyrocketed.",
    name: "Amelia Roberts",
    role: "Property Developer",
    avatar:
      "/images/testimonial-3.jpg",
  },
]

export default function AboutPage({ className }: AboutPageProps) {
  return (
    <section
      className={`w-full max-w-full bg-background text-foreground ${className ?? ""}`}
      aria-labelledby="about-title"
    >
      <div className="container w-full max-w-full px-4 md:px-8">
        {/* Hero */}
        <div className="w-full max-w-full bg-card rounded-lg border p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 bg-secondary text-secondary-foreground text-xs sm:text-sm">
                <Armchair className="h-3.5 w-3.5" aria-hidden="true" />
                Stage Ready  About
              </span>
              <h1
                id="about-title"
                className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight"
              >
                Spaces that tell stories and come alive
              </h1>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Stage Ready offers interior designing and property styling with a meticulous eye for
                detail. We create refined, welcoming environments that resonate with buyers and
                reflect the people who live there. With a clean, neutral palette and accents of colour,
                our styling elevates photography, maximises appeal, and makes every space
                feel intentional.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-start gap-3">
                <div className="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2">
                  <RockingChair className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm">Interior Design</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2">
                  <House className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm">Property Styling</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2">
                  <LayoutTemplate className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm">Story-Led Spaces</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Values */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <article
              key={v.title}
              className="w-full max-w-full rounded-lg border bg-card p-6 transition-shadow hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-secondary p-2 border">
                  <v.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Expertise */}
        <div className="mt-12 w-full max-w-full rounded-lg border bg-card p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-semibold">Expertise</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                A holistic approach that blends design rigour with real-world market insight.
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((e) => (
              <div
                key={e.title}
                className="rounded-lg border bg-card p-5 transition-colors hover:bg-secondary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-secondary p-2 border">
                    <e.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{e.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mt-12 w-full max-w-full rounded-lg border bg-card p-6 sm:p-8">
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-semibold">Solutions for Different Needs</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tailored services for owner-occupied homes, vacant properties, and pre-sale consultations.
              </p>
            </div>
          </div>

          <Tabs className="mt-6" defaultValue="occupied">
            <div className="-mx-3 px-3 overflow-x-auto">
              <TabsList className="inline-flex gap-2 w-max whitespace-nowrap bg-card">
                <TabsTrigger value="occupied" className="data-[state=active]:bg-secondary transition-all">
                  <Armchair className="mr-2 h-4 w-4" aria-hidden="true" />
                  Occupied Homes
                </TabsTrigger>
                <TabsTrigger value="vacant" className="data-[state=active]:bg-secondary transition-all">
                  <Sofa className="mr-2 h-4 w-4" aria-hidden="true" />
                  Vacant Staging
                </TabsTrigger>
                <TabsTrigger value="consult" className="data-[state=active]:bg-secondary transition-all">
                  <LayoutTemplate className="mr-2 h-4 w-4" aria-hidden="true" />
                  Consultations
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="occupied" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <SolutionPoint
                  icon={Wallpaper}
                  title="Enhance what you have"
                  body="Edit, reorganise, and layer to showcase your home at its bestwithout unnecessary excess."
                />
                <SolutionPoint
                  icon={LayoutPanelLeft}
                  title="Photo-ready detailing"
                  body="Vignettes and styling that translate beautifully on camera and in person."
                />
                <SolutionPoint
                  icon={StretchVertical}
                  title="Functional flow"
                  body="Right-size layouts that support daily living while guiding buyer movement."
                />
                <SolutionPoint
                  icon={Layers}
                  title="Soft upgrades"
                  body="Textiles, art, and dcor that lift the palette and create cohesion."
                />
              </div>
            </TabsContent>

            <TabsContent value="vacant" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <SolutionPoint
                  icon={Sofa}
                  title="Full furnishing"
                  body="Curated furniture and styling to define scale, purpose, and warmth."
                />
                <SolutionPoint
                  icon={House}
                  title="Buyer-first storytelling"
                  body="Each room tells a clear storymaking it effortless to imagine life there."
                />
                <SolutionPoint
                  icon={LayoutTemplate}
                  title="Architectural harmony"
                  body="Selections that complement your home's lines, light, and materials."
                />
                <SolutionPoint
                  icon={Wallpaper}
                  title="Neutral elegance"
                  body="A timeless palette with accents of colour to broaden appeal."
                />
              </div>
            </TabsContent>

            <TabsContent value="consult" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <SolutionPoint
                  icon={LayoutDashboard}
                  title="Pre-sale strategy"
                  body="Room-by-room recommendations prioritising impact, cost, and timing."
                />
                <SolutionPoint
                  icon={RockingChair}
                  title="Style direction"
                  body="Clarify your aesthetic and choose a direction that fits your architecture."
                />
                <SolutionPoint
                  icon={StretchVertical}
                  title="Scale and placement"
                  body="Proportions, sightlines, and pathways that feel effortless."
                />
                <SolutionPoint
                  icon={Wallpaper}
                  title="Materials and finishes"
                  body="Guidance on colour, textiles, and dcor to create cohesion."
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Background */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-semibold">Professional Background</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              With years of hands-on experience across renovations, furnishing, and property
              marketing, Stage Ready bridges design sensibility with what moves buyers. Our
              philosophy is simple: design with empathy, style with restraint, and let the story of
              the space lead the way.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-foreground" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Residential design and styling</p>
                  <p className="text-sm text-muted-foreground">
                    Apartments, family homes, and premium developments.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-foreground" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Real estate agent and developer partnerships</p>
                  <p className="text-sm text-muted-foreground">
                    Collaborative planning to align timelines, budgets, and marketing.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-foreground" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Trend-aware, locally tuned</p>
                  <p className="text-sm text-muted-foreground">
                    Informed by local buyer preferences and neighbourhood character.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-base sm:text-lg font-semibold">Our Values</h3>
            <dl className="mt-4 space-y-4">
              <ValueItem title="Simplicity">
                Remove the unnecessary so the essential stands out.
              </ValueItem>
              <ValueItem title="Consistency">
                Cohesive palettes and repeatable patterns that calm the eye.
              </ValueItem>
              <ValueItem title="Care">
                Respect for your time, investment, and the story of your home.
              </ValueItem>
              <ValueItem title="Integrity">
                Clear communication, thoughtful guidance, and reliable delivery.
              </ValueItem>
            </dl>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <div className="rounded-lg border bg-card p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-semibold">What Clients Say</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Building trust through thoughtful work and consistent results.
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-lg border bg-card p-6 flex flex-col gap-4"
                >
                  <TextQuote className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <blockquote className="text-sm text-foreground leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full border bg-secondary shrink-0">
                      <img
                        src={t.avatar}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">{t.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-12 w-full max-w-full rounded-lg border bg-card p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-semibold">Our Philosophy</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We believe the best spaces are honest, rooted in function, edited with care, and
                layered with meaning. We listen first, then shape rooms that support how you live and
                what you want to achieve. Every choice, from proportion to palette, is made to
                create harmony and help buyers connect emotionally.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-6 rounded-full bg-foreground/80" aria-hidden="true" />
                  <span className="min-w-0">
                    Detail-driven styling that reads beautifully in photos and in person.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-6 rounded-full bg-foreground/80" aria-hidden="true" />
                  <span className="min-w-0">Guidance that's clear, practical, and timeline-aware.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-6 rounded-full bg-foreground/80" aria-hidden="true" />
                  <span className="min-w-0">Neutral palettes with accents of colour for refined calm.</span>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-secondary">
              <img
                src="/images/tabletop-3.jpeg"
                alt="Styled tabletop with chains, a book, and a pot-plant."
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type SolutionPointProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  body: string
}

function SolutionPoint({ icon: Icon, title, body }: SolutionPointProps) {
  return (
    <div className="rounded-lg border bg-card p-5">
      <div className="flex items-start gap-4">
        <div className="rounded-md bg-secondary p-2 border">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  )
}

type ValueItemProps = {
  title: string
  children: React.ReactNode
}

function ValueItem({ title, children }: ValueItemProps) {
  return (
    <div className="rounded-md border bg-card p-4">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
        <div className="min-w-0">
          <dt className="text-sm font-semibold">{title}</dt>
          <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{children}</dd>
        </div>
      </div>
    </div>
  )
}
