import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getProject } from "@/data/projects";
import { ProjectAboutHero } from "@/components/project-about-hero";
import { SiteFooter } from "@/components/site-footer";

export function ProjectPage() {
  const { id } = useParams();
  const project = id ? getProject(id) : undefined;

  if (!project) return <Navigate to="/" replace />;

  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-[760px] px-6">
        <ProjectAboutHero project={project} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 border-b border-[#e6e6e6] py-8"
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
            style={{ background: project.color }}
          >
            {project.letter}
          </div>
          <div>
            <p className="text-[13px] text-[#8a8a8a]">{project.role}</p>
            <p className="text-sm font-medium">
              {project.name}
              <span
                className={`ml-2 inline-flex items-center gap-1 rounded-full border border-[#e6e6e6] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#8a8a8a] ${project.live ? "before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#0f7b4d]" : ""}`}
              >
                {project.status}
              </span>
            </p>
          </div>
        </motion.div>

        <section className="border-b border-[#e6e6e6] py-10">
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8a]">
            Roadmap
          </h2>
          <p className="max-w-[560px] italic text-[#8a8a8a]">
            Milestones and timeline will go here — you&apos;ll define the roadmap for {project.name} next.
          </p>
        </section>

        <section className="py-10">
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8a]">
            Work in progress
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-[#e6e6e6] bg-gradient-to-br from-white to-[#f2f2f2] text-xs uppercase tracking-wide text-[#8a8a8a] sm:col-span-2 sm:aspect-[21/9]">
              preview
            </div>
          </div>
          <Link
            to="/"
            className="mt-8 inline-block text-sm text-[#8a8a8a] transition-colors hover:text-[#111]"
          >
            ← Back to studio
          </Link>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
