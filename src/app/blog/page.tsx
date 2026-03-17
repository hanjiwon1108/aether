"use client";

import { motion } from "framer-motion";
import Card from "@/shared/ui/Card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Future of Web Interfaces: Beyond Screens",
    excerpt: "Exploring spatial computing and the next frontier of UI/UX design.",
    category: "Design",
    date: "Mar 24, 2026",
    image: "https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=2669&auto=format&fit=crop",
    slug: "future-of-web-interfaces"
  },
  {
    title: "Building Immersive Experiences with WebGL",
    excerpt: "How 3D rendering in the browser is changing the way we interact with brands.",
    category: "Development",
    date: "Feb 12, 2026",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    slug: "building-immersive-experiences"
  },
  {
    title: "Neon Branding: Cyberpunk Aesthetic is Back",
    excerpt: "An analysis of the resurgence of dark modes and glowing accents.",
    category: "Branding",
    date: "Jan 05, 2026",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    slug: "neon-branding-cyberpunk"
  },
  {
    title: "AI in Creative Agencies: Friend or Foe?",
    excerpt: "Navigating the landscape of generative AI in web design and copywriting.",
    category: "Insight",
    date: "Dec 18, 2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    slug: "ai-in-creative-agencies"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-8xl font-bold font-display mb-6">
          AGENCY <span className="text-accent">INSIGHTS</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Thoughts, perspectives, and transmissions from the digital frontier.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {posts.map((post) => (
          <motion.div key={post.slug} variants={itemVariants}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <Card className="h-full overflow-hidden hover:border-accent/50 transition-colors duration-500 flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-accent">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-sm border-accent/20 text-muted-foreground mb-3 block">
                    {post.date}
                  </span>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium mt-auto group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
