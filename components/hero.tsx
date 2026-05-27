"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground mb-8"
          >
            <Code2 size={16} className="text-primary" />
            <span>Developpeur Freelance</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl"
          >
            <span className="text-foreground">Crafting </span>
            <span className="text-primary italic">polished</span>
            <span className="text-foreground"> web experiences</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
          >
            Je transforme vos idees en applications web et mobiles performantes.
            Expertise React, Next.js et technologies modernes pour des projets
            sur mesure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <a href="#contact" className="gap-2">
                Demarrer un projet
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">Voir mes services</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Code snippet decoration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="rounded-xl bg-card border border-border overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/30 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">
                app.tsx
              </span>
            </div>
            <pre className="p-6 text-sm font-mono overflow-x-auto">
              <code>
                <span className="text-muted-foreground">{"// "}</span>
                <span className="text-primary">
                  Votre prochain projet commence ici
                </span>
                {"\n"}
                <span className="text-blue-400">export default</span>{" "}
                <span className="text-yellow-400">function</span>{" "}
                <span className="text-green-400">App</span>
                {"() {"}
                {"\n"}
                {"  "}
                <span className="text-blue-400">return</span> {"<"}
                <span className="text-primary">Success</span>
                {" />"};{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
