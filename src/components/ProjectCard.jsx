import { motion } from "framer-motion";
import { Building2, Calendar, UserRound, Send, ArrowUpRight } from "lucide-react";
import Carousel from "./Carousel";

const spring = { type: "spring", stiffness: 120, damping: 18 };

export default function ProjectCard({ project }) {
  const slides =
    project.gallery ??
    Array.from({ length: project.slides ?? 4 }, () => ({ file: null, caption: null }));

  return (
    <motion.article
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={spring}
      whileHover={{ y: -6 }}
      className="puff overflow-hidden p-6 md:p-9"
    >
      {/* Заголовок и описание проекта */}
      <div className="text-left">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-[var(--text-faint)]">
          <span className="flex items-center gap-1.5">
            <Building2 size={13} />
            {project.org}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {project.period}
          </span>
          <span className="flex items-center gap-1.5">
            <UserRound size={13} />
            {project.role}
          </span>
        </div>

        <h3 className="mt-3 text-xl font-bold tracking-tight text-[var(--text)] md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
          {project.field}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--text-soft)] md:text-[15px]">
          {project.summary}
        </p>

        <ul className="mt-5 grid gap-x-8 gap-y-2 md:grid-cols-2">
          {project.responsibilities.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm text-[var(--text-soft)]">
              <span
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: "var(--gradient)" }}
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="puff-chip px-3 py-1.5 text-xs font-medium text-[var(--text-soft)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.links?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map(({ label, href, note }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 rounded-full py-2.5 pl-3.5 pr-5 text-sm font-semibold text-white shadow-lg"
                style={{ background: "var(--gradient)" }}
              >
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Send size={15} />
                  <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-white/60 bg-emerald-400" />
                  </span>
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="flex items-center gap-1">
                    {label}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                  {note && (
                    <span className="text-[11px] font-normal text-white/75">{note}</span>
                  )}
                </span>
              </motion.a>
            ))}
          </div>
        )}
      </div>

      {/* Галерея: слайд = скриншот + его описание */}
      <div className="mt-7">
        <Carousel
          projectId={project.id}
          slides={slides}
          accent={project.accent}
          label={project.title}
        />
      </div>
    </motion.article>
  );
}
