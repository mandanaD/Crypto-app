import "./FAQ.css"
import {Minus, Plus} from "react-feather";
import {useState} from "react";

const FAQ = (props) => {
    const [open, setOpen] = useState([])
    let FAQ = [
        {
            question: "What is a cryptocurrency exchange?",
            answer: "Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume."
        },
        {
            question: "What is crypto?",
            answer: "Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a blockchain and uses cryptography for security. It is decentralized and operates independently of a central bank.\n" +
                "Unlike traditional currencies, cryptocurrencies are not backed by a physical commodity or government, and their value is determined by market demand and supply. Cryptocurrencies can be used to buy goods and services, transfer funds, and trade in markets. Popular cryptocurrencies include Bitcoin, Ethereum, Litecoin, Ripple, and Cronos.\n" +
                "Many cryptocurrencies, like Bitcoin, are created through a process called mining, which involves solving complex mathematical equations to validate and record transactions on a blockchain. This mechanism is also called Proof of Work (PoW). Another consensus mechanism that has increased in popularity — as it is more energy efficient — is Proof of Stake (PoS). Instead of mining, PoS relies on network participants validating transactions. Ethereum, the second-largest cryptocurrency, uses this consensus mechanism."
        },
        {
            question: "What is Bitcoin?",
            answer: "Bitcoin is a cryptocurrency that operates on a peer-to-peer (P2P) network. It was created in 2009 by an unknown person or group using the pseudonym Satoshi Nakamoto. Bitcoin is the first and most well-known cryptocurrency, and it has gained significant popularity and value since its creation.\n" +
                "Unlike traditional fiat currency, which is controlled by central banks and governments, Bitcoin operates independently of any central authority. Transactions are verified and recorded on the blockchain, which is a distributed ledger that maintains a permanent and transparent record of all transactions."
        },
    ]
    const toggleHandler = (index) => {
        let nOpen = [...open]
        if (nOpen.includes(index)) {
            nOpen = nOpen.filter((item) => item !== index)
            setOpen(nOpen)
        } else {
            setOpen([index])
        }
    }
    let mapFAQ = FAQ.map((item, index) => {
        return (
            <div key={index} className={`box ${props.them + "-box"}`}>
                <div className="question">
                    <div>
                        <span className="num">{index + 1}.</span>
                        {item.question}
                    </div>
                    <div onClick={() => {
                        toggleHandler(index)
                    }}>
                        {open.includes(index) ? <Minus className={"sign"}/> : <Plus className={"sign"}/>}

                    </div>
                </div>
                <div className={`answer ${open.includes(index) && "show"}`}>
                    {item.answer}
                </div>
            </div>
        )
    })
    return (
        <div className="main">
            <div id={"title"}>
                Frequently Asked Questions
            </div>
            <div className="items">
                {mapFAQ}
            </div>

        </div>
    );
}

export default FAQ;