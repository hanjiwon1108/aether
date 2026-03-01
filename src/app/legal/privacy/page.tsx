"use client";
import { motion } from "framer-motion";

const sections = [
  { title: "Information We Collect", body: "We collect information you provide directly to us, such as when you fill out a form, contact us, or request our services. This includes names, email addresses, company names, and project details. We also collect usage data automatically through cookies and analytics tools." },
  { title: "How We Use Your Information", body: "We use collected data to respond to inquiries, deliver our services, improve our website, send relevant updates (when consented), and comply with legal obligations. We never sell your personal data to third parties." },
  { title: "Data Storage & Security", body: "Your data is stored on secure, encrypted servers. We implement industry-standard security measures including SSL encryption, regular security audits, and strict access controls. We retain your data only as long as necessary for the purposes outlined in this policy." },
  { title: "Cookies", body: "We use essential cookies to ensure our website functions correctly and analytics cookies (with your consent) to understand how visitors use our site. You can manage cookie preferences via our Cookie Settings." },
  { title: "Your Rights", body: "You have the right to access, correct, delete, or transfer your personal data. To exercise any of these rights, please contact us at privacy@aether.agency. We will respond within 30 days." },
  { title: "Contact", body: "For any privacy-related concerns, contact our Data Protection Officer at privacy@aether.agency or write to us at 123 Cyber Street, Nexus City, Earth." },
];

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className="text-sm text-primary mb-4">Last updated: March 4, 2026</p>
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-8">Privacy <span className="text-primary">Policy</span></h1>
        <p className="text-xl text-muted-foreground mb-16 leading-relaxed">At AETHER, your privacy is not a footnote — it&apos;s a foundation. This policy explains how we handle your data with transparency and care.</p>
      </motion.div>
      <div className="space-y-12">
        {sections.map((section, i) => (
          <motion.div key={section.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border-l-2 border-primary/30 pl-8">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{section.body}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
