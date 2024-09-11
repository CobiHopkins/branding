import React, {useState, useEffect} from 'react';

import './quotebar.css';

const quotes = [
    {quote: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson"},
    {quote: "Sometimes it's the people no one imagines anything of who do the things that no one can imagine", author: "The Imitation Game"},
    {quote: "Every cloud has its silver lining, but it is sometimes difficult to get it to the mint.", author: "Don Marquis"}
];


function QuoteBar(props) {

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const quoteInterval = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
                setIsVisible(true);
            }, 1000)
        }, 5000);

        return () => {
            clearInterval(quoteInterval);
        }
    });


    /* ToDo:
    *  Add a list of quotes to navigate through
    *  Animate the scrolling through each quote.
    */
    return (
        <div className="quote-bar-container">
            <div className="quote-bar-text">
            <p className={`quote ${isVisible ? 'visible' : 'hidden'}`}>{quotes[currentQuoteIndex].quote}</p>
            <p className={`quoteAuthor ${isVisible ? 'visible' : 'hidden'}` }>- {quotes[currentQuoteIndex].author}</p>
            </div>
        </div>
    )
}

export default QuoteBar;