import { useEffect, useRef, useState } from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";
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
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const activeId = currentPath.match(/\/projects\/([^/]+)/)?.[1];

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as "dark" | "light") || "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

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
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-[760px] items-center gap-3 px-6 py-3.5 sm:gap-5">
        <a
          href="/"
          aria-label="Backspace home"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] border border-foreground text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
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
            className="mono-lbl inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 transition-colors hover:border-foreground"
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
                "border border-border bg-background p-3.5 transition-all duration-200",
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
                      "flex gap-3 p-3 transition-colors hover:bg-foreground hover:text-background",
                      activeId === p.id && "bg-muted",
                    )}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] text-sm font-bold text-white"
                      style={{ background: p.color }}
                    >
                      {p.letter}
                    </div>
                    <div>
                      <b className="block text-sm font-semibold">{p.name}</b>
                      <span className="block text-xs leading-snug opacity-70">{p.tagline}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mono-lbl hidden items-center gap-4 text-muted-foreground md:flex md:gap-[18px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "group relative whitespace-nowrap transition-colors hover:text-foreground",
                currentPath.startsWith(link.href) && link.href !== "#" && "text-foreground",
              )}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title="Toggle theme"
            className="plate-icon-btn h-7 w-7"
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>

          <a href="mailto:hello@backspace.company" className="plate-btn mono-lbl">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
