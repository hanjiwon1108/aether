import Hero from "@/widgets/Hero/ui/Hero";
import Services from "@/widgets/Services/ui/Services";
import Showcase from "@/widgets/Showcase/ui/Showcase";
import Testimonials from "@/widgets/Testimonials/ui/Testimonials";
import Contact from "@/widgets/Contact/ui/Contact";
import Footer from "@/widgets/Footer/ui/Footer";

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
