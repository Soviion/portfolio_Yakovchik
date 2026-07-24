import { Send, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";

export const profile = {
  name: "Яковчик Алексей",
  role: "Fullstack системный-бизнес аналитик",
  age: "20 лет",
  location: "Минск, Беларусь",
  education: "БГУИР · Автоматизированные системы обработки информации",
  bio: "Более года практического опыта full-stack разработки и системного анализа в сферах банкинга, EdTech и администрирования корпоративных ИТ-систем. Проектирую архитектуру (C4, ERD, REST API/OpenAPI), интегрирую внешние системы и AI-агентов (LLM tool calling), работаю с PostgreSQL, Docker и Linux-инфраструктурой.",
  skills: [
    "Python",
    "TypeScript / JS",
    "React",
    "Node.js / Express",
    "PostgreSQL",
    "MS SQL Server",
    "Docker",
    "REST API / OpenAPI",
    "FastAPI",
    "Flask",
    "Prisma ORM",
    "Redis",
    "Kafka",
    "Ollama / LLM tool calling",
    "Linux",
  ],
  contacts: [
    { label: "GitHub", href: "https://github.com/Soviion", icon: GithubIcon },
    { label: "LinkedIn", href: "https://clck.ru/3R2oXY", icon: LinkedinIcon },
    { label: "Telegram", href: "https://t.me/Foggislimm", icon: Send },
    { label: "Email", href: "mailto:alexeyyakovchik09@gmail.com", icon: Mail },
    { label: "Телефон", href: "tel:+375447457242", icon: Phone },
  ],
  footerPhone: "+375 (44) 74-57-242",
};
