import "./styles/home.css";

import Metahome1 from "../assets/images/metahome1.png";
import Metahome2 from "../assets/images/metahome2.png";
import Metahome3 from "../assets/images/metahome3.png";
import Metahome4 from "../assets/images/metahome4.png";

import { Frame155, Frame156, Frame157, Frame158, Frame151, Frame152, Frame153, Frame154 } from "../assets/images";

import Mbtoken from "../assets/images/mbtoken.png";
import Metamask from "../assets/images/metamask.png";
import Opensea from "../assets/images/opensea.png";
import Metanft from "../assets/images/metanft.png";

import HomeCard from "./reusable/HomeCard";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <section className="container" id="hero_section">
                <div className="hero_text_grid">
                    <h1>
                        Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
                    </h1>

                    <p>
                        we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                    </p>

                    <div className="search_wrapper">
                        <input type="text" placeholder="Search for location" />
                        <button>Search</button>
                    </div>
                </div>
                <div id="hero_img_grid">
                    <div>
                        <img src={Metahome1} alt="home" />
                        <img src={Metahome4} alt="home" />
                    </div>
                    <div>
                        <img src={Metahome2} alt="home" />
                        <img src={Metahome3} alt="home" />
                    </div>
                </div>
            </section>

            <section id="crypto_section">
                <img src={Mbtoken} alt="mbtoken" />
                <img src={Metamask} alt="metamask" />
                <img src={Opensea} alt="opensea" />
            </section>

            <section className="container" id="homes_list">
                <h2>Inspiration for your next adventure</h2>

                <div className="homes_grid">
                    <HomeCard image={Frame155}/>
                    <HomeCard image={Frame156}/>
                    <HomeCard image={Frame157}/>
                    <HomeCard image={Frame158}/>
                    <HomeCard image={Frame151}/>
                    <HomeCard image={Frame152}/>
                    <HomeCard image={Frame153}/>
                    <HomeCard image={Frame154}/>
                </div>
            </section>

            <section id="nfts_container">
                <div className="container">
                    <div className="nft_text">
                        <h2>Metabnb NFTs</h2>
                        <p>
                            Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                        </p>

                        <Link to="/">
                            Learn more
                        </Link>
                    </div>
                    <div className="nft_img_ctn">
                        <img src={Metanft} alt="Metabnb NFTs"/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;