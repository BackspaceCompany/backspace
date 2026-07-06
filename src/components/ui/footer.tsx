import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 10,
    },
  },
};

const backgroundVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const footerSections = [
  {
    title: "Projects",
    links: projects.map((p) => ({ label: p.name, href: p.href })),
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "/" },
      { label: "Contact", href: "mailto:hello@backspace.company" },
      { label: "Paris", href: "/" },
      { label: "Abidjan", href: "/" },
    ],
  },
  {
    title: "Claveira",
    links: [
      { label: "Overview", href: "/projects/claveira" },
      { label: "Roadmap", href: "/projects/claveira" },
      { label: "claveira.com", href: "https://claveira.com" },
    ],
  },
  {
    title: "Akaragi",
    links: [
      { label: "Overview", href: "/projects/akaragi" },
      { label: "Roadmap", href: "/projects/akaragi" },
      { label: "akaragi.com", href: "https://akaragi.com" },
    ],
  },
];

const socialLinks = [
  { href: "#", label: "X", icon: "X" },
  { href: "#", label: "GitHub", icon: <Github className="h-3.5 w-3.5 md:h-4 md:w-4" /> },
  { href: "#", label: "LinkedIn", icon: <Linkedin className="h-3.5 w-3.5 md:h-4 md:w-4" /> },
];

function NavSection({
  title,
  links,
  index,
}: {
  title: string;
  links: { label: string; href: string }[];
  index: number;
}) {
  return (
    <motion.div variants={itemVariants} custom={index} className="flex flex-col gap-2">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
        className="mb-2 border-b border-border pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors duration-300 hover:text-foreground"
      >
        {title}
      </motion.h3>
      {links.map((link, linkIndex) => {
        const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto:");
        const className =
          "group relative text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground md:text-sm";

        const content = (
          <span className="relative">
            {link.label}
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </span>
        );

        return (
          <motion.div key={`${title}-${link.label}`} variants={linkVariants} custom={linkIndex}>
            {isExternal ? (
              <a href={link.href} className={className} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                {content}
              </a>
            ) : (
              <Link to={link.href} className={className}>
                {content}
              </Link>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function SocialLink({
  href,
  label,
  icon,
  index,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  index: number;
}) {
  return (
    <motion.a
      variants={socialVariants}
      custom={index}
      href={href}
      aria-label={label}
      whileHover={{
        scale: 1.2,
        rotate: 12,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      whileTap={{ scale: 0.9 }}
      className="group flex h-6 w-6 items-center justify-center rounded-full bg-muted transition-colors duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary md:h-8 md:w-8"
    >
      <span className="text-xs font-bold text-muted-foreground group-hover:text-primary-foreground md:text-sm">
        {icon}
      </span>
    </motion.a>
  );
}

export default function StickyFooter() {
  return (
    <div className="dark-footer">
      <div className="h-[35vh]" aria-hidden="true" />
      <div className="sticky bottom-0 z-10 min-h-[70vh]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          variants={containerVariants}
          className="relative flex min-h-[70vh] w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-card via-muted to-card/90 px-4 py-6 md:px-12 md:py-12"
        >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

            <motion.div
              variants={backgroundVariants}
              className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl md:h-96 md:w-96"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              variants={backgroundVariants}
              className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/5 blur-3xl md:h-96 md:w-96"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <motion.div variants={containerVariants} className="relative z-10">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12 lg:gap-20">
                {footerSections.map((section, index) => (
                  <NavSection key={section.title} title={section.title} links={section.links} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mt-6 flex flex-col gap-4 md:mt-6 md:flex-row md:items-end md:justify-between md:gap-6"
            >
              <div className="flex-1">
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="cursor-default font-serif text-[12vw] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-foreground via-muted-foreground to-foreground/60 md:text-[10vw] lg:text-[8vw] xl:text-[6vw]"
                >
                  Backspace
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "auto" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="mt-3 flex items-center gap-3 md:mt-4 md:gap-4"
                >
                  <motion.div
                    className="h-0.5 w-8 bg-gradient-to-r from-primary to-secondary md:w-12"
                    animate={{ scaleX: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground md:text-sm"
                  >
                    venture studio · Paris · Abidjan
                  </motion.p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-left md:text-right"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="mb-2 text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground md:mb-3 md:text-sm"
                >
                  © 2024–2026 Backspace®
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, staggerChildren: 0.1 }}
                  className="flex gap-2 md:gap-3"
                >
                  {socialLinks.map((social, index) => (
                    <SocialLink
                      key={social.label}
                      href={social.href}
                      label={social.label}
                      icon={social.icon}
                      index={index}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
    </div>
  );
}
