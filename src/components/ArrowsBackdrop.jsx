const arrowSvg = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
    <path d="M9 11l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
);

// Много мелких стрелочек вниз поверх текущего фона — намекают, что страницу нужно листать.
export default function ArrowsBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 text-[var(--text)]"
      style={{
        zIndex: -1,
        opacity: "var(--arrow-opacity)",
        backgroundImage: `url("data:image/svg+xml,${arrowSvg}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "52px 52px",
      }}
    />
  );
}
