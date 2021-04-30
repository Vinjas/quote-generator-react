import React from "react"
import "./quoteBox.css"
import comillas from "../assets/quote-left-solid.svg"
import tweeter from "../assets/twitter-square-brands.svg"
import tumblr from "../assets/tumblr-square-brands.svg"
import {ShareTweet, ShareTumblr} from "./ShareButtons.js"

class QuoteBox extends React.Component {
    constructor(props) {
        super(props)
        this.changeQuote = this.changeQuote.bind(this)
                        
        this.state = {
            quote: "",
            author: ""
        }
    }
    // API GET - RANDOM QUOTE
    componentDidMount() {
        document.body.style.backgroundColor = "#33475B"

        fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "f655c92bf4msh5ec7b8a43cf2d4cp1d1810jsn287bc00e32b3",
            "x-rapidapi-host": "quotes15.p.rapidapi.com"
        }   
    })
    .then(response => response.json())
    .then(response => {
        this.setState({
            quote: response.content,
            author: response.originator.name
        })
    })
    .catch(err => {
        console.error(err);
    })
    }
        
    // BUTTON NEXT
    changeQuote() {
        fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f655c92bf4msh5ec7b8a43cf2d4cp1d1810jsn287bc00e32b3",
                "x-rapidapi-host": "quotes15.p.rapidapi.com"
            }   
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                quote: response.content,
                author: response.originator.name
            })
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        return (
            <div className="container-fluid" id="quote-box">
                <div id="quote-text">
                    <img 
                        id="comillas"
                        src={comillas} 
                        alt="svg"
                        width="33px"
                        height="33px"
                        position
                    />

                    {/* TEXT QUOTE */}
                    <p id="text">{this.state.quote}</p>
                    <p id="author">{this.state.author}</p>

                </div>
                <div id="button-row">
                    <div className="row">
                        
                        {/* TWITTER BUTTON */}
                        <div className="col-2">
                            <a 
                                href={ShareTweet(this.state.quote, this.state.author)}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img 
                                    src={tweeter} 
                                    id="tweet-quote" 
                                    cursor="pointer"    
                                />
                            </a>
                        </div>

                        {/* TUMBLR BUTTON */}
                        <div className="col-2">
                            <a 
                                href={ShareTumblr(this.state.quote)}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img 
                                    src={tumblr} 
                                    id="tumblr-quote" 
                                />
                            </a>
                        </div>

                        {/* NEXT QUOTE BUTTON */}
                        <div className="col-8 d-flex justify-content-end">
                            <button 
                                id="new-quote" 
                                onClick={this.changeQuote}
                            >
                            <i class="fas fa-redo-alt"></i> Next quote</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuoteBox