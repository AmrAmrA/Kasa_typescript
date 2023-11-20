import { Link } from "react-router-dom";
import LodgmentData from "../../logements.json";
import "./__cardLodgement.scss";
interface Lodgement {
  id: string;
  title: string;
  cover: string;
}

export default function CardLodgement() {
  return (
    <section className="lodgementContainer">
      {LodgmentData.map((card: Lodgement) => (
        <article key={card.id}>
          <Link to={`/logements/${card.id}`}>
            <div className="box">
              <img src={card.cover} alt={card.title} className="box__cover" />
              <h2 className="box__title">{card.title}</h2>
              <div className="box__filter" />
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
}