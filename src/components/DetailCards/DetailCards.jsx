import React from 'react';
import './DetailCards.css';

const DetailCards = ({ cardname, cardvalue }) => {
    return ( 
        <div className = "detail-cards-container">
                <div className = "card-name" > { cardname } </div>
                <div className = "card-value" > { cardvalue } </div> 
        </div>
    );
};

export default DetailCards;
