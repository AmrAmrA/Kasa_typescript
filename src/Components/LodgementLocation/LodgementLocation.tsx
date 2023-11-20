import React from "react";
import { useParams } from "react-router-dom";
import LodgmentData from "../../logements";
import "./__LodgementLocation.scss";

export default function LodgementLocation() {
  const params = useParams();
  return (
    <>
      {LodgmentData.filter((card) => card.id === params.id).map(
        (card, index) => (
          <div key = {index}>
            <h1>{card.title}</h1>
            <p>{card.location}</p>
          </div>
        )
      )}
    </>
  );
}
