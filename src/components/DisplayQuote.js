import React from 'react';
import DisplayQuoteItem from './DisplayQuoteItem';

const DisplayQuote = ({quotes}) => {
    return (
        <>
            {quotes.map((quote)=>(
            <DisplayQuoteItem key={quote.character} {...quote}/>))}
        </>
    )   
}
export default DisplayQuote;

