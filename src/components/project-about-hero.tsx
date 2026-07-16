import { motion } from "framer-motion";
import { iconMap, type InlineSegment, type Project } from "@/data/projects";

function InlineIcon({ icon, color }: { icon: string; color: string }) {
  const Icon = iconMap[icon];
  if (!Icon) return null;

  return (
    <span
      className="mx-0.5 inline-flex h-7 w-7 translate-y-0.5 items-center justify-center rounded-md align-middle md:h-8 md:w-8"
      style={{ backgroundColor: color }}
    >
      <Icon className="h-3.5 w-3.5 text-white md:h-4 md:w-4" strokeWidth={2.2} />
    </span>
  );
}

function RichParagraph({
  segments,
  className,
}: {
  segments: InlineSegment[];
  className?: string;
}) {
  return (
    <p className={className}>
      {segments.map((segment, i) =>
        segment.type === "text" ? (
          <span key={i}>{segment.value}</span>
        ) : (
          <InlineIcon key={i} icon={segment.icon} color={segment.color} />
        ),
      )}
    </p>
  );
}

function TrustedLogoCell({ name, icon }: { name: string; icon: string }) {
  const Icon = iconMap[icon];
  if (!Icon) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-5 text-muted-foreground">
      <Icon className="h-5 w-5" strokeWidth={1.5} />
      <span className="text-sm font-medium tracking-tight">{name}</span>
    </div>
  );
}

type ProjectAboutHeroProps = {
  project: Project;
};

export function ProjectAboutHero({ project }: ProjectAboutHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-border pb-10 pt-12 md:pb-12 md:pt-16"
      aria-label={`About ${project.name}`}
    >
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: project.color }}
          aria-hidden="true"
        />
        About {project.name}
      </div>

      <RichParagraph
        segments={project.about.paragraph1}
        className="mb-6 text-[24px] font-normal leading-[1.35] tracking-[-0.3px] text-foreground md:text-[30px]"
      />

      <RichParagraph
        segments={project.about.paragraph2}
        className="mb-10 text-[18px] font-normal leading-[1.4] tracking-[-0.2px] text-muted-foreground md:text-[22px]"
      />

      <div className="border border-border bg-card">
        <p className="border-b border-border py-5 text-center text-sm text-muted-foreground">
          {project.about.trustedLabel}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4">
          {project.about.trustedBy.map((logo, index) => (
            <div
              key={logo.name}
              className={[
                "border-border",
                index % 2 === 0 ? "border-r" : "",
                index < 2 ? "border-b sm:border-b-0" : "",
                index < 3 ? "sm:border-r" : "",
              ].join(" ")}
            >
              <TrustedLogoCell name={logo.name} icon={logo.icon} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
