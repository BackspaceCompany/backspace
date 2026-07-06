import { motion } from "framer-motion";

export function QuoteBlock() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 mt-0 border border-[#e6e6e6] bg-white px-6 py-10 md:px-10 md:py-12"
      aria-label="Studio belief"
    >
      <div className="relative">
        <span
          className="pointer-events-none absolute -left-3 -top-3 h-3 w-3 border-l-2 border-t-2 border-[#e04545] md:-left-4 md:-top-4 md:h-4 md:w-4"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -right-3 -top-3 h-3 w-3 border-r-2 border-t-2 border-[#e04545] md:-right-4 md:-top-4 md:h-4 md:w-4"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-3 -left-3 h-3 w-3 border-b-2 border-l-2 border-[#e04545] md:-bottom-4 md:-left-4 md:h-4 md:w-4"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-3 -right-3 h-3 w-3 border-b-2 border-r-2 border-[#e04545] md:-bottom-4 md:-right-4 md:h-4 md:w-4"
          aria-hidden="true"
        />

        <p className="mb-5 text-sm font-medium tracking-wide text-[#e04545]">I believe</p>

        <blockquote className="max-w-[620px] text-[20px] leading-[1.45] tracking-[-0.2px] text-[#111] md:text-[24px]">
          &ldquo;Building for{" "}
          <strong className="font-semibold">informal commerce</strong> means systems that work{" "}
          <strong className="font-semibold">offline</strong> first &mdash; because{" "}
          <strong className="font-semibold">trust</strong> is earned at the counter, not in the
          cloud&hellip;&rdquo;
        </blockquote>
      </div>
    </motion.section>
  );
}
