import PageNavigation from "../PageNavigation/PageNavigation";
import { CLASSES } from "../../utils/config";
import "./QueryWrapper.css";

function QueryWrapper({
  handleClickShowMore,
  hideShowMore,
  cardData,
  setCardData,
  children,
}) {
  let showMoreButtonClasses = CLASSES.showMoreButton;

  if (hideShowMore) {
    showMoreButtonClasses += " query-wrapper__show-more_disabled";
  }

  return (
    <>
      <ul className="query-wrapper">
        {children}

        <button
          className={showMoreButtonClasses}
          onClick={() => {
            handleClickShowMore();
          }}
        >
          Show more...
        </button>
      </ul>
      <PageNavigation cardData={cardData} setCardData={setCardData} />
    </>
  );
}

export default QueryWrapper;
