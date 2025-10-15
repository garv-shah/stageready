"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Instagram, PhoneCall, Contact, MapPin, Copyright, LayoutTemplate } from "lucide-react"
import * as React from "react"

type NavLink = { label: string; href: string }
type SocialLinks = { instagram?: string }

export interface FooterProps {
  className?: string
  companyName?: string
  phone?: string
  email?: string
  addressLines?: string[]
  social?: SocialLinks
  navLinks?: NavLink[]
  legalLinks?: NavLink[]
  year?: number
}

const DEFAULT_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
]

const DEFAULT_LEGAL: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
]

export default function Footer({
  className,
  companyName = "Stage Ready",
  phone = "0447 856 645",
  email = "info@stageready.com.au",
  addressLines = ["Melbourne, Victoria"],
  social = { instagram: "https://www.instagram.com/stage_ready_property" },
  navLinks = DEFAULT_NAV,
  legalLinks = DEFAULT_LEGAL,
  year = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer
      role="contentinfo"
      className={cn(
        "w-full bg-card text-foreground border-t",
        // spacing intentionally generous to align with site rhythm
        className
      )}
    >
      <div className="container mx-auto w-full max-w-7xl py-10 sm:py-12">
        <div className="flex w-full flex-col gap-8 sm:gap-10">
          {/* Brand row */}
          <div className="flex w-full flex-wrap items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--color-logo-bg)]"
              >
                <LayoutTemplate
                  className="h-5 w-5 text-[var(--color-logo-icon)]"
                  strokeWidth={2}
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold leading-tight sm:text-lg">
                  {companyName}
                </p>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Premium Home Staging & Melbourne
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {social?.instagram ? (
                <Link
                  href={social.instagram}
                  aria-label="Stage Ready on Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-card transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Contact */}
            <div className="min-w-0">
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-foreground">
                Contact
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex min-w-0 items-start gap-3">
                  <PhoneCall className="mt-0.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <Link
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="min-w-0 text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="truncate">{phone}</span>
                  </Link>
                </li>
                <li className="flex min-w-0 items-start gap-3">
                  <Contact className="mt-0.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <Link
                    href={`mailto:${email}`}
                    className="min-w-0 break-words text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {email}
                  </Link>
                </li>
                {addressLines?.length ? (
                  <li className="flex min-w-0 items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <address className="not-italic text-muted-foreground">
                      {addressLines.map((line, idx) => (
                        <div key={idx} className="min-w-0 break-words">
                          {line}
                        </div>
                      ))}
                    </address>
                  </li>
                ) : null}
              </ul>
            </div>

            {/* Quick links */}
            <nav aria-label="Footer navigation" className="min-w-0">
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-foreground">
                Quick links
              </h3>
              <ul className="grid grid-cols-1 gap-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href} className="min-w-0">
                    <Link
                      href={link.href}
                      className="text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Legal */}
            <div className="min-w-0">
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-foreground">
                Legal
              </h3>
              <ul className="grid grid-cols-1 gap-2 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.href} className="min-w-0">
                    <Link
                      href={link.href}
                      className="text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t pt-6">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Copyright className="h-4 w-4" aria-hidden="true" />
                <span>
                  {year} {companyName}. All rights reserved.
                </span>
              </p>

              <p className="text-xs text-muted-foreground">
                ABN 82 261 640 847 - Website crafted with care by Garv Shah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}