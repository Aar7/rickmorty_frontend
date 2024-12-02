import PageNavigation from "../PageNavigation/PageNavigation";
import { CLASSES } from "../../utils/config";
import "./QueryWrapper.css";
import { useContext } from "react";
import { NavigationContext } from "../../contexts/NavigationContext";

function QueryWrapper({
  hideShowMore,
  cardData,
  setCardData,
  itemCards,
  shownCards,
  setShownCards,
  children,
}) {
  const { handleClickShowMore } = useContext(NavigationContext);
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
            handleClickShowMore(shownCards, itemCards, setShownCards);
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
