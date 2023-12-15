import "./Home.css"
import axios from "axios";
import {useEffect, useState} from "react";
import FAQ from "../UI/FAQ/FAQ";

const Home = (props) => {
    const [coin, setCoin] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    useEffect(() => {
        if (loading) {
            axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
                .then((response) => {
                    setCoin(response.data)
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error)
                    setLoading(true);
                })
        }

    }, [loading, page]);
    const priceHandler = (val) => {
        let parts = val.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return "$ " + parts.join(".");
    }
    const percentageHandler = (val) => {
        let nVal = val.toString()
        if (nVal.includes(".")) {
            nVal = nVal.slice(0, nVal.indexOf(".") + 3)
            return nVal
        } else {
            return nVal
        }

    }
    const clrHandler = (val) => {
        let nVal = val.toString()
        if (nVal.includes("-")) {
            return "red"
        } else {
            return "green"
        }
    }
    const nextPge = (event) => {
        if (page < 5) {
            setPage((page) => page + 1);
        }
    }
    const prePage = () => {
        if (page > 1) {
            setPage((page) => page - 1);
        }
    }
    const topCoins = coin.slice(0, 4).map((item, index) => {
        return (
            <div key={index} className={"topCoin"}>
                <img src={item.image} alt="coin"/>
                <div>{item.name + " "}
                    <span style={{color: clrHandler(item.price_change_percentage_24h)}}>
                        {percentageHandler(item.price_change_percentage_24h) + "%"}
                    </span>
                </div>
                <div className={"topCoin-price"}>{priceHandler(item.current_price)}</div>
            </div>
        )
    })
    const coinList = coin.slice((page - 1) * 20, page * 20).map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.market_cap_rank}</td>
                <td className={"coinName"}><img src={item.image}
                                                alt="coin"/><span className={"coinName-span"}><span
                    className={"no-mobile"}>{item.name}</span><span>{" " + item.symbol}</span></span></td>
                <td>{priceHandler(item.current_price)}</td>
                <td style={{color: clrHandler(item.price_change_percentage_24h)}}>{percentageHandler(item.price_change_percentage_24h) + "%"}</td>
                <td className={"no-mobile"}>{priceHandler(item.total_volume)}</td>
                <td className={"no-tablet"}>{priceHandler(item.market_cap)}</td>
            </tr>
        )
    })
    return (
        <div className={"home"}>
            <div className="top">
                <div className="coin" id={"btc"}/>
                <div className={"top-txt"}>
                    track and trade
                    <div id="backgroundClip">
                        crypto currencies
                    </div>
                </div>
                <div className="coin" id={"avax"}/>
            </div>

            <div className={"topCoins"}>
                {coin.length > 0 ? topCoins : <div id={"loading"}>Loading...</div>}
            </div>
            {coin.length > 0 &&
                <div className={"table"}>
                    <table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Coin</th>
                            <th>Price</th>
                            <th>24h %</th>
                            <th className={"no-mobile"}>24h Volume</th>
                            <th className={"no-tablet"}>Mkt Cap</th>
                        </tr>
                        </thead>
                        <tbody>
                        {coinList}
                        </tbody>
                    </table>
                    <button className={page === 1 ? "disabled" : ""} onClick={prePage}>Previous</button>
                    <button className={page === 5 ? "disabled" : ""} onClick={nextPge}>Next</button>
                </div>
            }
            <FAQ them={props.them}/>
            <div className={"btF"}>
                <div className="bottom">
                    <div className="coin" id={"btc"}/>
                    <div className={"bottom-txt"}>
                        Join Us Via
                        <div id="backgroundClip">
                            Discord
                        </div>
                    </div>
                    <div className="coin" id={"avax"}/>
                </div>
                <div id="s-txt">
                    Invest and manage all your crypto at one place.
                </div>
                <button className="discordBtn">
                    Join Us Via Discord
                </button>
            </div>
        </div>
    );
}

export default Home;