import { motion } from 'framer-motion';

interface DeviseItem {
  title: string;
  content: string;
  icon: string;
  color: string;
}

const devises: DeviseItem[] = [
  {
    title: 'Beauté',
    content: "En tant que développeur d'application de base front-end, je m'efforce de créer des interfaces utilisateur d'une beauté à couper le souffle, alliant harmonie des couleurs, typographie raffinée et visuels attrayants. Chaque pixel est soigneusement positionné pour offrir une expérience visuelle éblouissante, reflétant l'esthétique la plus pure et la plus sophistiquée.",
    icon: '✨',
    color: 'from-pink-400 to-rose-500'
  },
  {
    title: 'Élégance',
    content: "L'élégance dans mes créations se manifeste par des transitions fluides, des animations gracieuses et une navigation intuitive. J'accorde une importance primordiale à la finesse et à la sobriété, permettant à chaque interaction de se dérouler avec une aisance naturelle. Mon objectif est de capturer l'essence de la sophistication dans chaque ligne de code, tout en offrant une simplicité d'utilisation sans égale.",
    icon: '🎭',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    title: 'Simplicité',
    content: "La simplicité est le cœur de mon processus de développement. Je conçois des applications épurées et accessibles, où chaque fonctionnalité est pensée pour être immédiatement compréhensible et utilisable. En éliminant toute complexité superflue, je m'assure que l'utilisateur puisse se concentrer sur ce qui importe vraiment, transformant chaque interaction en un moment de pure fluidité et de plaisir.",
    icon: '🌿',
    color: 'from-green-400 to-emerald-500'
  }
];

export const Currency = () => {
  return (
    <div className="my-12">
      

      {/* Grid des devises */}
      <div className="space-y-8">
        {devises.map((devise, index) => (
          <motion.div
            key={devise.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 0.3 + index * 0.2,
              duration: 0.8,
              ease: "easeOut"
            }}
            className="group relative"
          >
            {/* Card principale */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              {/* Header avec icône et titre */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="text-4xl"
                  animate={{
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {devise.icon}
                </motion.div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${devise.color} bg-clip-text text-transparent`}>
                  {devise.title}
                </h3>
              </div>
              
              {/* Contenu */}
              <p className="text-gray-300 leading-relaxed text-justify">
                {devise.content}
              </p>
              
              
            </div>
            
            {/* Particules flottantes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 bg-gradient-to-r ${devise.color} rounded-full opacity-20`}
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Citation inspirante */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-12"
      >
        <p className="text-gray-400 italic text-lg">
          "La beauté, l'élégance et la simplicité sont les piliers de toute création exceptionnelle"
        </p>
        <p className="text-gray-500 text-sm mt-2">
          - Joseph Kemgang
        </p>
      </motion.div>
    </div>
  );
};