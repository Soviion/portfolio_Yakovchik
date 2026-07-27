import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 220);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToProjects}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="puff-chip fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 px-4 py-2.5 text-xs font-medium text-[var(--text-soft)] shadow-lg"
          aria-label="Пролистать к проектам"
        >
          Мои проекты ниже
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
            className="flex"
          >
            <ChevronDown size={16} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
