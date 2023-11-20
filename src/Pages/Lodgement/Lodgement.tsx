import React from "react";
import { useParams } from "react-router-dom";
import LodgmentData from "../../logements";
import Slider from "../../Components/Slider/Slider";
import StarsRating from "../../Components/StarsRating/StarsRating";
import Tags from "../../Components/Tags/Tags";
import Host from "../../Components/Host/Host";
import LodgementLocation from "../../Components/LodgementLocation/LodgementLocation";
import Accordion from "../../Components/Accordion/Accordion";
import Error from "../Error/Error";
import "./__Lodgement.scss";

export default function Lodgement() {
  // A hook who allows us to display data for every differnt ID inside the JSON File
  const params = useParams();
  const index = LodgmentData.findIndex((el) => el.id === params.id);
  if (index === -1) return <Error />;
  return (
    <main className="container__lodgement">
      <Slider />
      {LodgmentData.filter((card) => card.id === params.id).map(
        (card, index) => (
          <section key={index} className="fullcard">
            <article className="lodgementDescription">
              <div className="geographicInofrmations">
                <LodgementLocation />
                <Tags />
              </div>
              <div className="hostInformations">
                <Host />
                <StarsRating />
              </div>
            </article>
          <div className="accordions">
          <Accordion 
           title="Équipements"
           content=<ul>
           {card.equipments.map((cardItem, index) => (
             <li key={index}>{cardItem} </li>
           ))}
         </ul>
           />
           <Accordion 
           title="Description"
           content={card.description}
           />
          </div>
          </section>
        )
      )}
    </main>
  );
}
