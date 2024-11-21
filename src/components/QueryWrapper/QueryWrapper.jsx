import PageNavigation from "../PageNavigation/PageNavigation";
import "./QueryWrapper.css";

function QueryWrapper({ children }) {
  return (
    <>
      <ul className="query-wrapper">{children}</ul>
      <PageNavigation />
    </>
  );
}

export default QueryWrapper;
