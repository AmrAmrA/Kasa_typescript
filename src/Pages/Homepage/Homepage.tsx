import React from "react";
import backgroundHomePage from "./background_homepage.png";
import CardLodgement from "../../Components/CardLodgement/CardLodgement";
import "./__Homepage.scss";

export default function Homepage() {
  return (
    <main className="homepage">
      <div className="background">
        <img
          src={backgroundHomePage}
          alt="Un arrière plan avec une mer et des rochers"
          className="background__image"
        />
        <h1 className="background__title">Chez vous, et partout ailleurs </h1>
      </div>
      <CardLodgement/>
    </main>
  );
}
