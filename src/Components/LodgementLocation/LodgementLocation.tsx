import { useParams } from "react-router-dom";
import LodgmentData from "../../logements.json";
import "./__LodgementLocation.scss";

interface RouteParams {
  id: string;
}

interface Card {
  title : string; 
  location : string; 
  id : string; 
}
export default function LodgementLocation() {
  const params = useParams() as any as RouteParams;
  const currentCard = LodgmentData.find((card: Card) => card.id === params.id);

  if (!currentCard) {
    return <div>Logement introuvable.</div>;
  }

  return (
    <div>
      <h1>{currentCard.title}</h1>
      <p>{currentCard.location}</p>
    </div>
  );
}
