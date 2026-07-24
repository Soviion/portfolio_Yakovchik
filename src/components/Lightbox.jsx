import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ open, src, caption, counter, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onPrev, onNext]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-md md:p-8"
        >
          <motion.img
            key={src}
            src={src}
            alt={caption || ""}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
          />

          {caption && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/85"
            >
              {caption}
            </motion.p>
          )}

          <span className="mt-2 text-xs font-medium text-white/50">{counter}</span>

          <button
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            aria-label="Предыдущий"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 md:left-6"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            aria-label="Следующий"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 md:right-6"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
