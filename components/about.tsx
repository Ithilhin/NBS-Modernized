"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-primary font-medium tracking-wide uppercase">
              A propos
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Building polished software and web experiences
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Developpeur freelance passionne par la creation
                d&apos;experiences digitales qui font la difference. Je me
                specialise dans les technologies modernes du web pour livrer des
                solutions performantes et maintenables.
              </p>
              <p>
                Mon approche combine expertise technique et attention aux
                details pour garantir des resultats qui depassent les attentes.
                Chaque projet est une opportunite de creer quelque chose
                d&apos;exceptionnel.
              </p>
              <p>
                Base a Paris, je travaille avec des clients partout en France et
                a l&apos;international, toujours avec le meme engagement envers
                la qualite et la satisfaction client.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "5+", label: "Annees d'experience" },
              { number: "50+", label: "Projets livres" },
              { number: "100%", label: "Clients satisfaits" },
              { number: "24h", label: "Temps de reponse" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
