import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectBannerProps = {
  project: Project;
  index: number;
};

export function ProjectBanner({ project, index }: ProjectBannerProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group mb-4 overflow-hidden rounded-2xl border border-[#e6e6e6] bg-[#111] shadow-[0_8px_30px_rgba(17,17,17,0.04)]"
    >
      <motion.div
        animate={{ height: hovered ? 220 : 148 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-h-[148px] flex-col sm:flex-row"
      >
        <motion.div
          animate={{ flex: hovered ? "0.46 0 0%" : "0.34 0 0%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[120px] shrink-0 overflow-hidden sm:min-h-0"
        >
          <motion.img
            src={project.image}
            alt=""
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/30" />
        </motion.div>

        <div className="flex min-w-0 flex-1 flex-col justify-between p-5 sm:p-6">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/50">
              {project.bannerLabel}
            </p>
            <h3 className="text-xl font-semibold tracking-[-0.3px] text-white sm:text-2xl">
              {project.name}
            </h3>
            <motion.p
              animate={{ opacity: hovered ? 1 : 0.72 }}
              transition={{ duration: 0.35 }}
              className="mt-2 max-w-md text-sm leading-relaxed text-white/65 line-clamp-2 sm:line-clamp-none"
            >
              {project.lead}
            </motion.p>
          </div>

          <Link
            to={project.href}
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-[#f0f0f0] px-4 py-2 text-sm font-medium text-[#111] transition-colors hover:bg-white"
          >
            View project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
}
