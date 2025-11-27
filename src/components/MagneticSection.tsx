import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MagneticSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const cards = cardsRef.current;

        if (!section || !text || !cards) return;

        // Parallax effect for the text
        gsap.fromTo(
            text,
            { y: 100, opacity: 0 },
            {
                y: -50,
                opacity: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'center center',
                    scrub: 1,
                },
            }
        );

        // Magnetic/Floating effect for cards
        const cardElements = cards.children;
        Array.from(cardElements).forEach((card, index) => {
            const speed = 0.5 + index * 0.2;

            gsap.to(card, {
                y: -100 * speed,
                rotation: index % 2 === 0 ? 5 : -5,
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-[80vh] flex flex-col items-center justify-center py-20 overflow-hidden relative"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

            <h2
                ref={textRef}
                className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-20 text-center z-10"
            >
                ANTIGRAVITY
            </h2>

            <div
                ref={cardsRef}
                className="flex flex-wrap justify-center gap-8 w-full max-w-6xl px-4"
            >
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="w-full md:w-80 h-96 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transform transition-transform hover:scale-105 duration-300"
                    >
                        <div className="h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4" />
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Feature {i}</h3>
                                <p className="text-gray-400">
                                    Défilement fluide et animations magnétiques pour une expérience immersive.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MagneticSection;
