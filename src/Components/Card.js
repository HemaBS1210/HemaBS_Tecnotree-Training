import React, { useState } from 'react';
import './style.css';

const CARD_IMAGES = [
  'https://i.imgur.com/w5vGJ5g.png',
  'https://i.imgur.com/w5vGJ5g.png',
  'https://i.imgur.com/5tDNojK.png',
  'https://i.imgur.com/5tDNojK.png',
  'https://i.imgur.com/Xm83b1F.png',
  'https://i.imgur.com/Xm83b1F.png',
  'https://i.imgur.com/l6gqU6r.png',
  'https://i.imgur.com/l6gqU6r.png',
  'https://i.imgur.com/hZvnUwJ.png',
  'https://i.imgur.com/hZvnUwJ.png',
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Game() {
  const [cards, setCards] = useState(shuffleArray(CARD_IMAGES));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  function handleCardClick(index) {
    if (selectedCards.length < 2 && !selectedCards.includes(index)) {
      setSelectedCards([...selectedCards, index]);
    }
  }

  function resetSelection() {
    setSelectedCards([]);
  }

  function checkMatch() {
    if (selectedCards.length === 2) {
      const [index1, index2] = selectedCards;
      if (cards[index1] === cards[index2]) {
        setMatchedCards([...matchedCards, index1, index2]);
      }
      setTimeout(resetSelection, 1000);
    }
  }

  React.useEffect(() => {
    checkMatch();
  }, [selectedCards]);

  function restartGame() {
    setCards(shuffleArray(CARD_IMAGES));
    setSelectedCards([]);
    setMatchedCards([]);
  }

  return (
    <div className="game">
      <h1>Memory Matching Game</h1>
      <div className="board">
        {cards.map((image, index) => (
          <div
            className={`card ${selectedCards.includes(index) ? 'selected' : ''} ${matchedCards.includes(index) ? 'matched' : ''}`}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <img src={image} alt={`Card ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
}

export default Game;

