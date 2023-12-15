import "./Navbar.css"
import {Twitter, Moon, Sun, X, Menu} from "react-feather";
import {useState} from "react";

const Navbar = (props) => {
    let them = props.them
    let icon;
    if (them === "dark") {
        icon = <Sun/>
    } else {
        icon = <Moon/>
    }
    const [navIcon, setNavIcon] = useState("close")
    const closeHandler = (val) => {
        if (val === "close") {
            setNavIcon("close")
        } else {
            setNavIcon("open")
        }
    }
    return (
        <div className={"nav"}>
            <div className={"logo"}>Crptex</div>
            <div onClick={() => {
                closeHandler("open")
            }} className="navIcon">
                <Menu/>
            </div>
            <div className={`onClose ${navIcon}`}>
                <div onClick={() => {
                    closeHandler("close")
                }} className="navIcon">
                    <X/>
                </div>
                <div className={"links"}>
                    <div>Home</div>
                    <div>market</div>
                    <div>choose us</div>
                    <div>join</div>
                </div>
                <div className={"icons"}>
                    <Twitter/>
                    <span onClick={props.nightModeHandler}>
                    {icon}
                </span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;