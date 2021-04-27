import React from "react"

const quotes = ["Hola", "Adios", "Hasta Luego", "Bienvenido", "Bon voyage", "Otra cita"]

function randomNumber(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

class QuoteBox extends React.Component {
    constructor(props) {
        super(props)
        this.changeQuote = this.changeQuote.bind(this)
        this.debug = this.debug.bind(this)
        
        this.state = {
            quote: randomNumber(quotes)
        }
    }
    changeQuote() {
        this.setState({
            quote: randomNumber(quotes)
        })
    }
    // Debug button
    debug() {
        return console.log(randomNumber(quotes))
    }

    ////////////// RENDER
    render() {
        return (
            <div>
                <h1>Random Quotes 2</h1>
                <p>{this.state.quote}</p>
                <button onClick={this.changeQuote}>Next quote</button>
                <button onClick={this.debug}>Debug</button>
            </div>
        )
    }
}

export default QuoteBox