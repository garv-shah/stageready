import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BookConsultPage from "@/components/book-consult-page";

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
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">Book a Consult</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Schedule your consultation today and discover how we can transform your space into a market-ready masterpiece with our expert staging services.
            </p>
          </div>
          <BookConsultPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}