import { useEffect } from 'react';
import { quantum } from 'ldrs';

const QuantumLoader = () => {
    useEffect(() => {
        quantum.register();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-[200px] gap-8">
            <div className="relative flex items-center justify-center">
                {/* Lueur d'ambiance */}
                <div className="absolute w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

                {/* Loader Quantum de ldrs */}
                <l-quantum
                    size="70"
                    speed="1.75"
                    color="white"
                ></l-quantum>
            </div>

            <p className="text-sm font-light tracking-[0.3em] text-purple-200/70 uppercase animate-pulse">
                Chargement
            </p>
        </div>
    );
};

export default QuantumLoader;
