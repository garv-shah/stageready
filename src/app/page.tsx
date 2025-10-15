import Navigation from "@/components/navigation";
import HomePageSection from "@/components/home-page";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div
      className="min-h-dvh bg-background text-foreground flex flex-col"
      style={{
        ["--color-logo-bg" as any]: "#000000",
        ["--color-logo-icon" as any]: "#ffe3eb",
      }}
    >
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <HomePageSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}