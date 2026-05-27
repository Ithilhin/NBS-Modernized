import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-semibold tracking-tight">
              <span className="text-primary">Nuit Blanche</span>{" "}
              <span className="text-muted-foreground">Software</span>
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              Developpement web & mobile sur mesure
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://malt.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              Malt
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Nuit Blanche Software. Tous droits
            reserves.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Mentions legales
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Politique de confidentialite
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
