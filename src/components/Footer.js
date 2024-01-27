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
            <Link to="/terms">Terms</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://facebook.com"
            >
              <img src={facebookIcon} alt="Facebook" width="30vw" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="http://x.com">
              <img src={twitterIcon} alt="Twitter" width="30vw" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://linkedin.com"
            >
              <img src={linkedinIcon} alt="Linkedin" width="30vw" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
