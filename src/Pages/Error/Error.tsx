import React from "react";
import "./__Error.scss";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <article className="error">
      <h1 className="error__number">404</h1>
      <p className="error__text">
        Oups ! La page que vous demandez n'existe pas
      </p>
      <Link to="/">
        <p className="error__return">Retourner sur la page d'accueil</p>
      </Link>
    </article>
  );
}
