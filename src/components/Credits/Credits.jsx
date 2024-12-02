import "./Credits.css";
import { credits } from "../../utils/credits";
import { Link } from "react-router-dom";

function Credits() {
  const creditKeys = Object.keys(credits);
  const creditArray = creditKeys.map((key) => {
    return (
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
