import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-charcoal">
      <Hero />
      <About />
    </main>
  );
}