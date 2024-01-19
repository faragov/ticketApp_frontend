import { Link } from "react-router-dom";
import facebookIcon from "../facebook-svgrepo-com.svg";
import twitterIcon from "../twitter-svgrepo-com.svg";
import linkedinIcon from "../linkedin-svgrepo-com.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
        <p>{`©${year} FoxTicket`}</p>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/shop">Terms</Link>
          </li>
          <li>
            <Link to="/profile">Contact</Link>
          </li>
          <li>
            <Link to="www.facebook.com">
              <img src={facebookIcon} alt="Facebook" width="30vw" />
            </Link>
          </li>
          <li>
            <Link to="www.twitter.com">
              <img src={twitterIcon} alt="Twitter" width="30vw" />
            </Link>
          </li>
          <li>
            <Link to="www.linkedin.com">
              <img src={linkedinIcon} alt="Linkedin" width="30vw" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
