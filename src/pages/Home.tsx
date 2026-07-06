import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { CompanyLogos } from "@/components/company-logos";
import { ProjectCard } from "@/components/project-card";
import { QuoteBlock } from "@/components/quote-block";
import { SiteFooter } from "@/components/site-footer";

export function Home() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-[760px] px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[640px] pb-10 pt-16 text-[22px] leading-[1.5] tracking-[-0.2px] md:pb-12 md:pt-[64px]"
        >
          <span className="mr-0.5 inline-flex h-[26px] w-[26px] -translate-y-1 items-center justify-center rounded-[7px] bg-[#111] text-[15px] font-bold text-[#fafafa]">
            ⌫
          </span>{" "}
          backspace is a venture studio by Charles-Emmanuel Ebagnitchie.{" "}
          <span className="text-[#8a8a8a]">
            building data, commerce and AI products — currently focused on
          </span>{" "}
          Claveira{" "}
          <span className="text-[#8a8a8a]">and</span> Akaragi
          <span className="text-[#8a8a8a]">.</span>
        </motion.p>

        <QuoteBlock />

        <section className="border-t border-[#e6e6e6] pb-2 pt-2" aria-label="Projects">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>

        <CompanyLogos />
        <SiteFooter />
      </div>
    </main>
  );
}
