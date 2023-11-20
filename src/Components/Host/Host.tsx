import React from "react";
import { useParams } from "react-router-dom";
import LodgmentData from "../../logements";
import "./__Host.scss";


export default function Host() {
    const params = useParams();
  return (
    <>
        {LodgmentData.filter((card) => card.id === params.id).map(
        (card, index) => (
            <div className="name__image" key={index}>
            <p>{card.host.name}</p>
            <img
              src={card.host.picture}
              alt={`L'hôte de la maison: ${card.host.name}`}
              className="profil__picture"
            />
          </div>
        )
      )}
    </>
  )
}

