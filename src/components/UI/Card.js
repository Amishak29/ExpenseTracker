import React from 'react';
// it replaces the whole thing inside the card in enpenseitem.js
    
    // by changing div to card in js here in return className card is replaced to expense item 
    //but we do not want to replace className
import '../UI/Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
        // to not replace its inner part of card we use props.children
}
export default Card;