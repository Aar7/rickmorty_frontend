import "./Header.css";
import rickHead from "../../assets/images/icons8-rick-sanchez.svg";
import mortyHead from "../../assets/images/icons8-morty-smith.svg";
function Header(props) {
  return (
    <>
      <header className="header">
        <img className="header__image_rick" src={rickHead} alt="" />
        <p className="header__title">Rick and Morty</p>
        <img className="header__image_morty" src={mortyHead} alt="" />
      </header>
    </>
  );
}

export default Header;
