import "./Credits.css";
import { credits } from "../../utils/credits";
import { Link } from "react-router-dom";
function Credits({ children }) {
  const creditKeys = Object.keys(credits);
  const creditArray = creditKeys.map((key) => {
    return (
      // <iframe src={`${credits[key]}`} title={`${key}`} width="400" height="300">
      //   dddd
      // </iframe>
      // <p className="credits__">
      //   <span>{key}</span>: {credits[key]}
      // </p>

      <a className="credits__link" href={credits[key]} target="_blank">
        {key}
      </a>
    );
  });

  console.log(creditArray);

  return (
    <div className="credits">
      {creditArray}
      <Link className="credits__home-link" to="/">
        Home
      </Link>
    </div>
  );
}

export default Credits;
