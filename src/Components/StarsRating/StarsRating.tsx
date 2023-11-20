import { useParams } from "react-router-dom";
import greyStar from "./greyStar.png";
import redStar from "./redStar.png";
import LodgmentData from "../../logements.json";
import "./__StarsRating.scss";

interface RouteParams {
  id: string;
}

interface Card {
  id: string;
  rating: number;
}

export default function StarsRating() {
  const params = useParams() as any as RouteParams;
  const starsArray = [1, 2, 3, 4, 5];

  const currentCard = LodgmentData.find((card: Card) => card.id === params.id);

  if (!currentCard) {
    return <div>Logement introuvable.</div>;
  }

  return (
    <div className="starsList">
      {starsArray.map((starIndex) => (
        <img
          alt="Nombre d'étoiles pour évaluer la qualité du logement"
          className="star"
          key={starIndex}
          src={starIndex <= currentCard.rating ? redStar : greyStar}
        />
      ))}
    </div>
  );
}
