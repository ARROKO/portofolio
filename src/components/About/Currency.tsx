import { Card } from './Card';


export const Currency = () => (
  <div className="space-y-6 my-12">
      {
        [
          {
            title: 'Beauté',
            content: " En tant que développeur d'application de base front-end, je m'efforce de créer des interfaces utilisateur d'une beauté à couper le souffle, alliant harmonie des couleurs, typographie raffinée et visuels attrayants. Chaque pixel est soigneusement positionné pour offrir une expérience visuelle éblouissante, reflétant l'esthétique la plus pure et la plus sophistiquée."
          },
          {
            title: 'Élégance',
            content: "L'élégance dans mes créations se manifeste par des transitions fluides, des animations gracieuses et une navigation intuitive. J'accorde une importance primordiale à la finesse et à la sobriété, permettant à chaque interaction de se dérouler avec une aisance naturelle. Mon objectif est de capturer l'essence de la sophistication dans chaque ligne de code, tout en offrant une simplicité d'utilisation sans égale."
          },
          {
            title: 'Simplicité',
            content: "La simplicité est le cœur de mon processus de développement. Je conçois des applications épurées et accessibles, où chaque fonctionnalité est pensée pour être immédiatement compréhensible et utilisable. En éliminant toute complexité superflue, je m'assure que l'utilisateur puisse se concentrer sur ce qui importe vraiment, transformant chaque interaction en un moment de pure fluidité et de plaisir."
          }
        ].map((currency, index)=>(

          <Card 
            title={currency.title} 
            content={currency.content}
            key={index} 
          />
        ))
      }

  </div>
);