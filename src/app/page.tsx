import Hero from "@/components/hero";
import About from "@/components/about";
import Highlights from "@/components/highlights";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-charcoal">
      <Hero />
      <About />
      <Highlights />
      <Footer />
    </main>
  );
}