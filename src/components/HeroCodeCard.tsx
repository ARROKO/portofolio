"use client";

import { motion } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";

const codeString = `const Excellence = {
  Beauté: "L'Harmonie",
  Élégance: "La Finesse",
  Simplicité: "La Pureté"
};

// Viser l'Exceptionnel`;

const HeroCodeCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative group w-full max-w-[340px] mx-auto"
    >
      {/* Glow discret et sophistiqué */}
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan-500/20 via-white/10 to-purple-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-1000" />

      {/* Card Body */}
      <div className="relative bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Header minimaliste */}
        <div className="flex items-center gap-1.5 px-5 py-4 border-b border-white/5 bg-white/[0.02]">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
            Manifesto
          </span>
        </div>

        {/* Code Area */}
        <div className="p-8 font-mono text-sm leading-relaxed tracking-tight">
          <Highlight theme={themes.vsDark} code={codeString} language="typescript">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={{ ...style, background: "transparent" }}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>

        {/* Bottom Detail */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-30" />
      </div>
    </motion.div>
  );
};

export default HeroCodeCard;
