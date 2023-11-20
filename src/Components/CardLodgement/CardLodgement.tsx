import React from "react";
import { Link } from "react-router-dom";
import LodgmentData from "../../logements";
import "./__cardLodgement.scss";
export default function CardLodgement() {
  return (
    <section className="lodgementContainer">
      {LodgmentData.map((card, index) => (
        <article key = {index} >
          <Link to ={`/logements/${card.id}`}>
            <div className="box">
              <img src={card.cover} alt={card.title} className="box__cover" />
              <h2 className="box__title">{card.title}</h2>
              <div className="box__filter"></div>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
}