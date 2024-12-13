import "./Header.css";
import rickHead from "../../assets/images/icons8-rick-sanchez.svg";
import mortyHead from "../../assets/images/icons8-morty-smith.svg";
import { TITLES } from "../../utils/config";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [headerTitle, setHeaderTitle] = useState("...loading...");

  useEffect(() => {
    function rand(max) {
      return Math.floor(Math.random() * max);
    }
    setHeaderTitle(TITLES[rand(TITLES.length - 1)]);
  }, []);
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          {/* <img
            className="header__image header__image_name_rick"
            src={rickHead}
            alt="Line-drawing of Rick Sanchez"
          /> */}
          <Link to="/" className="header__title-link">
            <h1 className="header__title">{headerTitle}</h1>
          </Link>
          {/* <img
            className="header__image header__image_name_morty"
            src={mortyHead}
            alt="Line-drawing of Morty Smith"
          /> */}
        </div>
        <nav className="header__tabs">
          <NavLink to="/characters" className="header__tabs-button">
            Characters
          </NavLink>
          <NavLink to="/locations" className="header__tabs-button">
            Locations
          </NavLink>
          <NavLink to="/episodes" className="header__tabs-button">
            Episodes
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
