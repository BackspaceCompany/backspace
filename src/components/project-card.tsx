import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="border-t border-[#e6e6e6] first:border-t-0"
    >
      <Link
        to={project.href}
        className="group relative block rounded-lg px-3 py-[18px] -mx-3 transition-colors hover:bg-[#f0f0f0]"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] leading-snug">
              <span className="font-semibold">{project.name}</span>{" "}
              <span className="text-[#8a8a8a]">{project.cardLine ?? project.tagline}</span>
            </p>

            <motion.div
              initial={false}
              animate={{
                height: hovered ? "auto" : 0,
                opacity: hovered ? 1 : 0,
                marginTop: hovered ? 14 : 0,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="max-w-[560px] text-sm leading-relaxed text-[#8a8a8a]">{project.lead}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-[#8a8a8a]">
                <span>{project.role}</span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border border-[#e6e6e6] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${project.live ? "before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#0f7b4d]" : ""}`}
                >
                  {project.status}
                </span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#111]">
                View project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.div>
          </div>

          <div
            className="mt-0.5 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] text-sm font-bold text-white"
            style={{ background: project.color }}
          >
            {project.letter}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
