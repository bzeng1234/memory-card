import React from "react";

function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <div className="best-score">Best Score: {props.bestScore}</div>
            <div className="current-score">Current Score: {props.currScore}</div>
        </div>
    );
};

export default Scoreboard;