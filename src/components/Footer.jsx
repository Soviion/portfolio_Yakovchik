import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-6 text-center text-sm text-[var(--text-faint)]">
        <span className="font-medium text-[var(--text-soft)]">{profile.name}</span>
        <span>
          © {new Date().getFullYear()} · {profile.footerPhone}
        </span>
      </div>
    </footer>
  );
}
