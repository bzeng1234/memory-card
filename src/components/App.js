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
    },
    {
      id: 7,
      clickCount: 0
    },
    {
      id: 8,
      clickCount: 0
    },
    {
      id: 9,
      clickCount: 0
    },
    {
      id: 10,
      clickCount: 0
    }
  ]

  const [cardStruct, setCardStruct] = useState(initCardStruct);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  let pressedTwice = false;

  useEffect(() => {
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }
    setCardStruct(shuffle(cardStruct));
  }, [cardStruct]);

  function handleCard(i) {
    let arr = cardStruct.slice();
    arr.forEach((elem) => {
      if(elem.id === i && elem.clickCount !== 1) {
        elem.clickCount++;
        return;
      } else if (elem.id === i && elem.clickCount === 1) {
        pressedTwice = true;
        return;
      }
    });
    
    if(!pressedTwice) {
      let newScore = currentScore + 1;
      setCurrentScore(newScore);
      setCardStruct(arr);
    } else {
      setBestScore(currentScore);
      setCurrentScore(0);
      setCardStruct(initCardStruct);
      pressedTwice = false;
    }
  }

  return (
    <>
      <Header currScore={currentScore} bestScore={bestScore}/>
      <Board cards={cardStruct} onClick={handleCard}/>
    </>
  );
}

export default App;