import React, { useEffect } from "react";
import Link from "next/link";
import LogoNetflix from "../public/netflix.png";
import Button from "./Button";
import { useRouter } from "next/router";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Icon from "../public/icones/aggretsuko.png";

const Header = () => {
  const router = useRouter();
  return (
    <>
      {router.asPath === "/" ?

        (
          <header className="login__header__main">
            <div className="login__header__logo">
              <Link href="/">
                <img src={LogoNetflix.src} alt="logo_netflix" />
              </Link>
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

            <nav className="header__nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link href="/browse">
                    <a className="header__logo">
                      <img src={LogoNetflix.src} alt="logo_netflix" />
                    </a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link color="blue" href="/browse">
                    {router.asPath === "/browse" ?
                      (<a className="nav__link__white">Accueil</a>)
                      :
                      (<a className="nav__link">Accueil</a>)}
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/latest">
                    {router.asPath === "/latest" ?
                      (<a className="nav__link__white">Nouveautés les plus regardés</a>)
                      :
                      (<a className="nav__link">Nouveautés les plus regardés</a>)}
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/my-list">
                    {router.asPath === "/my-list" ?
                      (<a className="nav__link__white">Ma liste</a>)
                      :
                      (<a className="nav__link">Ma liste</a>)}
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="header__nav__right" margin-right="15%">
              <ul className="nav__list">
                <li className="nav__item">
                  <a className="nav__item__icon"><SearchIcon /></a>
                </li>
                <li className="nav__item">
                  <a className="nav__item__icon"><NotificationsIcon /></a>
                </li>
                <li className="nav__item">
                  <Link href="/account">
                    <a className="nav__item__profil">
                    <img src={Icon.src} alt="profil__icon"/>
                    </a>
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