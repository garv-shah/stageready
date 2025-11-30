import { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServicesPage from "@/components/services-page"

export const metadata: Metadata = {
  title: "Our Services - Stage Ready",
  description: "Explore our range of home staging services, from partial styling to full property makeovers.",
}

export default function Page() {
  return (
    <div
      className="min-h-dvh bg-background text-foreground flex flex-col"
      style={
        {
          "--color-logo-bg": "#000000",
          "--color-logo-icon": "#ffe3eb"
        } as React.CSSProperties
      }
    >
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 space-y-12 sm:space-y-16">
          <section className="space-y-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold">Our Services</h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Discover how we transform properties into compelling spaces that sell faster and for more.
            </p>
          </section>
          <ServicesPage />
        </div>
      </main>
      <Footer />
    </div>
  )
}