interface SectionHeadingProps {
  label: string;
  title: string;
  text?: string;
}

export function SectionHeading({ label, title, text }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-[#00f0a8]">{label}</p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{text}</p>}
    </div>
  );
}