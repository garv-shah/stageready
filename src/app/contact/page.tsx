import { Metadata } from "next"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Contact Us - Stage Ready",
  description: "Get in touch with Stage Ready for all your home staging needs in Melbourne. We're here to help.",
};
import Footer from "@/components/footer";
import ContactPage from "@/components/contact-page";

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
          <section className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Get in touch with our home staging experts. We're here to help you create stunning spaces that sell.
            </p>
          </section>
          <ContactPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}