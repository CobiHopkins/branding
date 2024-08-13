import React from 'react';

const quoteStyle = {
    color: '#2E4053',
    fontSize: '24px',
    textAlign: 'center',
    fontStyle: 'italic',
};

const authorStyle = {
    color: '#FF8488',
    fontSize: '18px',
    textAlign: 'left',
    fontWeight: 'bold',
};

const lineStyle = {
    width: '100%',
    border: '1px solid #2E4053',
};


function QuoteBar(props) {


    /* ToDo:
    *  Add a list of quotes to navigate through
    *  Animate the scrolling through each quote.
    */
    return (
        <>
        <div className="quote-bar">
            <hr style={lineStyle} />
            <p style={quoteStyle}>{props.quote}</p>
            <p style={authorStyle}>- {props.author}</p>
            <hr style={lineStyle} />
        </div>
    </>
    )
}

export default QuoteBar;