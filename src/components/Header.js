import Link from "next/link";
import LogoNetflix from "../public/netflix.png";
import Button from "./Button";
import { useRouter } from "next/router";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Icon from "../public/icones/aggretsuko.png";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Header = () => {
  const router = useRouter();

  const logoff = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  }

  return (
    <>
      {router.asPath === "/" || router.asPath === "/login" || router.asPath === "/register" ?

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
                  {router.asPath === "/" || router.asPath === "/register" ?
                    (<Button title="S'identifier"
                      function={() => router.push("/login")}
                      classes="btn btn__color-red__shape-rounded"
                      type="submit" />)
                    :
                    (
                      null
                    )
                  }
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
                  <Link href="/browse">
                    {router.asPath === "/browse" ?
                      (<a className="nav__link__white">Accueil</a>)
                      :
                      (<a className="nav__link">Accueil</a>)}
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/movies">
                    {router.asPath === "/movies" ?
                      (<a className="nav__link__white">Films</a>)
                      :
                      (<a className="nav__link">Films</a>)}
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
            <nav className="header__nav__right">
              <ul className="nav__list">
                <li className="nav__item">
                  <SearchIcon className="icon" onClick={() => router.push("/search")} />
                </li>
                <li className="nav__item">
                  <a className="nav__item__icon"><NotificationsIcon /></a>
                </li>
                <li className="nav__item">
                  <Link href="/profil">
                    <a className="nav__item__profil">
                      <img src={Icon.src} alt="profil__icon" />
                    </a>
                  </Link>
                </li>
                <li className="nav__item">
                  <a className="nav__link__white" onClick={() => logoff()}>
                    <LogoutOutlinedIcon />
                  </a>
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