"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  Palette,
  Zap,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Applications Web",
    description:
      "Sites vitrines, applications SaaS, et plateformes e-commerce avec React et Next.js.",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description:
      "Applications iOS et Android avec React Native pour une experience native.",
  },
  {
    icon: Database,
    title: "Integration CMS",
    description:
      "Connexion a vos systemes existants: Strapi, Sanity, Contentful, WordPress.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces modernes et intuitives avec attention aux details et accessibilite.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimisation pour des temps de chargement rapides et une experience fluide.",
  },
  {
    icon: Shield,
    title: "Maintenance",
    description:
      "Support continu, mises a jour de securite et evolution de vos applications.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm text-primary font-medium tracking-wide uppercase">
            Services
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Ce que je fais
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            Des solutions techniques adaptees a vos besoins, du concept a la
            mise en production.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
