import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AboutPage from "@/components/about-page";

export default function Page() {
  const inlineStyle: React.CSSProperties = {
    "--color-logo-bg": "#000000",
    "--color-logo-icon": "#ffe3eb"
  } as React.CSSProperties;

  return (
    <div className="min-h-dvh bg-background text-foreground flex flex-col" style={inlineStyle}>
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 space-y-8 sm:space-y-10">
          <section className="text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold">About Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Transforming spaces into stories that sell. We create compelling, market-ready homes that captivate buyers and maximise value.
            </p>
          </section>
          <AboutPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}