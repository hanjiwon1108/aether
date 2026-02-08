import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/widgets/Hero/ui/Hero"), { ssr: true });
const Services = dynamic(() => import("@/widgets/Services/ui/Services"), {
  ssr: true,
});
const Showcase = dynamic(() => import("@/widgets/Showcase/ui/Showcase"), {
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center">
      Loading experiences...
    </div>
  ),
});
const Testimonials = dynamic(
  () => import("@/widgets/Testimonials/ui/Testimonials"),
  { ssr: true },
);
const Contact = dynamic(() => import("@/widgets/Contact/ui/Contact"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/widgets/Footer/ui/Footer"), {
  ssr: true,
});

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
