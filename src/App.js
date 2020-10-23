import React, {Component} from 'react';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';

// API entry point
const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=5'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.getQuotes = this.getQuotes.bind(this);
  }
  // call the getQuotes method at first client render
  componentDidMount(){
    this.getQuotes();
  }
  getQuotes(){
    // AJAX request
    axios.get(url)
      // check Ajax request answer in console
      .then(response => console.log("datas from API: ",response.data))
  }
  render() {
    return (
      // <DisplayQuote quotes={this.getQuotes}/>
      <>
      </>
    );
  }
}

export default App;


// [
//   {
//    "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
//    "character": "Nelson Muntz",
//    "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
//    "characterDirection" : "Left"
//   }
// ]

// // Feel free to download this HTML and edit it, to use another Pokemon ID
// const quoteId = 1;
// const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=${quoteId}`;
// axios.get(url)
//   .then(function(response) {
//     return response.data; // response.data instead of response.json() with fetch
//   })
//   .then(function(quote) {
//     console.log('data decoded from JSON:', quote);