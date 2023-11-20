import "./__Navbar.scss";
import { NavLink } from "react-router-dom";
import logoKasa from "./logo.png";

interface navLinkProps {
  isActive : boolean; 
}

export default function Navbar() {
  /* Class to toggle to add an underline 
     on the current page name 
  */
  const activeLink = "currentLink";
  const normalLink = "";
  return (
    <header>
      <NavLink end to="/">
        <img
          src={logoKasa}
          alt="Logo de l'entreprise Kasa en rouge"
          className="logo__kasa"
        />
      </NavLink>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list__item">
            <NavLink
              end
              to="/"
              // Ternary to toggle the underline style on the current link of our application
              className={({ isActive } : navLinkProps) => (isActive ? activeLink : normalLink)}
            >
              Accueil
            </NavLink>
          </li>
          <li className="navigation__list__item">
            <NavLink
              end
              to="/apropos"
              className={({ isActive } : navLinkProps) => (isActive ? activeLink : normalLink)}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}