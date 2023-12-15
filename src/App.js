import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import NightMode from "./Component/UI/NightMode/NightMode";

function App() {
    const [them, nightModeHandler] = NightMode()
    return (
        <div className={`container ${them}`}>
            <Navbar them={them} nightModeHandler={nightModeHandler}/>
            <Home them={them}/>
            <Footer/>
        </div>
    );
}

export default App;
