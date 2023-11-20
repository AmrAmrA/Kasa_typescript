import React from "react";
import "./__Accordion.scss";
import { useState } from "react";
import Accordion__icon from "./chevron.png";
interface AccordionProps {
  title: string;
  content: string;
}

function Accordion({ title, content }: AccordionProps) {
  const [active, setActive] = useState<boolean>(false);

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    setActive(!active);
  };

  return (
    <div className={`accordion ${active && "active"}`}>
      <div className="accordion__title" onClick={handleToggle}>
        <p>{title}</p>
        <img
          src={Accordion__icon}
          alt="Une flèche sur laquelle appuyer pour ouvrir ou fermer l'Accordion"
          className="accordion__icon"
        />
      </div>
      <div className="accordion__content">{content}</div>
    </div>
  );
}

export default Accordion;
