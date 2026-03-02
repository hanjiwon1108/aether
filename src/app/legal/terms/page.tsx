"use client";
import { motion } from "framer-motion";

const sections = [
  { title: "1. Acceptance of Terms", body: "By accessing or using any AETHER service, website, or product, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services." },
  { title: "2. Description of Services", body: "AETHER provides creative agency services including branding, web design, development, digital strategy, and motion design. Specific deliverables, timelines, and payment terms are defined in individual project contracts." },
  { title: "3. Client Responsibilities", body: "Clients are responsible for providing accurate information, timely feedback, and required assets. Delays caused by the client may affect project timelines and additional costs may apply." },
  { title: "4. Intellectual Property", body: "Upon final payment, clients receive full ownership of the agreed-upon deliverables. AETHER retains the right to showcase completed work in our portfolio unless otherwise agreed in writing." },
  { title: "5. Payment Terms", body: "All projects require a minimum 50% deposit before work commences. Final deliverables are released upon receipt of full payment. Late payments may incur a 1.5% monthly interest fee." },
  { title: "6. Limitation of Liability", body: "AETHER will not be liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the total fees paid for the specific project." },
  { title: "7. Governing Law", body: "These terms are governed by the laws of the State of New York. Any disputes shall be resolved through binding arbitration." },
];

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="text-sm text-secondary mb-4">Last updated: March 4, 2026</p>
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-8">Terms of <span className="text-secondary">Service</span></h1>
        <p className="text-xl text-muted-foreground mb-16 leading-relaxed">These terms set the foundation for our working relationship. Clear expectations, mutual respect.</p>
      </motion.div>
      <div className="space-y-12">
        {sections.map((section, i) => (
          <motion.div key={section.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border-l-2 border-secondary/30 pl-8">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{section.body}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
