import React from 'react';
import Scoreboard from './Scoreboard';
import '../styles/header.css'

function Header(props) {
  return (
    <header>
        <h1 className='header-title'>Memory Card!</h1>
        <Scoreboard currScore={props.currScore} bestScore={props.bestScore}/>
    </header>
  );
}

export default Header;