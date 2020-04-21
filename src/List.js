import React from 'react';
import Card from './Card'

import './List.css'

function List(props) {
    const cardList = (props.cards).map((card, i) => {
        return <Card key={`${card}_${i}`} title={card.title} content ={card.content} />
    })
    return(
        <section className="List">
            <header className="List-header">{props.header}</header>
            <div className="List-cards">
                {cardList}
            </div>
        </section>
    );
}

export default List;