export function Logo() {
  return (
    <a href="#topo" className="flex items-center gap-3" aria-label="KazolaGlow">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-[#00f0a8]/35 bg-[#00f0a8]/10 shadow-[0_0_22px_rgba(0,240,168,0.18)]">
        <span className="absolute h-3 w-3 rounded-full bg-[#facc15] shadow-[0_0_16px_rgba(250,204,21,0.7)]" />
        <span className="relative text-lg font-black text-[#00f0a8]">K</span>
      </span>
      <span>
        <span className="block text-lg font-black tracking-tight text-white">KazolaGlow</span>
        <span className="block text-[11px] text-slate-400">Joga com dados, não com sorte</span>
      </span>
    </a>
  );
}