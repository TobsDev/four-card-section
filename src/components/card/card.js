import React from 'react';
import './_card.scss';
import { graphql, useStaticQuery } from 'gatsby';

const Card = (props) => {
    let url = props.cardURL;

    const team = require("../../images/four-cards/icon-team-builder.svg");
    const karma = require("../../images/four-cards/icon-karma.svg");
    const calc = require("../../images/four-cards/icon-calculator.svg");
    const supervisor = require("../../images/four-cards/icon-supervisor.svg");
    
    const cardName = props.cardName;
    let icon = () => {
         switch (cardName) {
            case "team":
                return team;
                break;
            case "supervisor":
                return supervisor;
                break;
            case "karma":
                return karma;
                break;
            case "calc":
                return calc;
                break;
            default:
                return cardName;
                break;
        }
    }

    return (
    <div className={"card card--" + props.cardName + " card--" + props.cardBorderColor}>
        <h3 className="card__title">{props.cardTitle}</h3>
        <p className="card__copy">{props.cardCopy}</p>
        <img src={icon()} alt="" className="card__icon"/>
        
    </div>
)}

export default Card