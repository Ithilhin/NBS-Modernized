"use client";

import { motion } from "framer-motion";

const techStack = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  Mobile: ["React Native", "Expo"],
  Backend: ["Node.js", "Express", "Prisma", "PostgreSQL"],
  CMS: ["Strapi", "Sanity", "WordPress"],
  Tools: ["Git", "Vercel", "Figma", "VS Code"],
};

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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function TechStack() {
  return (
    <section id="stack" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm text-primary font-medium tracking-wide uppercase">
            Technologies
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Stack technique
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            Les outils et technologies que j&apos;utilise pour construire des
            applications modernes et performantes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(techStack).map(([category, techs]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-secondary border border-border rounded-md hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
