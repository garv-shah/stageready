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

type StyleType = "rustic" | "contemporary" | "coastal" | "organic" | "modern" | "luxury" | "elegant"
type PropertyType = "apartment" | "single-family" | "townhouse" | "condo" | "luxury" | "cottage"

export type Project = {
  id: string
  title: string
  propertyType: PropertyType
  style: StyleType
  beforeImage: string // Keeping type for compatibility, though not used in grid
  afterImage: string
  description: string
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: "r1",
    title: "Warm Rustic Revival",
    propertyType: "single-family",
    style: "rustic",
    beforeImage: "/images/rustic-living-room-2.jpg",
    afterImage: "/images/rustic-living-room-1.jpg",
    description: "Transformed a dated living area into a warm, textural retreat.",
  },
  {
    id: "c2",
    title: "Contemporary Clarity",
    propertyType: "condo",
    style: "contemporary",
    beforeImage: "/images/contemporary-living-room-2.jpg",
    afterImage: "/images/contemporary-living-room-1.jpg",
    description: "Sleek condo elevated with clean lines and balanced contrasts.",
  },
  {
    id: "co3",
    title: "Calm Coastal Light",
    propertyType: "luxury",
    style: "coastal",
    beforeImage: "/images/cozy-living-room-2.jpg",
    afterImage: "/images/cozy-living-room-1.jpg",
    description: "Breezy layers and natural textures bringing coastal sensibility.",
  },
  {
    id: "o4",
    title: "Organic Ease",
    propertyType: "townhouse",
    style: "organic",
    beforeImage: "/images/modern-living-room-2.jpg",
    afterImage: "/images/modern-living-room-1.jpg",
    description: "Mindful, nature-forward palette with rounded forms.",
  },
  {
    id: "r5",
    title: "Refined Rustic Loft",
    propertyType: "apartment",
    style: "rustic",
    beforeImage: "/images/rustic-kitchen-1.jpg",
    afterImage: "/images/rustic-dining-room-1.jpg",
    description: "Exposed textures grounded by elegant accents.",
  },
  {
    id: "co6",
    title: "Soft Coastal Townhome",
    propertyType: "townhouse",
    style: "coastal",
    beforeImage: "/images/cozy-kitchen-1.jpg",
    afterImage: "/images/cozy-kitchen-2.jpg",
    description: "Sunlight-forward styling with breathable fabrics.",
  },
  {
    id: "eb7",
    title: "Elegant Master Suite",
    propertyType: "luxury",
    style: "elegant",
    beforeImage: "/images/elegant-bedroom-1.jpg", // Placeholder
    afterImage: "/images/elegant-bedroom-1.jpg",
    description: "Sophisticated comfort with premium textiles.",
  },
  {
    id: "lb8",
    title: "Luxury Spa Bath",
    propertyType: "luxury",
    style: "luxury",
    beforeImage: "/images/luxury-bathroom-1.jpg", // Placeholder
    afterImage: "/images/luxury-bathroom-1.jpg",
    description: "High-end finishes highlighted by minimal styling.",
  },
  {
    id: "mk9",
    title: "Modern Culinary Space",
    propertyType: "single-family",
    style: "modern",
    beforeImage: "/images/modern-kitchen-1.jpg", // Placeholder
    afterImage: "/images/modern-kitchen-1.jpg",
    description: "Clean functionality meeting modern aesthetic.",
  },
  {
    id: "cd10",
    title: "Contemporary Dining",
    propertyType: "condo",
    style: "contemporary",
    beforeImage: "/images/contemporary-dining-1.jpg", // Placeholder
    afterImage: "/images/contemporary-dining-1.jpg",
    description: "Intimate dining setting with statement lighting.",
  },
  {
    id: "el11",
    title: "Elegant Living",
    propertyType: "single-family",
    style: "elegant",
    beforeImage: "/images/elegant-living-room-1.jpg", // Placeholder
    afterImage: "/images/elegant-living-room-1.jpg",
    description: "Timeless elegance for the discerning buyer.",
  },
  {
    id: "lk12",
    title: "Luxury Gourmet Kitchen",
    propertyType: "luxury",
    style: "luxury",
    beforeImage: "/images/luxury-kitchen-1.jpg", // Placeholder
    afterImage: "/images/luxury-kitchen-1.jpg",
    description: "Where culinary dreams meet design excellence.",
  },
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
          {DEFAULT_PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProjectIndex(index)}
              className="group cursor-pointer relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary shadow-sm transition-all hover:shadow-md"
            >
              <img
                src={project.afterImage}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-medium text-lg">{project.title}</p>
                  <p className="text-sm text-white/80">{project.propertyType}</p>
                </div>
              </div>
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
              {selectedProject?.title}
           </DialogTitle>
           <DialogDescription className="sr-only">
              {selectedProject?.description}
           </DialogDescription>
           
          {selectedProject && (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Main Image Container */}
              <div className="relative bg-background/5 rounded-lg overflow-hidden shadow-2xl max-h-[85vh] w-auto mx-auto">
                 <img
                  src={selectedProject.afterImage}
                  alt={selectedProject.title}
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

              {/* Caption */}
              <div className="mt-4 text-center text-white drop-shadow-md">
                 <h3 className="text-lg font-semibold">{selectedProject.title}</h3>
                 <p className="text-sm text-white/80">{selectedProject.propertyType} • {selectedProject.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
