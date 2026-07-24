import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageOff, ChevronLeft, ChevronRight } from "lucide-react";
import { resolveImage } from "../data/gallery";
import Lightbox from "./Lightbox";

const swipeThreshold = 60;
const spring = { type: "spring", stiffness: 300, damping: 32 };

export default function Carousel({ projectId, slides, accent, label }) {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const wasDragged = useRef(false);
  const count = slides.length;

  const go = (dir) => {
    setIndex(([current]) => [(current + dir + count) % count, dir]);
  };

  const goTo = (target) => {
    setIndex(([current]) => [target, target > current ? 1 : -1]);
  };

  const slide = slides[index];
  const src = resolveImage(projectId, slide.file);

  return (
    <div className="flex flex-col">
      <div className="group relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg-soft)]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.figure
            key={index}
            custom={direction}
            initial={{ x: direction >= 0 ? "104%" : "-104%", opacity: 0.4, scale: 0.96 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction >= 0 ? "-104%" : "104%", opacity: 0.4, scale: 0.96 }}
            transition={spring}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.55}
            onDragStart={() => {
              wasDragged.current = true;
            }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -swipeThreshold) go(1);
              else if (info.offset.x > swipeThreshold) go(-1);
            }}
            className="m-0 flex cursor-grab flex-col active:cursor-grabbing"
          >
            {src ? (
              <img
                src={src}
                alt={slide.caption || label}
                draggable={false}
                title="Открыть в полном размере"
                onClick={() => {
                  if (wasDragged.current) {
                    wasDragged.current = false;
                    return;
                  }
                  setLightboxOpen(true);
                }}
                className="max-h-[34rem] w-full cursor-zoom-in select-none object-contain"
              />
            ) : (
              <div
                className={`flex aspect-[2/1] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br ${accent}`}
              >
                <ImageOff size={30} className="text-white/80" />
                <span className="px-6 text-center text-sm font-medium text-white/90">
                  {label} · скрин {index + 1}/{count}
                </span>
                <span className="text-xs text-white/60">Скоро здесь будут скриншоты</span>
              </div>
            )}

            {slide.caption && (
              <figcaption className="min-h-[4.5rem] border-t border-[var(--border)] bg-[var(--surface-alt)] px-5 py-4 text-left text-sm leading-relaxed text-[var(--text-soft)]">
                {slide.caption}
              </figcaption>
            )}
          </motion.figure>
        </AnimatePresence>

        <motion.button
          type="button"
          aria-label="Предыдущий слайд"
          onClick={() => go(-1)}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className="puff-chip absolute left-3 top-[calc(50%-2.5rem)] flex h-10 w-10 items-center justify-center text-[var(--text)] opacity-80 transition-opacity hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </motion.button>
        <motion.button
          type="button"
          aria-label="Следующий слайд"
          onClick={() => go(1)}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className="puff-chip absolute right-3 top-[calc(50%-2.5rem)] flex h-10 w-10 items-center justify-center text-[var(--text)] opacity-80 transition-opacity hover:opacity-100"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            onClick={() => goTo(i)}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.85 }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-[var(--accent)]"
                : "w-2.5 bg-[var(--border-strong)] hover:bg-[var(--accent)]/60"
            }`}
          />
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        src={src}
        caption={slide.caption}
        counter={`${index + 1} / ${count}`}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
      />
    </div>
  );
}
