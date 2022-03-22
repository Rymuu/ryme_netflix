import React, { useEffect } from "react";
import Link from "next/link";
import LogoNetflix from "../public/netflix.png";
import Button from "./Button";
const Header = () => {
  return (
    <header className="header__main">
      <div className="header__logo">
        <img src={LogoNetflix.src} alt="logo_netflix" />
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
          <Button title="S'identifier" classes="btn btn__color-red__shape-rounded" type="submit"/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;