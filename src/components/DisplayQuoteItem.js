import React, {Component} from 'react';

class DisplayQuoteItem extends Component {
 
    render() {
        const {character,  image, quote } = this.props;
        return (
            <>
                <p><strong>{character}</strong></p>
                <p>{quote}</p>
                <img src={image} alt={character} />
            </>
        );
    }
}

export default DisplayQuoteItem;

// results
// {
//     character: "Homer Simpson";
//     characterDirection: "Right";
//     image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939";    ​​
//     quote: "I hope I didn't brain my damage."
// }
