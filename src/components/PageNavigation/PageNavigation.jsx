import { useContext, useEffect, useState } from "react";
import "./PageNavigation.css";
import { NavigationContext } from "../../assets/contexts/NavigationContext";
import arrowRight from "../../assets/images/arrow-Right.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";
import { goToOtherPage } from "../../utils/ramApi";

function PageNavigation() {
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [qtyPages, setQtyPages] = useState(0);
  let prevNavBtnClasses = "page-nav__button";
  let nextNavBtnClasses = "page-nav__button";

  const { charInfoObj, setChars, hideShowMore, setHideShowMore } =
    useContext(NavigationContext);
  const { count, next, pages, prev } = charInfoObj;

  useEffect(() => {
    setPrevPage(prev);
    setNextPage(next);
    setCharCount(count);
    setQtyPages(pages);
  }, [count, next, pages, prev]);

  if (!prevPage) {
    prevNavBtnClasses += " page-nav__button_disabled";
  }
  if (!nextPage) {
    nextNavBtnClasses += " page-nav__button_disabled";
  }

  function setStateValues(data) {
    const { info, results } = data;
    setPrevPage(info.prev);
    setNextPage(info.next);
    setCharCount(info.count);
    setQtyPages(info.pages);
    setChars(results);
  }
  async function handleClickNextBtn() {
    const data = await goToOtherPage(nextPage);
    setStateValues(data);
    setHideShowMore(false);
    // set the show more button back to visible
  }
  async function handleClickPrevBtn() {
    const data = await goToOtherPage(prevPage);
    setHideShowMore(false);
    setStateValues(data);
  }

  // useEffect(() => {
  //   console.log(prevPage);
  //   console.log(nextPage);
  //   console.log(qtyPages);
  //   console.log(charCount);
  // }, [prevPage, nextPage, qtyPages, charCount]);

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
