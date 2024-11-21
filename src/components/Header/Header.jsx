import "./Header.css";
import rickHead from "../../assets/images/icons8-rick-sanchez.svg";
import mortyHead from "../../assets/images/icons8-morty-smith.svg";
function Header(props) {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <img className="header__image_rick" src={rickHead} alt="" />
          <p className="header__title">Rick and Morty</p>
          <img className="header__image_morty" src={mortyHead} alt="" />
        </div>
        <div className="header__tabs">
          <button
            className="header__tabs_chars header__tabs_button"
            type="button"
          >
            Characters
          </button>
          <button
            className="header__tabs_locs header__tabs_button"
            type="button"
          >
            Locations
          </button>
          <button
            className="header__tabs_epis header__tabs_button"
            type="button"
          >
            Episodes
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
