"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Mock data
const getPostData = (slug: string) => {
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return {
    title,
    date: "March 24, 2026",
    category: "Design",
    image: "https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=2669&auto=format&fit=crop",
    content: `
      Introduction
      The way we interact with digital spaces is undergoing a profound transformation. As spatial computing matures and augmented reality finally finds its footing outside of gaming, web interfaces are no longer confined to 2D glowing rectangles. We are stepping into an era where the web is something we inhabit, not just look at.

      The Death of the Scrolling Feed
      For two decades, the scrolling feed has dominated internet consumption. It's efficient, yes, but it completely ignores how humans naturally process information spatially. When elements exist with depth, occlusion, and genuine physical presence, cognitive load shifts. Our brains are built to navigate spaces, not endless vertical arrays of dopamine-driven content.

      What This Means for Agencies
      Creative agencies must evolve from flat-canvas thinking to architectural thinking. Web designers are becoming digital architects. Every button is an object, every navigation menu a physical movement constraint. To thrive in this new environment, understanding 3D space, lighting, and physics is no longer optional for frontend developers—it is the new baseline.
    `
  };
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getPostData(slug);

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8 mb-8">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 text-sm text-accent mb-6 font-medium tracking-widest uppercase">
            <span>{post.category}</span>
            <span className="text-white/30">•</span>
            <span className="text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
            {post.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="prose prose-invert prose-lg prose-accent mx-auto">
          {post.content.split('\n\n').map((paragraph, index) => {
            const isHeading = paragraph.trim().split('\n').length === 1 && paragraph.trim().length < 50 && !paragraph.includes(".");
            if (isHeading) {
              return <h2 key={index} className="text-2xl font-bold mt-12 mb-6 text-white">{paragraph.trim()}</h2>;
            }
            return <p key={index} className="text-muted-foreground leading-relaxed mb-6">{paragraph.trim()}</p>;
          })}
        </div>
      </article>
    </main>
  );
}
