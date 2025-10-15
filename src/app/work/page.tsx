import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import OurWorkPage from "@/components/our-work-page";

export default function Page() {
  const brandStyle: React.CSSProperties = {
    "--color-logo-bg": "#000000",
    "--color-logo-icon": "#ffe3eb",
  } as React.CSSProperties;

  return (
    <div 
      className="min-h-dvh bg-background text-foreground flex flex-col"
      style={brandStyle}
    >
      <Navigation />
      <main className="flex-1">
        {/* add consistent vertical padding across interior pages */}
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 space-y-12 sm:space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">Our Work</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of beautifully staged homes that showcase our expertise in creating compelling spaces that tell a story.
            </p>
          </div>
          <OurWorkPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}