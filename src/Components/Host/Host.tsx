import { useParams } from "react-router-dom";
import LodgmentData from "../../logements.json";
import "./__Host.scss";

interface RouteParams {
  id: string;
}

interface Card {
  id: string;
  host: {
    name: string;
    picture: string;
  };
}

export default function Host() {
  const params = useParams() as any as RouteParams;
  const currentCard = LodgmentData.find((card: Card) => card.id === params.id);

  if (!currentCard) {
    return <>Hôte introuvable.</>;
  }
  return (
    <div className="name__image">
      <p>{currentCard.host.name}</p>
      <img
        src={currentCard.host.picture}
        alt={`L'hôte de la maison: ${currentCard.host.name}`}
        className="profil__picture"
      />
    </div>
  );
}
