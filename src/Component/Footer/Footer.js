import "./Footer.css"
import Cloud from "../../assets/cloud.png"
import coin from "../../assets/card.png"
import {Facebook, Instagram, Twitter, Youtube} from "react-feather";

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className="img">
                <img src={Cloud} alt="coin cloud image"/>
            </div>
            <div className={"footer-txt"}>
                <div className={"footer-icons"}>
                    <Twitter/>
                    <Instagram/>
                    <Facebook/>
                    <Youtube/>
                </div>
                <div className={"footer-texts"}>
                    <span>
                    Privacy
                    </span>
                    <span>
                        Terms of Use
                    </span>

                </div>

            </div>
            <div className="img">
                <img src={coin} alt="btc image"/>
            </div>
        </div>
    );
}

export default Footer;