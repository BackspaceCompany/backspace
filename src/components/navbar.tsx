import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Email", href: "mailto:hello@backspace.company" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "GitHub", href: "#" },
];

type NavbarProps = {
  currentPath: string;
};

export function Navbar({ currentPath }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const activeId = currentPath.match(/\/projects\/([^/]+)/)?.[1];

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    clearTimeout(closeTimer.current);
    setOpen(false);
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(closeMenu, 160);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [currentPath]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) closeMenu();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-[#fafafa]/88 backdrop-blur-md transition-colors",
        scrolled && "border-[#e6e6e6]",
      )}
    >
      <div className="mx-auto flex max-w-[760px] items-center gap-3 px-6 py-3.5 text-[13px] sm:gap-5">
        <a
          href="/"
          aria-label="Backspace home"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#111] text-sm font-bold text-[#fafafa] transition-transform hover:scale-95"
        >
          ⌫
        </a>

        <div
          ref={menuRef}
          className="relative shrink-0"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <button
            type="button"
            aria-expanded={open}
            aria-haspopup="true"
            onClick={() => (open ? closeMenu() : openMenu())}
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 font-medium transition-colors hover:bg-[#f0f0f0] sm:px-3"
          >
            Projects
            <ChevronDown className={cn("h-3 w-3 transition-transform", open && "rotate-180")} />
          </button>

          <div
            className={cn(
              "absolute left-0 top-full z-50 w-[min(520px,calc(100vw-48px))] pt-2",
              open ? "pointer-events-auto" : "pointer-events-none",
            )}
          >
            <div
              className={cn(
                "rounded-2xl border border-[#e6e6e6] bg-white p-3.5 shadow-[0_20px_48px_rgba(17,17,17,0.08)] transition-all duration-200",
                open
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-1 scale-[0.98] opacity-0",
              )}
              role="menu"
              aria-label="Projects"
              onMouseEnter={openMenu}
            >
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {projects.map((p) => (
                  <a
                    key={p.id}
                    href={p.href}
                    onClick={closeMenu}
                    className={cn(
                      "flex gap-3 rounded-xl p-3 transition-colors hover:bg-[#f0f0f0]",
                      activeId === p.id && "bg-[#f0f0f0]",
                    )}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] text-sm font-bold text-white"
                      style={{ background: p.color }}
                    >
                      {p.letter}
                    </div>
                    <div>
                      <b className="block text-sm font-semibold">{p.name}</b>
                      <span className="block text-xs leading-snug text-[#8a8a8a]">{p.tagline}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-4 text-[#8a8a8a] md:flex md:gap-[18px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "group relative whitespace-nowrap transition-colors hover:text-[#111]",
                currentPath.startsWith(link.href) && link.href !== "#" && "text-[#111]",
              )}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a
          href="mailto:hello@backspace.company"
          className="ml-auto shrink-0 rounded-full border border-[#111] px-3 py-1.5 text-[12px] font-medium transition-all hover:-translate-y-px hover:bg-[#111] hover:text-[#fafafa] hover:shadow-[0_6px_20px_rgba(17,17,17,0.12)] sm:px-4 sm:py-2 sm:text-[13px]"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
