import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function CompanyLogos() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-[#e6e6e6] py-10"
      aria-label="Ventures"
    >
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.12em] text-[#8a8a8a]">
        Our ventures
      </p>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <Link
              to={project.href}
              className="group flex flex-col items-center gap-3 text-center transition-transform hover:-translate-y-0.5"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white transition-shadow group-hover:shadow-[0_8px_24px_rgba(17,17,17,0.08)]"
                style={{ background: project.color }}
              >
                {project.letter}
              </div>
              <span className="text-xs font-medium text-[#8a8a8a] transition-colors group-hover:text-[#111]">
                {project.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
