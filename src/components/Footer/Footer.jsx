import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__text footer__creator">Aaron J. Meighoo 2024</p>
        <p className="footer__text footer__copyright">
          Images and content do not belong to me and are the property of{" "}
          <a
            className="footer__link"
            href="https://www.adultswim.com/"
            target="_blank"
          >
            {`[adult swim]`}
          </a>{" "}
          and associated creators
        </p>
      </div>
      <Link to="/credits" className="footer__credits">
        Credits
      </Link>
    </footer>
  );
}

export default Footer;
