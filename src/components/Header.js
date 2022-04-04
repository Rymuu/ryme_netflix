import React, { useEffect } from "react";
import Link from "next/link";
import LogoNetflix from "../public/netflix.png";
import Button from "./Button";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
  return (
        <>
      {router.asPath === "/" ?

        (
          <header className="login__header__main">
            <div className="login__header__logo">
              <img src={LogoNetflix.src} alt="logo_netflix" />
            </div>
            <nav className="login__header__nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <Button title="S'identifier" classes="btn btn__color-red__shape-rounded" type="submit" />
                </li>
              </ul>
            </nav>
          </header>
        )
        :
        (
          <header className="header__main">
            <div className="header__logo">
              <img src={LogoNetflix.src} alt="logo_netflix" />
            </div>
            <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="/browse">
                  <a className="nav__link">Accueil</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/latest">
                  <a className="nav__link">Nouveautés les plus regardés</a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/my-list">
                  <a className="nav__link">Ma liste</a>
                </Link>
              </li>
            </ul>
            </nav>
          </header>
        )
      }

      
    </>


  );
};

export default Header;