import { Link } from "react-router-dom";
import facebook from "../facebook-svgrepo-com.svg"
import twitter from "../twitter-svgrepo-com.svg"
import linkedin from "../linkedin-svgrepo-com.svg"

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="navbar">
                <ul>
                    <li>
                        <footer>{`©${year} FoxTicket`}</footer>;
                    </li>
                    <li>
                        <Link to="/shop">Terms</Link>
                    </li>
                    <li>
                        <Link to="/profile">Contact</Link>
                    </li>
                    <li>
                        <Link to="www.facebook.com"><img src={facebook} alt="Facebook" width="30vw" /></Link>
                    </li>
                    <li>
                        <Link to="www.twitter.com"><img src={twitter} alt="Twitter" width="30vw" /></Link>
                    </li>
                    <li>
                        <Link to="www.linkedin.com"><img src={linkedin} alt="Linkedin" width="30vw"/></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
