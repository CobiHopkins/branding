import React, {useState, useEffect} from 'react';

const quoteStyle = {
    color: '#2E4053',
    fontSize: '24px',
    textAlign: 'center',
    fontStyle: 'italic',
};

const authorStyle = {
    color: '#F33A6A',
    fontSize: '18px',
    textAlign: 'left',
    fontWeight: 'bold',
};

const quotes = [
    {quote: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson"},
    {quote: "Sometimes it's the people no one imagines anything of who do the things that no one can imagine", author: "The Imitation Game"},
    {quote: "Every cloud has its silver lining, but it is sometimes difficult to get it to the mint.", author: "Don Marquis"}
]


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
            <div>
            <p className={isVisible ? 'visible' : 'hidden'} style={quoteStyle}>{quotes[currentQuoteIndex].quote}</p>
            <p className={isVisible ? 'visible' : 'hidden' } style={authorStyle}>- {quotes[currentQuoteIndex].author}</p>
            </div>
        </div>
    )
}

export default QuoteBar;