import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Metabnb.png";
import { useModalContext } from "../contexts/ModalContext/ModalContext";
import "./styles/navbar.css";

const Navbar = () => {
    const {toggleVisibility} = useModalContext();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const getWidth = useCallback(() => {
        const { innerWidth: width } = window;
        setWindowWidth(width);
    }, [])
    
    const toggleNav = useCallback(() => {
        setIsNavOpen(prev => !prev)
    }, [])
    
    useEffect(() => {
        window.addEventListener('resize', getWidth);

        return () => {
            window.removeEventListener('resize', getWidth);
        }
    }, [getWidth, windowWidth]);

    return (
        <header>
            {
                windowWidth > 899 ?
                <div className="container" id="header_wrapper">
                    <NavLink exact to="/">
                        <img src={Logo} alt="Metabnb" className="logo" />
                    </NavLink>

                    <nav className="d_nav">
                        <li>
                            <NavLink exact to="/" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/places" activeClassName="active">
                                Place to stay
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nfts" activeClassName="active">
                                NFTs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/community" activeClassName="active">
                                Community
                            </NavLink>
                        </li>
                    </nav>

                    <button className="btn_connect" onClick={toggleVisibility}>
                        Connect wallet
                    </button>
                </div> :
                <div className="container" id="nav_mobile">
                    <div className="nav_mobile__head">
                        <NavLink exact to="/">
                            <img src={Logo} alt="Metabnb" className="logo"/>
                        </NavLink>
                        <div className="nav_mobile__menu" onClick={toggleNav}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className={isNavOpen ? "nav_collapse" : "nav_collapse toggle_nav"}>
                        <nav>
                            <li>
                                <NavLink to="/" activeClassName="active" onClick={toggleNav}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/places" activeClassName="active" onClick={toggleNav}>
                                    Place to stay
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/nfts" activeClassName="active" onClick={toggleNav}>
                                    NFTs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/community" activeClassName="active" onClick={toggleNav}>
                                    Community
                                </NavLink>
                            </li>
                        </nav>

                        <button className="btn_connect" onClick={() => {toggleNav(); toggleVisibility()}}>
                            Connect wallet
                        </button>
                    </div>
                </div> 
    
                
            }
        </header>
    )
}

export default Navbar;