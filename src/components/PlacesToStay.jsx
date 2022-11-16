import HomeCard from "./reusable/HomeCard";
import {ReactComponent as LocationIcon} from "../assets/icons/locationIcon.svg";
import "./styles/places.css";
import { useState } from "react";
import { Frame151, Frame152, Frame153, Frame154, Frame155, Frame156, Frame157, Frame158, Frame159, Frame160, Frame161, Frame162, Frame163, Frame164, Frame165, Frame166 } from "../assets/images";

const Images = [Frame151, Frame152, Frame153, Frame154, Frame155, Frame156, Frame157, Frame158, Frame159, Frame160, Frame161, Frame162, Frame163, Frame164, Frame165, Frame166];

const Filters = ["Restaurant", "Cottage", "Fantast city", "Beach", "Carbins", "Off-grid", "Farm"];


const PlacesToStay = () => {
    const [activeIndex, setActiveIndex] = useState();

    return (
        <div id="places_grid">
            <section className="container" id="filter_grid">
                {
                    Filters.map((item, idx) => <p key={idx} onClick={() => {setActiveIndex(idx)}} className={idx === activeIndex && "active" }>{item}</p>)
                }
                <button>
                    <span>Location</span>
                    <LocationIcon />
                </button>
            </section>
            <section className="container" id="homes_list">
                <div className="homes_grid">
                    {/* <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard /> */}
                    {
                        Images.map(image => <HomeCard image={image}/>)
                    }
                </div>
            </section>
        </div>
    )
}

export default PlacesToStay;