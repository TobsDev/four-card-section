import React from 'react'
import Card from '../card/card'
import './_cards.scss'
import JSONdata from '../../../content/cards'

const Cards = () => {


    return(
        
        <div className="cards">
            {JSONdata.cards.map((card) => {
                return <Card 
                    cardName={card.cardName}
                    cardTitle={card.cardTitle} 
                    cardCopy={card.cardCopy}
                    cardBorderColor={card.cardBorderColor}
                    cardURL={card.cardURL}
                ></Card>
            })}
        </div>
        
    )
}

export default Cards