import React from 'react'
import Card from '../card/card'
import './_cards.scss'

const Cards = () => {
    return(
        <div className="cards">
            <Card 
                cardName="supervisor"
                cardTitle="Supervisor" 
                cardCopy="Monitors activity to identify project roadblocks" 
                cardBorderColor="cyan"
                cardURL="../../images/four-cards/icon-supervisor.svg"
            ></Card>
            <Card 
                cardName="team"
                cardTitle="Team Builder" 
                cardCopy="Lorem ipsum dolor sit amet consectetur, adipisicing elit." 
                cardBorderColor="orange"
                cardURL="../../images/four-cards/icon-team-builder.svg"
            ></Card>
            <Card 
                cardName="calc"
                cardTitle="Calculator" 
                cardCopy="Lorem ipsum dolor sit amet consectetur, adipisicing elit." 
                cardBorderColor="red"
                cardURL="../../images/four-cards/icon-calculator.svg"
            ></Card>
            <Card 
                cardName="karma"
                cardTitle="Karma" 
                cardCopy="Lorem ipsum dolor sit amet consectetur, adipisicing elit." 
                cardBorderColor="blue"
                cardURL="../../images/four-cards/icon-karma.svg"
            ></Card>
        </div>
        
    )
}

export default Cards