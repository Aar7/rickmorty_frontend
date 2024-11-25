import { useContext, useEffect, useState } from "react";
import "./PageNavigation.css";
import { NavigationContext } from "../../assets/contexts/NavigationContext";
import arrowRight from "../../assets/images/arrow-Right.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";
import { goToOtherPage } from "../../utils/ramApi";

function PageNavigation() {
  let prevNavBtnClasses = "page-nav__button";
  let nextNavBtnClasses = "page-nav__button";

  const { chars, setChars, hideShowMore, setHideShowMore } =
    useContext(NavigationContext);

  const { count, next, pages, prev } = chars?.info || {};
  useEffect(() => {
    if (!prev) {
      prevNavBtnClasses += " page-nav__button_disabled";
    }
    if (!next) {
      nextNavBtnClasses += " page-nav__button_disabled";
    }
  }, [chars?.info]);

  async function handleClickNextBtn() {
    const data = await goToOtherPage(next);
    setChars(data);
    setHideShowMore(false);
  }
  async function handleClickPrevBtn() {
    const data = await goToOtherPage(prev);
    setChars(data);
    setHideShowMore(false);
  }

  return (
    <div className="page-nav">
      <button
        className={prevNavBtnClasses}
        type="button"
        onClick={() => {
          handleClickPrevBtn();
        }}
      >
        <p className="page-nav__direction">Prev</p>
        <img className="page-nav__previous" src={arrowLeft} />
      </button>

      <p className="page-nav__text">Page</p>

      <button
        className={nextNavBtnClasses}
        onClick={() => {
          handleClickNextBtn();
        }}
      >
        <img className="page-nav__next" src={arrowRight} />
        <p className="page-nav__direction">Next</p>
      </button>
    </div>
  );
}

export default PageNavigation;
