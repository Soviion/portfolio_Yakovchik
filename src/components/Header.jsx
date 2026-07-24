import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Переключить тему"
          className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={theme}
              initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
}
