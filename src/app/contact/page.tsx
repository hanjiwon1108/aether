import Contact from "@/widgets/Contact/ui/Contact";

export default function ContactPage() {
  return (
    <main className="pt-20 min-h-screen">
      <Contact />
      
      {/* Optional: Add a map or extra agency details here later if needed */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">HQ</h3>
            <p className="text-muted-foreground">123 Cyber Street, Nexus City<br/>Sector 7G, Earth</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Inquiries</h3>
            <p className="text-muted-foreground">hello@aether.agency<br/>careers@aether.agency</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Comm</h3>
            <p className="text-muted-foreground">+1 (800) 555-0199<br/>@aether_agency</p>
          </div>
        </div>
      </section>
    </main>
  );
}
