import {useState, useEffect} from "react";

const NightMode = () => {
    const [them, setThem] = useState("light")
    useEffect(() => {
        setThem(window.localStorage.getItem("them"))

    }, [])
    const changThemHandler = () => {
        if (them === "light") {
            setThem("dark")
            window.localStorage.setItem("them", "dark")
        } else {
            setThem("light")
            window.localStorage.setItem("them", "light")
        }
    }
    return [them, changThemHandler]
}

export default NightMode;