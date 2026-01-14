import { motion } from 'framer-motion';

const CodeLine = ({ line, children }: { line: number; children: React.ReactNode }) => (
    <div className="flex gap-4 text-sm md:text-base font-mono leading-relaxed">
        <span className="text-gray-600 select-none w-6 text-right">{line}</span>
        <div className="flex-1">{children}</div>
    </div>
);

const HeroCodeCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group perspective-1000"
        >
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

            {/* Card Container */}
            <div className="relative bg-[#0F111A] border border-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.01] hover:rotate-1">

                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1F2937]/50 border-b border-gray-800">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-xs text-gray-500 font-mono">joseph.tsx</span>
                    </div>
                </div>

                {/* Code Content */}
                <div className="p-6 overflow-hidden">
                    <CodeLine line={1}>
                        <span className="text-purple-400">const</span> <span className="text-yellow-400">Joseph</span> <span className="text-white">=</span> <span className="text-blue-400">new</span> <span className="text-green-400">CreativeDeveloper</span><span className="text-white">{'({'}</span>
                    </CodeLine>

                    <CodeLine line={2}>
                        <span className="pl-4 text-gray-400">passion:</span> <span className="text-orange-400">"frontend-excellence"</span><span className="text-white">,</span>
                    </CodeLine>

                    <CodeLine line={3}>
                        <span className="pl-4 text-gray-400">skills:</span> <span className="text-white">{'['}</span>
                    </CodeLine>

                    <CodeLine line={4}>
                        <span className="pl-8 text-green-300">"React"</span><span className="text-white">,</span> <span className="text-green-300">"Next.js"</span><span className="text-white">,</span> <span className="text-green-300">"TypeScript"</span>
                    </CodeLine>

                    <CodeLine line={5}>
                        <span className="pl-4 text-white">{'],'}</span>
                    </CodeLine>

                    <CodeLine line={6}>
                        <span className="pl-4 text-purple-400">hardWorker:</span> <span className="text-red-400">true</span><span className="text-white">,</span>
                    </CodeLine>

                    <CodeLine line={7}>
                        <span className="pl-4 text-purple-400">quickLearner:</span> <span className="text-red-400">true</span><span className="text-white">,</span>
                    </CodeLine>

                    <CodeLine line={8}>
                        <span className="pl-4 text-blue-400">code:</span> <span className="text-purple-400">async</span> <span className="text-white">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-white">{'{'}</span>
                    </CodeLine>

                    <CodeLine line={9}>
                        <span className="pl-8 text-cyan-400">await</span> <span className="text-yellow-400">buildingFuture</span><span className="text-white">();</span>
                    </CodeLine>

                    <CodeLine line={10}>
                        <span className="pl-4 text-white">{'}'}</span>
                    </CodeLine>

                    <CodeLine line={11}>
                        <span className="text-white">{'});'}</span>
                    </CodeLine>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroCodeCard;
