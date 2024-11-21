import { useContext } from "react";
import "./PageNavigation.css";
import { NavigationContext } from "../../assets/contexts/NavigationContext";
import arrowRight from "../../assets/images/arrow-Right.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";

function PageNavigation() {
  const charInfoObj = useContext(NavigationContext);
  const { count, next, pages, prev } = charInfoObj;
  const nextPage = next[next.length - 1];
  let navBtnClasses = "page-nav__button";
  return (
    <div className="page-nav">
      <button className={navBtnClasses} type="button">
        <p className="page-nav__direction">Prev</p>
        <img className="page-nav__previous" src={arrowLeft} />
      </button>

      <p className="page-nav__text">Page</p>

      <button className="page-nav__button">
        <img className="page-nav__next" src={arrowRight} />
        <p className="page-nav__direction">Next</p>
      </button>
    </div>
  );
}

export default PageNavigation;
