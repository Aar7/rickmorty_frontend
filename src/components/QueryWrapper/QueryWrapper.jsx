import "./QueryWrapper.css";

function QueryWrapper({ children }) {
  return (
    <>
      <ul className="query-wrapper">{children}</ul>
    </>
  );
}

export default QueryWrapper;
