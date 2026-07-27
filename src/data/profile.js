import { Send, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";

export const profile = {
  name: "Яковчик Алексей",
  role: "Системный / бизнес-аналитик",
  location: "Минск, Беларусь",
  education: "БГУИР · Автоматизированные системы обработки информации",
  bio: "Системный и бизнес-анализ полного цикла: сбор и формализация требований (user stories, use cases), проектирование архитектуры решений (C4 Level 2/3), моделирование данных (ERD, DDL-миграции) и бизнес-процессов (BPMN, UML), спецификации REST API по OpenAPI 3.0, проектирование интеграционных слоёв с retry-политиками и circuit breaker. Более года практики в банкинге, EdTech и госсекторе. Сильная инженерная база: самостоятельно реализую full-stack решения и интегрирую AI-агентов (LLM tool calling) — понимаю, как спроектированное воплощается в коде.",
  skills: [
    "Анализ требований · US / UC",
    "BPMN / UML",
    "C4-архитектура",
    "ERD / модели данных",
    "REST API / OpenAPI 3.0",
    "SQL · PostgreSQL / MS SQL",
    "Интеграции · Kafka / gRPC",
    "Jira / Confluence",
    "Figma / прототипирование",
    "Python",
    "TypeScript / JS",
    "React",
    "Node.js / Express",
    "FastAPI / Flask",
    "Docker / Linux",
    "Ollama / LLM tool calling",
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
