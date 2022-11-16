import "../styles/homecard.css";
import {ReactComponent as Heart} from "../../assets/icons/Heart.svg";
import {ReactComponent as Star} from "../../assets/icons/Star.svg";

const HomeCard = ({image}) => {

    return (
        <div className="home_card_ctn">
            <div className="home_card_img">
                <img src={image} alt="desert king" />
                <Heart />
            </div>
            <div className="home_card_info">
                <div>
                    <p>Desert king</p>
                    <p className="home_price">1MBT per night</p>
                </div>
                <div>
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                </div>
            </div>
            <div className="home_card_stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
        </div>
    )
}

export default HomeCard;