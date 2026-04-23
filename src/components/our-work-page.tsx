"use client"

import React, { useState, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X, ChevronDown, MapPin, ImageIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

/* ──────────────────────── Suburb Data ──────────────────────── */

interface SuburbData {
  name: string
  slug: string
  images: string[]
}

const SUBURBS: SuburbData[] = [
  {
    name: "Clyde",
    slug: "clyde",
    images: [
      "/images/clyde/DJI_20260315194154_0458_D.jpg",
      "/images/clyde/IMG_7528.jpg",
      "/images/clyde/IMG_7533.jpg",
      "/images/clyde/IMG_7545.jpg",
      "/images/clyde/IMG_7550.jpg",
      "/images/clyde/IMG_7555.jpg",
      "/images/clyde/IMG_7560.jpg",
      "/images/clyde/IMG_7566.jpg",
      "/images/clyde/IMG_7571.jpg",
      "/images/clyde/IMG_7576.jpg",
      "/images/clyde/IMG_7586.jpg",
      "/images/clyde/IMG_7591.jpg",
      "/images/clyde/IMG_7596.jpg",
      "/images/clyde/IMG_7601.jpg",
      "/images/clyde/IMG_7617.jpg",
      "/images/clyde/IMG_7622.jpg",
      "/images/clyde/IMG_7636.jpg",
      "/images/clyde/IMG_7641.jpg",
      "/images/clyde/IMG_7647.jpg",
      "/images/clyde/IMG_7653.jpg",
      "/images/clyde/IMG_7662.jpg",
    ],
  },
  {
    name: "Hampton Park",
    slug: "hampton-park",
    images: [
      "/images/hampton-park/DJI_20260320194625_0734_D_DECLUTTER.jpg",
      "/images/hampton-park/IMG_2309.jpg",
      "/images/hampton-park/IMG_9748.jpg",
      "/images/hampton-park/IMG_9763.jpg",
      "/images/hampton-park/IMG_9768.jpg",
      "/images/hampton-park/IMG_9783.jpg",
      "/images/hampton-park/IMG_9803.jpg",
      "/images/hampton-park/IMG_9808.jpg",
      "/images/hampton-park/IMG_9813.jpg",
      "/images/hampton-park/IMG_9818.jpg",
      "/images/hampton-park/IMG_9823.jpg",
      "/images/hampton-park/IMG_9828.jpg",
      "/images/hampton-park/IMG_9834.jpg",
    ],
  },
  {
    name: "Noble Park",
    slug: "noble-park",
    images: [
      "/images/noble-park/0M9A8462.jpg",
      "/images/noble-park/0M9A8472.jpg",
      "/images/noble-park/0M9A8492.jpg",
      "/images/noble-park/0M9A8502.jpg",
      "/images/noble-park/0M9A8517.jpg",
      "/images/noble-park/0M9A8527.jpg",
      "/images/noble-park/0M9A8532.jpg",
      "/images/noble-park/0M9A8542.jpg",
      "/images/noble-park/0M9A8552.jpg",
      "/images/noble-park/0M9A8563.jpg",
      "/images/noble-park/0M9A8568.jpg",
      "/images/noble-park/0M9A8575.jpg",
      "/images/noble-park/DJI_20260119205736_0659_D.jpg",
      "/images/noble-park/DJI_20260223201541_0793_D_TWILIGHT.jpg",
      "/images/noble-park/IMG_1157.jpg",
      "/images/noble-park/IMG_1162.jpg",
      "/images/noble-park/IMG_1167.jpg",
      "/images/noble-park/IMG_1177.jpg",
      "/images/noble-park/IMG_1187.jpg",
      "/images/noble-park/IMG_1197.jpg",
      "/images/noble-park/IMG_1202.jpg",
      "/images/noble-park/IMG_1212.jpg",
      "/images/noble-park/IMG_1217.jpg",
      "/images/noble-park/IMG_1222.jpg",
      "/images/noble-park/IMG_1227.jpg",
      "/images/noble-park/IMG_1271_TWILIGHT_DECLUTTER.jpg",
      "/images/noble-park/IMG_1284_TWILIGHT.jpg",
      "/images/noble-park/IMG_1290_TWILIGHT.jpg",
    ],
  },
  {
    name: "Rowville",
    slug: "rowville",
    images: [
      "/images/rowville/23 Monbulk Crescent, Rowville_001.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_002.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_003.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_004.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_005.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_006.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_007.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_008.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_009.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_010.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_011.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_012.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_013.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_014.jpg",
      "/images/rowville/23 Monbulk Crescent, Rowville_015.jpg",
    ],
  },
  {
    name: "Springvale",
    slug: "springvale",
    images: [
      "/images/springvale/0M9A8477.JPG",
      "/images/springvale/0M9A8492.JPG",
      "/images/springvale/0M9A8497.JPG",
      "/images/springvale/0M9A8502.JPG",
      "/images/springvale/0M9A8512.JPG",
      "/images/springvale/0M9A8542.JPG",
      "/images/springvale/0M9A8558.JPG",
      "/images/springvale/0M9A8563.JPG",
      "/images/springvale/0M9A8568.JPG",
      "/images/springvale/0M9A8590.JPG",
      "/images/springvale/backyard-2.jpg",
      "/images/springvale/backyard.jpg",
      "/images/springvale/bathroom-2.jpg",
      "/images/springvale/bathroom-3.jpg",
      "/images/springvale/bathroom-4.jpg",
      "/images/springvale/bathroom-5.jpg",
      "/images/springvale/bathroom-6.jpg",
      "/images/springvale/bathroom-7.jpg",
      "/images/springvale/bathroom.jpg",
      "/images/springvale/bedroom-10.jpg",
      "/images/springvale/bedroom-2.jpg",
      "/images/springvale/bedroom-3.jpg",
      "/images/springvale/bedroom-4.jpg",
      "/images/springvale/bedroom-5.jpg",
      "/images/springvale/bedroom-6.jpg",
      "/images/springvale/bedroom-7.jpg",
      "/images/springvale/bedroom-8.jpg",
      "/images/springvale/bedroom-9.jpg",
      "/images/springvale/bedroom.jpg",
      "/images/springvale/dining-room-2.jpg",
      "/images/springvale/dining-room-3.jpg",
      "/images/springvale/dining-room-4.jpg",
      "/images/springvale/dining-room-5.jpg",
      "/images/springvale/dining-room-6.jpg",
      "/images/springvale/dining-room-7.jpg",
      "/images/springvale/dining-room-8.jpg",
      "/images/springvale/dining-room.jpg",
      "/images/springvale/doorway.jpg",
      "/images/springvale/kitchen-2.jpg",
      "/images/springvale/kitchen-3.jpg",
      "/images/springvale/kitchen-4.jpg",
      "/images/springvale/kitchen-5.jpg",
      "/images/springvale/kitchen-6.jpg",
      "/images/springvale/kitchen-7.jpg",
      "/images/springvale/kitchen-8.jpg",
      "/images/springvale/kitchen-9.jpg",
      "/images/springvale/kitchen.jpg",
      "/images/springvale/laundry.jpg",
      "/images/springvale/living-room-10.jpg",
      "/images/springvale/living-room-11.jpg",
      "/images/springvale/living-room-2.jpg",
      "/images/springvale/living-room-3.jpg",
      "/images/springvale/living-room-4.jpg",
      "/images/springvale/living-room-5.jpg",
      "/images/springvale/living-room-6.jpg",
      "/images/springvale/living-room-7.jpg",
      "/images/springvale/living-room-8.jpg",
      "/images/springvale/living-room-9.jpg",
      "/images/springvale/living-room.jpg",
      "/images/springvale/tabletop-2.jpg",
      "/images/springvale/tabletop.jpg",
    ],
  },
]

/* Flatten all images for lightbox navigation */
const ALL_IMAGES = SUBURBS.flatMap((s) => s.images)

/* ──────────────────────── Component ──────────────────────── */

export interface OurWorkPageProps {
  className?: string
  style?: React.CSSProperties
}

export default function OurWorkPage({
  className,
  style: styleProp,
}: OurWorkPageProps) {
  const [openSuburbs, setOpenSuburbs] = useState<Set<string>>(new Set())
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const toggleSuburb = useCallback((slug: string) => {
    setOpenSuburbs((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) {
        next.delete(slug)
      } else {
        next.add(slug)
      }
      return next
    })
  }, [])

  const openLightbox = useCallback((image: string) => {
    const idx = ALL_IMAGES.indexOf(image)
    setSelectedImageIndex(idx >= 0 ? idx : null)
  }, [])

  const goNext = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev + 1) % ALL_IMAGES.length
    )
  }, [])

  const goPrev = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev - 1 + ALL_IMAGES.length) % ALL_IMAGES.length
    )
  }, [])

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    goNext()
  }, [goNext])

  const handlePrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    goPrev()
  }, [goPrev])

  /* Keyboard navigation for the lightbox */
  useEffect(() => {
    if (selectedImageIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault()
        goNext()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        goPrev()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageIndex, goNext, goPrev])

  const selectedImage =
    selectedImageIndex !== null ? ALL_IMAGES[selectedImageIndex] : null

  return (
    <section
      className={cn(
        "w-full max-w-full bg-background text-foreground overflow-x-hidden",
        className
      )}
      style={styleProp}
      aria-label="Our work portfolio"
    >
      <div className="w-full max-w-full space-y-6">
        {SUBURBS.map((suburb) => {
          const isOpen = openSuburbs.has(suburb.slug)
          const previewImages = suburb.images.slice(0, 4)

          return (
            <div
              key={suburb.slug}
              className="rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-border"
              style={{
                boxShadow: isOpen
                  ? "0 4px 24px rgba(0,0,0,0.08)"
                  : "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              {/* Suburb Accordion Header */}
              <button
                onClick={() => toggleSuburb(suburb.slug)}
                className="w-full flex items-center gap-4 sm:gap-5 p-4 sm:p-5 text-left cursor-pointer group transition-colors hover:bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
                aria-expanded={isOpen}
                aria-controls={`suburb-gallery-${suburb.slug}`}
                id={`suburb-trigger-${suburb.slug}`}
              >
                {/* Preview Thumbnails */}
                <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                  {previewImages.map((img, i) => (
                    <div
                      key={img}
                      className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg overflow-hidden bg-secondary shadow-sm ring-1 ring-black/5"
                      style={{
                        opacity: 1 - i * 0.15,
                      }}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                  {suburb.images.length > 4 && (
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-secondary/80 flex items-center justify-center text-xs font-medium text-muted-foreground ring-1 ring-black/5">
                      +{suburb.images.length - 4}
                    </div>
                  )}
                </div>

                {/* Mobile Preview - single thumbnail */}
                <div className="sm:hidden shrink-0">
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-secondary shadow-sm ring-1 ring-black/5">
                    <img
                      src={previewImages[0]}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Suburb Name & Count */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                    <h2 className="text-lg sm:text-xl font-semibold truncate">
                      {suburb.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <ImageIcon className="w-3.5 h-3.5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      {suburb.images.length} photos
                    </p>
                  </div>
                </div>

                {/* Chevron */}
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Expanded Gallery */}
              <div
                id={`suburb-gallery-${suburb.slug}`}
                role="region"
                aria-labelledby={`suburb-trigger-${suburb.slug}`}
                className={cn(
                  "grid transition-all duration-500 ease-in-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-4 sm:px-5 pb-5 pt-1">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                      {suburb.images.map((image) => (
                        <div
                          key={image}
                          onClick={() => openLightbox(image)}
                          className="group cursor-pointer relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary shadow-sm transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-primary/20"
                        >
                          <img
                            src={image}
                            alt={`Staged property in ${suburb.name}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Footer Call to Action */}
        <div className="mt-16 border-t pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">Ready to elevate your listing?</h2>
              <p className="text-muted-foreground mt-1">
                We tailor staging to your buyer profile, property type, and story.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/book">
                <Button className="bg-primary text-primary-foreground" size="lg">
                  Book a consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">View services</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImageIndex(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-auto max-h-[95vh] p-0 border-none bg-transparent shadow-none focus:outline-none">
          <DialogTitle className="sr-only">
            Project Image
          </DialogTitle>
          <DialogDescription className="sr-only">
            Image from our portfolio
          </DialogDescription>

          {selectedImage && (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Main Image Container */}
              <div className="relative bg-background/5 rounded-lg overflow-hidden shadow-2xl max-h-[85vh] w-auto mx-auto">
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                />

                {/* Navigation Overlay */}
                <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-4 pointer-events-none">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70 border-none pointer-events-auto backdrop-blur-sm"
                    onClick={handlePrev}
                  >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Previous image</span>
                  </Button>

                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70 border-none pointer-events-auto backdrop-blur-sm"
                    onClick={handleNext}
                  >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Next image</span>
                  </Button>
                </div>

                {/* Close Button */}
                <DialogClose className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none pointer-events-auto backdrop-blur-sm transition-colors">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </div>

              {/* Image counter */}
              <div className="mt-3 px-4 py-1.5 rounded-full bg-black/60 text-white text-sm backdrop-blur-sm">
                {(selectedImageIndex ?? 0) + 1} / {ALL_IMAGES.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
