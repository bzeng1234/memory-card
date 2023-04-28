import React from "react";

function Card(props) {

    function renderCards() {
        const arr = props.cards.map((element) => <div key={element.id} className="card" onClick={() => props.onClick(element.id)}>{element.id}</div>);
        return arr;
    };

    return (
        <>
        {renderCards()}
        </>
    );
};

export default Card;