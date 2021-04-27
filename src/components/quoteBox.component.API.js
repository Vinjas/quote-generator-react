import React from "react"

//const quotes = ["Hola", "Adios", "Hasta Luego", "Bienvenido", "Bon voyage", "Otra cita"]

function randomNumber(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

class QuoteBox extends React.Component {
    constructor(props) {
        super(props)
        this.changeQuote = this.changeQuote.bind(this)
                
        this.debug = this.debug.bind(this)
        
        this.state = {
            quote: "",
            author: ""
        }
    }
    // API GET - RANDOM QUOTE
    componentDidMount() {
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

    // Debug button
    debug() {
        return console.log(randomNumber())
    }

    ////////////// RENDER
    render() {
        return (
            <div>
                <h1>Random Quotes 2</h1>
                <h2>{this.state.quote}</h2>
                <h3>{this.state.author}</h3>
                <button onClick={this.changeQuote}>Next quote</button>
                <button onClick={this.debug}>Debug</button>
            </div>
        )
    }
}

export default QuoteBox