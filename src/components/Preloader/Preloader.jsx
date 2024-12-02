import "./Preloader.css";

function Preloader() {
  return (
    <>
      <div className="preloader">
        <p className="preloader__text">Loading content...</p>
        <div className="preloader__circle"></div>
      </div>
    </>
  );
}

export default Preloader;
