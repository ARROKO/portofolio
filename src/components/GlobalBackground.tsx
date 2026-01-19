"use client";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-transparent">
      {/* Grille ultra-subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      
      {/* Lueurs d'ambiance - Positionnées pour habiller les coins sans gêner la lecture */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] opacity-30 animate-pulse-slow delay-1000" />
      
      {/* Lueur centrale très légère pour faire ressortir le contenu */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-transparent to-[#030303] opacity-80" />
    </div>
  );
}
