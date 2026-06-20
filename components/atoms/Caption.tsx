interface CaptionProps {
  label: string;
  className?: string;
}

export function Caption({ label, className }: CaptionProps) {
  return (
    <span
      className={`block font-ui text-[11px] uppercase tracking-[0.2em] text-ink-muted ${className ?? ""}`}
    >
      {label}
    </span>
  );
}
