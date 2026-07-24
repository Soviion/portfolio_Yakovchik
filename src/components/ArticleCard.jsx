import { motion } from "framer-motion";
import { FileText, Download, Scale } from "lucide-react";

const topics = [
  "Сбор и согласие",
  "Хранение и шифрование",
  "Сетевая безопасность",
  "Права субъекта данных",
  "Закон РБ №99-З",
];

export default function ArticleCard() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        whileHover={{ y: -4 }}
        className="puff relative overflow-hidden p-6 md:p-8"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="puff-chip flex h-16 w-16 shrink-0 items-center justify-center !rounded-2xl">
            <FileText size={28} className="text-[var(--accent)]" />
          </div>

          <div className="min-w-0 flex-1 text-left">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[var(--text-faint)]">
              <Scale size={13} />
              Статья · 21 стр.
            </div>
            <h2 className="mt-1 text-lg font-bold text-[var(--text)] md:text-xl">
              Требования к ПО при обработке персональных данных
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">
              Практическое руководство по техническим, организационным и правовым
              требованиям к сбору, хранению и передаче перс. данных — на основе
              законодательства Республики Беларусь (Закон №99-З, Приказ ОАЦ №66)
              и стандартов OWASP.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="puff-chip px-3 py-1 text-xs font-medium text-[var(--text-soft)]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <motion.a
            href="/docs/trebovaniya-pd.pdf"
            download
            whileHover={{ scale: 1.07, y: -3 }}
            whileTap={{ scale: 0.94 }}
            className="group flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg"
            style={{ background: "var(--gradient)" }}
          >
            <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
            Скачать PDF
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
