"use client";

import { motion } from "framer-motion";
import Button from "@/shared/ui/Button";
import { useState } from "react";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setResponseMsg("Thanks for reaching out! We'll get back to you soon.");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setResponseMsg("Failed to send message. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm text-center py-16"
      >
        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
          ✓
        </div>
        <h3 className="text-3xl font-bold font-display mb-4 tracking-wider text-primary">
          Message Sent!
        </h3>
        <p className="text-muted-foreground text-lg mb-8">{responseMsg}</p>
        <Button onClick={() => setStatus("idle")}>Send Another Message</Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm relative"
    >
      {/* Loading Overlay */}
      {status === "loading" && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-3xl">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl">
          {responseMsg}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2 text-muted-foreground"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
          placeholder="John Doe"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-muted-foreground"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
          placeholder="john@example.com"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
          placeholder="Tell us about your vision..."
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
          disabled={status === "loading"}
        />
      </div>
      <Button type="submit" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </motion.form>
  );
}
