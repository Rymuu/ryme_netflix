import React, { useEffect } from "react";
import Link from "next/link";
import LogoNetflix from "../public/netflix.png";
const Header = () => {
  return (
    <header className="header__main">
      <div className="header__logo">
        <img src={LogoNetflix.src} alt="logo_netflix" />
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Accueil</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/films">
              <a className="nav__link">Films</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/maliste">
              <a className="nav__link">Ma liste</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Search</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/login">
              <a className="nav__link">Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;