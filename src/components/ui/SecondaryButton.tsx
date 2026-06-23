interface SecondaryButtonProps {
  children: string;
  href: string;
  className?: string;
}

export function SecondaryButton({ 
  children, 
  href, 
  className = "" 
}: SecondaryButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-slate-500/70 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-[#00f0a8] hover:text-[#00f0a8] ${className}`}
    >
      {children}
    </a>
  );
}