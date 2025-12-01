import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Showcase from "@/components/sections/Showcase";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Showcase />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
