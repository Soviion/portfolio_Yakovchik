import { motion } from "framer-motion";
import { GraduationCap, Languages, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import profilePhoto from "../assets/photo/profile.jpg";

const spring = { type: "spring", stiffness: 120, damping: 16 };

const facts = [
  { icon: GraduationCap, label: "Образование", value: profile.education },
  {
    icon: Languages,
    label: "Языки",
    value: (
      <>
        Русский — родной
        <br />
        Английский — B1
      </>
    ),
  },
  { icon: MapPin, label: "Локация", value: profile.location },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-14 pb-10 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={spring}
        className="puff relative overflow-hidden p-6 md:p-10"
      >
        <div
          className="pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient)" }}
        />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-start">
          {/* Фото + факты под ним */}
          <div className="mx-auto w-full max-w-[16rem] shrink-0 md:mx-0 md:w-64">
            <motion.img
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0.1 }}
              src={profilePhoto}
              alt={profile.name}
              className="aspect-square w-full rounded-[1.5rem] border border-[var(--border)] object-cover shadow-[var(--shadow)]"
            />

            <div className="mt-4 flex flex-col gap-2.5">
              {facts.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...spring, delay: 0.2 + i * 0.08 }}
                  className="puff-chip flex items-start gap-2.5 px-3.5 py-2.5 text-left"
                >
                  <Icon size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-faint)]">
                      {label}
                    </div>
                    <div className="text-xs leading-snug text-[var(--text-soft)]">{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Имя, био, навыки, контакты */}
          <div className="min-w-0 flex-1 text-left">
            <h1 className="text-3xl font-bold tracking-tight text-[var(--text)] md:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-1.5 gradient-text text-lg font-semibold md:text-xl">
              {profile.role}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-[var(--text-soft)] md:text-[15px]">
              {profile.bio}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ ...spring, delay: 0.25 + i * 0.03 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="puff-chip px-3.5 py-1.5 text-xs font-medium text-[var(--text-soft)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {profile.contacts.map(({ label, href, icon: Icon }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: 0.45 + i * 0.06 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  className="puff-chip flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[var(--text-soft)] transition-colors hover:text-[var(--accent)]"
                >
                  <Icon size={15} className="shrink-0" />
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
