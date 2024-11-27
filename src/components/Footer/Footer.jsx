import { Link } from "react-router-dom";
import "./Footer.css";
function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__creator">© Aaron J Meighoo 2024</p>
      {/* <a className="footer__credits">Credits</a> */}
      <Link to="/credits" className="footer__credits">
        Credits
      </Link>
    </footer>
  );
}

export default Footer;
