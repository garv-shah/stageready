"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"



const DEFAULT_PROJECTS = [
  "/images/dining-room-4.jpg",
  "/images/living-room-2.jpg",
  "/images/dining-room-5.jpg",
  "/images/living-room-5.jpg",
  "/images/kitchen-9.jpg",
  "/images/doorway.jpg",
  "/images/kitchen-7.jpg",
  "/images/bedroom-6.jpg",
  // "/images/bedroom-7.jpg",
  "/images/bedroom-9.jpg",
  "/images/tabletop-2.jpg",
  "/images/tabletop.jpg",
  "/images/bathroom.jpg",
  "/images/bathroom-2.jpg",
  "/images/bathroom-3.jpg",
  "/images/bathroom-7.jpg",
]

export interface OurWorkPageProps {
  className?: string
  style?: React.CSSProperties
}

export default function OurWorkPage({
  className,
  style: styleProp,
}: OurWorkPageProps) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null)

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProjectIndex === null) return
    setSelectedProjectIndex((prev) =>
      prev === null ? null : (prev + 1) % DEFAULT_PROJECTS.length
    )
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProjectIndex === null) return
    setSelectedProjectIndex((prev) =>
      prev === null ? null : (prev - 1 + DEFAULT_PROJECTS.length) % DEFAULT_PROJECTS.length
    )
  }

  const selectedProject = selectedProjectIndex !== null ? DEFAULT_PROJECTS[selectedProjectIndex] : null

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {DEFAULT_PROJECTS.map((image, index) => (
            <div
              key={image}
              onClick={() => setSelectedProjectIndex(index)}
              className="group cursor-pointer relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary shadow-sm transition-all hover:shadow-md"
            >
              <img
                src={image}
                alt="Gallery image"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

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
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProjectIndex(null)}>
        <DialogContent className="max-w-5xl w-[95vw] h-auto max-h-[95vh] p-0 border-none bg-transparent shadow-none focus:outline-none">
          <DialogTitle className="sr-only">
            Project Image
          </DialogTitle>
          <DialogDescription className="sr-only">
            Image from our portfolio
          </DialogDescription>

          {selectedProject && (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Main Image Container */}
              <div className="relative bg-background/5 rounded-lg overflow-hidden shadow-2xl max-h-[85vh] w-auto mx-auto">
                <img
                  src={selectedProject}
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


            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
