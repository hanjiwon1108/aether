"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  // Mock data fetching based on slug
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <main className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <Link href="/work" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Work
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 md:px-8 mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-8">
          {title}
        </h1>
        
        <div className="flex flex-wrap gap-8 text-sm md:text-base border-t border-b border-white/10 py-6">
          <div>
            <span className="text-muted-foreground block mb-1">Client</span>
            <span className="font-medium">Future Corp</span>
          </div>
          <div>
            <span className="text-muted-foreground block mb-1">Role</span>
            <span className="font-medium text-primary">Branding, Web Design</span>
          </div>
          <div>
            <span className="text-muted-foreground block mb-1">Year</span>
            <span className="font-medium">2025</span>
          </div>
          <div className="ml-auto flex items-center">
            <a href="#" className="inline-flex items-center hover:text-primary transition-colors">
              Visit Live Site <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full h-[60vh] md:h-[80vh] mb-24"
      >
        <Image
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 prose prose-invert prose-lg">
        <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
        <p className="text-muted-foreground mb-12 leading-relaxed">
          The client needed a complete digital transformation to match their innovative product lineup. The previous brand identity was outdated and didn&apos;t resonate with the new generation of cyberpunk-enthusiast consumers. The website was slow, clunky, and lacked the immersive feeling required to sell high-end futuristic hardware.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
        <p className="text-muted-foreground mb-12 leading-relaxed">
          We started by redefining the core visual language—injecting neon cyan and electric purple into a dark, deep-space canvas. Our engineering team rebuilt the platform from the ground up using Next.js and WebGL to create buttery smooth scrolling experiences and 3D product showcases that load instantly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Detail 1" fill className="object-cover" />
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="Detail 2" fill className="object-cover" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">The Result</h2>
        <p className="text-muted-foreground leading-relaxed">
          A truly immersive digital flagship store. Since launch, user engagement has increased by 300%, and the new branding has been recognized by industry leaders as a masterclass in modern neon aesthetics. The project not only met but exceeded the client&apos;s vision for the future of their brand.
        </p>
      </div>
    </main>
  );
}
