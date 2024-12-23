import { useContext, useEffect, useState } from "react";
import "./PageNavigation.css";
import { NavigationContext } from "../../contexts/NavigationContext";
import arrowRight from "../../assets/images/arrow-right.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";
import { goToOtherPage } from "../../utils/ramApi";

function PageNavigation({ cardData, setCardData }) {
  const [prevNavBtnClasses, setPrevNavBtnClasses] =
    useState("page-nav__button");
  const [nextNavBtnClasses, setNextNavBtnClasses] =
    useState("page-nav__button");

  const { setHideShowMore } = useContext(NavigationContext);

  const { count, next, pages, prev } = cardData?.info || {};
  // console.log(cardData);
  useEffect(() => {
    // console.log(prev, next);
    setPrevNavBtnClasses(
      prev ? "page-nav__button" : "page-nav__button page-nav__button_disabled"
    );
    setNextNavBtnClasses(
      next ? "page-nav__button" : "page-nav__button page-nav__button_disabled"
    );
  }, [cardData]);

  // async function handleClickNextBtn() {
  //   if (next) {
  //     const data = await goToOtherPage(next);
  //     setCardData(data);
  //     setHideShowMore(false);
  //   }
  // }

  // async function handleClickPrevBtn() {
  //   if (prev) {
  //     const data = await goToOtherPage(prev);
  //     setCardData(data);
  //     setHideShowMore(false);
  //   }
  // }

  async function handleClickNavButton(pageLink) {
    if (pageLink) {
      const data = await goToOtherPage(pageLink);
      setCardData(data);
      setHideShowMore(false);
    }
  }

  return (
    <div className="page-nav">
      <button
        className={prevNavBtnClasses}
        type="button"
        onClick={() => {
          // handleClickPrevBtn();
          handleClickNavButton(prev);
        }}
      >
        <p className="page-nav__direction">Prev</p>
        <img className="page-nav__previous" src={arrowLeft} />
      </button>

      <p className="page-nav__text">Page</p>

      <button
        className={nextNavBtnClasses}
        onClick={() => {
          // handleClickNextBtn();
          handleClickNavButton(next);
        }}
      >
        <img className="page-nav__next" src={arrowRight} />
        <p className="page-nav__direction">Next</p>
      </button>
    </div>
  );
}

export default PageNavigation;
