import { Link } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebookIcon.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/TwitterIcon.svg";
import LogoWhite from "../assets/images/LogoWhite.png";

import "./styles/footer.css";

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <div className="footer_grid">
                    <Link to="/" className="footer_logo">
                        <img src={LogoWhite} alt="Metabnb" />
                    </Link>
                    <div className="footer_links">
                        <p>Community</p>
                        <Link to="/">NFT</Link>
                        <Link to="/">Tokens</Link>
                        <Link to="/">Landlords</Link>
                        <Link to="/">Discord</Link>
                    </div>
                    <div className="footer_links">
                        <p>Places</p>
                        <Link to="/">Castle</Link>
                        <Link to="/">Farms</Link>
                        <Link to="/">Beach</Link>
                        <Link to="/">Learn more</Link>
                    </div>
                    <div className="footer_links">
                        <p>About Us</p>
                        <Link to="/">Road map</Link>
                        <Link to="/">Creators</Link>
                        <Link to="/">Career</Link>
                        <Link to="/">Contact us</Link>
                    </div>
                </div>
                <div className="social_links">
                    <Link to="/">
                        <FacebookIcon />
                    </Link>
                    <Link to="/">
                        <Instagram />
                    </Link>
                    <Link to="/">
                        <TwitterIcon />
                    </Link>
                </div>
                <p>&#169; 2022 Metabnb</p>
            </div>
        </footer>
    )
}

export default Footer;