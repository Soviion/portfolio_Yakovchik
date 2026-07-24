import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-10 pb-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-left text-2xl font-bold tracking-tight text-[var(--text)] md:text-3xl"
      >
        Мои <span className="gradient-text">проекты</span>
      </motion.h2>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
