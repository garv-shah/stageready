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
        <HomePageSection />
      </main>

      <Footer />
    </div>
  );
}