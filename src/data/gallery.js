// Скриншоты проектов: складывай файлы в src/assets/projects/<id проекта>/<имя>.png
// Имена файлов должны совпадать с полем `file` в слайдах проекта (projects.js).
// Пока файла нет — сайт показывает стилизованную заглушку, ничего не ломается.
const modules = import.meta.glob(
  "../assets/projects/**/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

export function resolveImage(projectId, file) {
  if (!file) return null;
  for (const [path, url] of Object.entries(modules)) {
    if (path.includes(`/projects/${projectId}/`) && path.endsWith(`/${file}`)) {
      return url;
    }
  }
  return null;
}
