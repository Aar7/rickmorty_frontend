import "./Header.css";
import rickHead from "../../assets/images/icons8-rick-sanchez.svg";
import mortyHead from "../../assets/images/icons8-morty-smith.svg";
import { Link, NavLink } from "react-router-dom";
function Header(props) {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <img
            className="header__image header__image_name_rick"
            src={rickHead}
            alt=""
          />
          <Link to="/" className="header__title">
            RaMHub
          </Link>
          <img
            className="header__image header__image_name_morty"
            src={mortyHead}
            alt=""
          />
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
