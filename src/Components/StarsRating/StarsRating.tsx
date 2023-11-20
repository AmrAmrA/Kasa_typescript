import React from "react";
import { useParams } from "react-router-dom";
import greyStar from "./greyStar.png";
import redStar from "./redStar.png";
import LodgmentData from "../../logements";
import "./__StarsRating.scss";

export default function StarsRating() {
  const params = useParams();
  // Number of stars to compare with our stars array from JSON Data
  const starsArray = [1, 2, 3, 4, 5];
  return (
    <>
      {LodgmentData.filter((card) => card.id === params.id).map(
        (card, index) => (
          <div className="starsList" key={index}>
            {starsArray.map((index) => (
              <img
                alt="Nombre d'étoiles pour évaluer la qualité du logement"
                className="star"
                key={index}
                // A ternary to present the number of red stars according to the stars that come from the Json file
                src={index <= card.rating ? redStar : greyStar}
              />
            ))}
          </div>
        )
      )}
    </>
  );
}