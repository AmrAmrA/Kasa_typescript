import React from "react";
import "./__Footer.scss";
import logoFooter from "./logo__footer.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img
          src={logoFooter}
          alt="Logo de l'entreprise kasa en noir et blanc"
          className="footer__logo"
        />
      </Link>
      <p className="footer__paragraph">&#169; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}