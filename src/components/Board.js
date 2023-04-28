import React from "react";
import '../styles/board.css'
import Card from "./Card";

function Board(props) {
    return (
        <div className="board">
            <Card cards={props.cards} onClick={props.onClick}/>
        </div>
    );
};

export default Board;