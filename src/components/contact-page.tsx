"use client"

import * as React from "react"
import Image from "next/image"
import { toast } from "sonner"
import { Phone, PhoneCall, ContactRound, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type ContactPageProps = {
  className?: string
  style?: React.CSSProperties
  defaultValues?: {
    name?: string
    email?: string
    phone?: string
    service?: "consultation" | "vacant" | "occupied" | "re-design" | "other"
    message?: string
  }
}

export default function ContactPage({
  className,
  style,
  defaultValues,
}: ContactPageProps) {
  const [submitting, setSubmitting] = React.useState(false)
  const [service, setService] = React.useState<
    "consultation" | "vacant" | "occupied" | "re-design" | "other" | undefined
  >(defaultValues?.service)

  const formRef = React.useRef<HTMLFormElement | null>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return
    const form = e.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get("name") || "").trim()
    const email = String(formData.get("email") || "").trim()
    const phone = String(formData.get("phone") || "").trim()
    const message = String(formData.get("message") || "").trim()

    if (!name || !email || !message) {
      toast.error("Please fill in your name, email, and message.")
      return
    }

    setSubmitting(true)

    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false)
      toast.success("Thank you! We'll be in touch shortly.")
      formRef.current?.reset()
      setService(undefined)
    }, 1200)
  }

  const rootClasses = ["w-full max-w-full", className].filter(Boolean).join(" ")

  return (
    <section className={rootClasses} style={style} aria-label="Contact Stage Ready">
      <div className="w-full max-w-full space-y-10">
        {/* Header / Intro */}
        <div className="w-full max-w-full space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">
            <span className="inline-flex h-2 w-2 rounded-full bg-foreground/70" aria-hidden />
            We'd love to hear about your project
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight break-words">
            Contact Stage Ready
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-prose">
            Tell us about your property and goals. We'll respond promptly with next steps and availability.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="tel:+61447856645"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Call Stage Ready"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:-rotate-6" aria-hidden />
              Call us
            </a>
            <a
              href="mailto:info@stageready.com.au"
              className="group inline-flex items-center gap-2 rounded-md bg-card px-4 py-2 text-foreground ring-1 ring-inset ring-border transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Email Stage Ready"
            >
              <ContactRound className="h-4 w-4" aria-hidden />
              Email us
            </a>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {/* Sidebar: Contact details, hours, areas */}
          <div className="space-y-6 md:space-y-8 lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <Card className="bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">Contact details</CardTitle>
                  <CardDescription>Reach us directly by phone or email.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="tel:+61447856645"
                    className="group flex items-start gap-3 rounded-md px-3 py-2 ring-1 ring-inset ring-border transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="rounded-md bg-secondary p-2 text-foreground">
                      <Phone className="h-4 w-4" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">
                        0447 856 645
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@stageready.com.au"
                    className="group flex items-start gap-3 rounded-md px-3 py-2 ring-1 ring-inset ring-border transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="rounded-md bg-secondary p-2 text-foreground">
                      <ContactRound className="h-4 w-4" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-sm text-muted-foreground break-words">
                        info@stageready.com.au
                      </div>
                    </div>
                  </a>

                  {/* <div className="flex items-start gap-3 rounded-md px-3 py-2 ring-1 ring-inset ring-border">
                    <div className="rounded-md bg-secondary p-2 text-foreground">
                      <MapPin className="h-4 w-4" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium">Studio</div>
                      <div className="text-sm text-muted-foreground">
                        By appointment only  Melbourne, Victoria
                      </div>
                    </div>
                  </div> */}
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">Business hours</CardTitle>
                  <CardDescription>We aim to reply within one business day.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Mon - Fri</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader className="pb-0">
                  <CardTitle className="text-base sm:text-lg">Service areas</CardTitle>
                  <CardDescription>We frequently serve these Melbourne areas:</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                      Inner East
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                      South Eastern Suburbs
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                      Bayside
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Not on the list? We often travel! Reach out and we'll do our best to accommodate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Map / Location image */}
        {/* <Card className="bg-card overflow-hidden">
          <CardHeader className="pb-0">
            <CardTitle className="text-base sm:text-lg">Where we work</CardTitle>
            <CardDescription>Serving Melbourne and surrounding communities.</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="relative w-full overflow-hidden rounded-md ring-1 ring-inset ring-border">
              <Image
                src="/images/luxury-living-room.jpg"
                alt="Aerial view of Melbourne representing our service area"
                width={1600}
                height={900}
                priority={false}
                className="h-auto w-full max-w-full"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Meetings at our studio are by appointment. Virtual consultations are also available.
            </p>
          </CardContent>
        </Card> */}
      </div>
    </section>
  )
}