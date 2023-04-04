import React, { useState, useEffect } from 'react';

const cards = [
  { id: 1, name: 'cat', image:'1.jpg', matched: false  },
  { id: 2, name: 'dog', image: 'image.png', matched: false },
  { id: 3, name: 'bird', image: 'bird.jpg', matched: false },
  { id: 4, name: 'fish', image: 'fish.jpg', matched: false },
  { id: 5, name: 'hamster', image: 'hamster.jpg', matched: false },
  { id: 6, name: 'rabbit', image: 'rabbit.jpg', matched: false },
];

const Card = ({ card, handleClick }) => {
  return (
    <div className="card" onClick={() => handleClick(card.id)}>
      <img src={card.image} alt={card.name} />
    </div>
  );
};

const Board = ({ cards }) => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (id) => {
    const card = cards.find((c) => c.id === id);

    if (selectedCards.length === 1 && selectedCards[0].id === id) {
      return;
    }

    if (selectedCards.length === 1) {
      if (selectedCards[0].name === card.name) {
        setSelectedCards([...selectedCards, card]);
      } else {
        setTimeout(() => setSelectedCards([]), 1000);
      }
    } else {
      setSelectedCards([card]);
    }
  };

  useEffect(() => {
    const matchedCards = selectedCards.filter((c) => c.matched);
    if (matchedCards.length === cards.length) {
      alert('You win!');
    }
  }, [selectedCards]);

  return (
    <div className="board">
      {cards.map((card) => (
        <Card key={card.id} card={card} handleClick={handleCardClick} />
      ))}
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      <h1>Memory Matching Game</h1>
      <Board cards={cards} />
    </div>
  );
};

export default Game;
