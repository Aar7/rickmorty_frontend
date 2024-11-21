import "./Header.css";
import rickHead from "../../assets/images/icons8-rick-sanchez.svg";
import mortyHead from "../../assets/images/icons8-morty-smith.svg";
import { Link, NavLink } from "react-router-dom";
function Header(props) {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <img className="header__image_rick" src={rickHead} alt="" />
          <Link to="/" className="header__title">
            Rick and Morty
          </Link>
          <img className="header__image_morty" src={mortyHead} alt="" />
        </div>
        <nav className="header__tabs">
          <NavLink
            to="/characters"
            className="header__tabs_chars header__tabs_button"
          >
            Characters
          </NavLink>
          <NavLink
            to="/locations"
            className="header__tabs_locs header__tabs_button"
          >
            Locations
          </NavLink>
          <NavLink
            to="/episodes"
            className="header__tabs_epis header__tabs_button"
          >
            Episodes
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
