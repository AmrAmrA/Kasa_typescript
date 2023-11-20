import { useState } from "react";
import { useParams } from "react-router-dom";
import LodgmentData from '../../logements.json'
import leftArrow from "./leftArrow.png";
import rightArrow from "./rightArrow.png";
import "./__Slider.scss";

interface RouteParams {
  id: string;
}

interface Card {
  id : string; 
  pictures : string[]
}

export default function Slider() {
  const params = useParams() as any as RouteParams;
  const currentCard = LodgmentData.find((card: Card) => card.id === params.id);

  const [current, setCurrent] = useState(0);
  const nextSlide = (length: number) => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = (length: number) => setCurrent(current === 0 ? length - 1 : current - 1);

  if (!currentCard) {
    return <div>Logement introuvable.</div>;
  }

  return (
    <section className="slider">
      {currentCard.pictures.length > 1 && (
        <>
          <img
            src={leftArrow}
            alt="Flèche gauche pour passer à la slide précédente"
            className="left__arrow arrow"
            onClick={() => prevSlide(currentCard.pictures.length)}
          />
          <img
            src={rightArrow}
            alt="Flèche droite pour passer à la slide suivante"
            className="right__arrow arrow"
            onClick={() => nextSlide(currentCard.pictures.length)}
          />
        </>
      )}
      {currentCard.pictures.map((image, index) => (
        <article
          className={index === current ? "slide active" : "slide"}
          key={image}
        >
          {index === current && (
            <img
              src={image}
              alt="Slider de l'appartement"
              className="centralImage"
            />
          )}
        </article>
      ))}
      <p className="slide__number">
        {`${current + 1}/${currentCard.pictures.length}`}
      </p>
    </section>
  );
}
