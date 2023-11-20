import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LodgmentData from '../../logements'
import leftArrow from "./leftArrow.png";
import rightArrow from "./rightArrow.png";
import "./__Slider.scss";

export default function Slider() {
  // A hook who allows us to display data for every differnt ID inside the JSON File
  const params = useParams();
  const [current, setCurrent] = useState(0);

  // A ternary: we are on the last image? Let's go back to the first image
  // otherwise continue to go to a more upper image in the slider
  const nextSlide = (length) => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = (length) => {
    // A ternary: we are on the first image? Let's go to the last image of the slider
    // otherwise let's go back
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <>
      {LodgmentData.filter((card) => card.id === params.id).map((card, key) => (
        <section key={key} className="slider">
          {/* A ternary: Does our slider contain more than one image: display the arrows 
          otherwise do not display them  */}
          {card.pictures.length > 1 ? (
            <>
              <img
                src={leftArrow}
                alt="Flèche gauche pour passer à la slide précédente"
                className="left__arrow arrow"
                onClick={() => prevSlide(card.pictures.length)}
              />
              <img
                src={rightArrow}
                alt="Flèche droite pour passer à la slide suivante"
                className="right__arrow arrow"
                onClick={() => nextSlide(card.pictures.length)}
              />
            </>
          ) : (
            ""
          )}
          {card.pictures.map((image, key) => {
            return (
              <article
                className={key === current ? "slide active" : "slide"}
                key={key}
              >
                {key === current && (
                  <img
                    src={image}
                    alt="Une série de slider pour présenter l'appartement"
                    className="centralImage"
                  />
                )}
              </article>
            );
          })}
          {/* Shows the number of the image we are on in relation to the whole slider */}
          <p className="slide__number">
            {`${current + 1}`}/{`${card.pictures.length}`}
          </p>
        </section>
      ))}
    </>
  );
}
