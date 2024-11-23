import PageNavigation from "../PageNavigation/PageNavigation";
import "./QueryWrapper.css";

function QueryWrapper({ handleClickShowMore, hideShowMore, children }) {
  let showMoreButtonClasses = "query-wrapper__show-more";

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
            console.log(hideShowMore);
          }}
        >
          Show more...
        </button>
      </ul>
      <PageNavigation />
    </>
  );
}

export default QueryWrapper;
