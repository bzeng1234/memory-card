import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../styles/app.css'
import Board from './Board';

function App() {
  let initCardStruct = [
    {
      id: 1,
      clickCount: 0
    },
    {
      id: 2,
      clickCount: 0
    },
    {
      id: 3,
      clickCount: 0
    },
    {
      id: 4,
      clickCount: 0
    },
    {
      id: 5,
      clickCount: 0
    },
    {
      id: 6,
      clickCount: 0
    }
  ]
  const [cardStruct, setCardStruct] = useState(initCardStruct);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    console.log('card clicked');
    let newScore = currentScore + 1;
    setCurrentScore(newScore);
  }, [cardStruct, setCurrentScore]);


  useEffect(() => {
    console.log('score change')
  }, [currentScore]);

  const [bestScore, setBestScore] = useState(0);
  const [pressedTwice, setPressedTwice] = useState(false);

  useEffect(() => {
  }, [pressedTwice]);

  function handleCard(i) {
    let arr = cardStruct.slice();
    arr.forEach((elem) => {
      if(elem.id === i) {
        elem.clickCount++;
        return;
      }
    });

      setCardStruct(arr);
      
  }

  return (
    <>
      <Header currScore={currentScore} bestScore={bestScore}/>
      <Board cards={cardStruct} onClick={handleCard}/>
    </>
  );
}

export default App;