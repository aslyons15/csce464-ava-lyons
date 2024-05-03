import React, { useState, useEffect } from 'react';
import './CSCE464Final.css';

var darkModes;
var langModes;

const Games = ({ darkMode, langMode }) => {
  const [currentGame, setCurrentGame] = useState('NumberGuessing');
  darkModes = darkMode;
  langModes = langMode;

  const toggleGame = (game) => {
    setCurrentGame(game);
  };

  return (
    <div style={{ backgroundColor: darkMode ? 'black' : 'white' }} id='game-menu'>
  <h1 style={{ color: darkMode ? 'white' : 'black' }}>{langMode ? 'Menu des jeux' : 'Games Menu'}</h1>
  <div className='game-choice'>
    <button onClick={() => toggleGame('NumberGuessing')}>
      {langMode ? 'Jeu de devinette de nombres' : 'Number Guessing Game'}
    </button>
    <button onClick={() => toggleGame('WhacAMole')}>
      {langMode ? 'Jeu de tape-taupe' : 'Whac-a-Mole Game'}
    </button>
    <button onClick={() => toggleGame('ClickingGame')}>
      {langMode ? 'Jeu de clics' : 'Clicking Game'}
    </button>
    <button onClick={() => toggleGame('MemoryGame')}>
      {langMode ? 'Jeu de mémoire' : 'Memory Game'}
    </button>
  </div>
  <div>
        {currentGame === 'NumberGuessing' && <NumberGuessingGame />}
        {currentGame === 'WhacAMole' && <WhacAMoleGame />}
        {currentGame === 'ClickingGame' && <ClickingGame />}
        {currentGame === 'MemoryGame' && <MemoryGame />}
      </div>
    </div>
  );
}

function WhacAMoleGame() {
  const [result, setResult] = useState(0);
  const [hitPosition, setHitPosition] = useState(null);
  const [currentTime, setCurrentTime] = useState(60);
  const [difficulty, setDifficulty] = useState('Hard');
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const interval = (difficulty === 'Hard' || difficulty === 'Difficile') ? 500 : 1000;
    const timer = setInterval(randomSquare, interval);
    setTimerId(timer);
    return () => clearInterval(timer);
  }, [difficulty]);

  const countDown = () => {
    setCurrentTime(prevTime => prevTime - 1);
    if (currentTime === 0) {
      clearInterval(timerId);
      alert(langModes ? 'JEU TERMINÉ! Votre score final est de ' + result : 'GAME OVER! Your final score is ' + result);
    }
  };

  useEffect(() => {
    const countDownTimerId = setInterval(countDown, 1000);
    return () => clearInterval(countDownTimerId);
  }, []);

  const randomSquare = () => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    setHitPosition(randomIndex);
  };

  const handleSquareClick = (index) => {
    if (index === hitPosition) {
      setResult(prevResult => prevResult + 1);
      setHitPosition(null);
    }
  };


  const handleDifficultyToggle = () => {
    setDifficulty(prevDifficulty =>
      (prevDifficulty === 'Hard' || prevDifficulty === 'Difficile')
        ? (!langModes ? 'Simple' : 'Facile')
        : (!langModes ? 'Hard' : 'Difficile')
    );
  };

  const resetGame = () => {
    setResult(0);
    setCurrentTime(60);
  };

  return (
    <div>
      <div style={{ color: darkModes ? 'white' : 'black' }} >Mode:
        <button id="difficulty-toggle" onClick={handleDifficultyToggle}>{difficulty}</button>
        <div id='restart-mole'>
          <button onClick={resetGame}>{langModes ? 'Commencer une nouvelle partie' : 'Start new game'}</button>
        </div>
      </div>

      <h2 style={{ color: darkModes ? 'white' : 'black' }}>{langModes ? 'Votre score' : 'Your score'}: {result}</h2>
      <h2 style={{ color: darkModes ? 'white' : 'black' }}>{langModes ? 'Temps restant' : 'Time Left'}: {currentTime}</h2>

      <div className="grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
          <div
            key={index}
            class={`square ${index === hitPosition ? 'mole' : ''}`}
            onClick={() => handleSquareClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}


function NumberGuessingGame() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guesses, setGuesses] = useState([]);
  const [lastResult, setLastResult] = useState('');
  const [lowOrHi, setLowOrHi] = useState('');
  const [guessCount, setGuessCount] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function checkGuess() {
    const userGuess = Number(document.getElementById('guessField').value);
    const updatedGuesses = [...guesses, userGuess];
    setGuesses(updatedGuesses);
    setGuessCount(guessCount + 1);
    document.getElementById('guessField').value = '';
    document.getElementById('guessField').focus();

    if (userGuess === randomNumber) {
      setLastResult(langModes ? 'Félicitations! Vous avez trouvé!' : 'Congratulations! You got it right!');
      setLowOrHi('');
      setIsGameOver(true);
    } else if (guessCount === 10) {
      setLastResult(langModes ? '!!!FIN DE JEU!!!' : '!!!GAME OVER!!!');
      setLowOrHi('');
      setIsGameOver(true);
    } else {
      setLastResult(langModes ? 'Faux!' : 'Wrong!');
      if (userGuess < randomNumber) {
        setLowOrHi(langModes ? 'La dernière supposition était trop basse!' : 'Last guess was too low!');
      } else if (userGuess > randomNumber) {
        setLowOrHi(langModes ? 'La dernière supposition était trop haute!' : 'Last guess was too high!');
      }
    }
  }

  function resetGame() {
    setRandomNumber(generateRandomNumber());
    setGuesses([]);
    setLastResult('');
    setLowOrHi('');
    setGuessCount(1);
    setIsGameOver(false);
  }

  return (
    <div>
      <h1 style={{ color: darkModes ? 'white' : 'black' }}>{langModes ? 'Jeu de devinette de nombres' : 'Number guessing game'}</h1>
      <p style={{ color: darkModes ? 'white' : 'black' }}>
        {langModes ? 'Nous avons sélectionné un nombre aléatoire entre 1 et 100. Essayez de deviner en 10 tours ou moins. Nous vous dirons si votre supposition était trop élevée ou trop basse.' :
          'We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We\'ll tell you if your guess was too high or too low.'}
      </p>
      <div className="form">
        <label style={{ color: darkModes ? 'white' : 'black' }} htmlFor="guessField">{langModes ? 'Entrez une supposition : ' : 'Enter a guess: '}</label>
        <input type="text" id="guessField" className="guessField" />
        <input type="button" value={langModes ? 'Soumettre une supposition' : 'Submit guess'} className="guessSubmit" onClick={checkGuess} />
      </div>
      <div className="resultParas">
        <p className="guesses">{guesses.join(' ')}</p>
        <p className="lastResult" style={{ color: darkModes ? 'white' : 'black' }}>{lastResult}</p>
        <p className="lowOrHi" style={{ color: darkModes ? 'white' : 'black' }}>{lowOrHi}</p>
      </div>
      {isGameOver && (
        <button onClick={resetGame}>{langModes ? 'Commencer une nouvelle partie' : 'Start new game'}</button>
      )}
    </div>

  );
};


function ClickingGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isGameOver) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsGameOver(true);
    }
  }, [timeLeft, isGameOver]);

  const handleClick = () => {
    setScore(score + 1);
  };

  const handleRestart = () => {
    setScore(0);
    setTimeLeft(10);
    setIsGameOver(false);
  };

  return (
    <div style={{ color: darkModes ? 'white' : 'black' }}>
      <h2>{langModes ? 'Jeu de clics' : 'Clicking Game'}</h2>
      <p>{langModes ? 'Cliquez sur le bouton autant de fois que possible en 10 secondes !' : 'Click the button as many times as possible within 10 seconds!'}</p>
      <button onClick={handleClick} disabled={isGameOver}>{langModes ? 'Cliquez ici !' : 'Click Me!'}</button>
      <p>{langModes ? 'Temps restant : ' : 'Time Left: '} {timeLeft}</p>
      <p>{langModes ? 'Score : ' : 'Score: '} {score}</p>
      {isGameOver && (
        <div>
          <p>{langModes ? 'Fin du jeu !' : 'Game Over!'}</p>
          <p>{langModes ? 'Score final : ' : 'Final Score: '} {score}</p>
          <button onClick={handleRestart}>{langModes ? 'Redémarrer' : 'Restart'}</button>
        </div>
      )}
    </div>

  );
}


function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [selectedCardIds, setSelectedCardIds] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const cardsArray = generateCards();
    setCards(cardsArray);
  }, []);

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setIsGameOver(true);
    }
  }, [matchedPairs, cards]);

  useEffect(() => {
    if (timeLeft > 0 && !isGameOver) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsGameOver(true);
    }
  }, [timeLeft, isGameOver]);

  const generateCards = () => {
    const symbols = ['🍉', '🍇', '🍌', '🍊', '🍎', '🍓', '🍒', '🍑'];
    const shuffledSymbols = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    return shuffledSymbols.map((symbol, index) => ({ id: index, symbol, flipped: false, matched: false }));
  };

  const handleCardClick = (cardId) => {
    if (selectedCardIds.length === 2 || isGameOver) return;
    setSelectedCardIds([...selectedCardIds, cardId]);
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, flipped: true } : card
      )
    );
  };

  useEffect(() => {
    if (selectedCardIds.length === 2) {
      const [firstCardId, secondCardId] = selectedCardIds;
      const [firstCard, secondCard] = cards.filter(
        (card) => card.id === firstCardId || card.id === secondCardId
      );
      if (firstCard.symbol === secondCard.symbol) {
        setMatchedPairs((prevPairs) => prevPairs + 1);
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCardId || card.id === secondCardId
              ? { ...card, matched: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCardId || card.id === secondCardId
                ? { ...card, flipped: false }
                : card
            )
          );
        }, 1000);
      }
      setMoves((prevMoves) => prevMoves + 1);
      setSelectedCardIds([]);
    }
  }, [cards, selectedCardIds]);

  const handleRestart = () => {
    setCards(generateCards());
    setSelectedCardIds([]);
    setMatchedPairs(0);
    setMoves(0);
    setTimeLeft(60);
    setIsGameOver(false);
  };

  return (
    <div style={{ color: darkModes ? 'white' : 'black' }}>
      <h2>{langModes ? 'Jeu de mémoire' : 'Memory Game'}</h2>
      <p>{langModes ? 'Associez des paires de cartes avant la fin du temps imparti !' : 'Match pairs of cards before time runs out!'}</p>
      <div className="cards">
        {cards.reduce((rows, card, index) => {
          if (index % 4 === 0) {
            rows.push([]);
          }
          rows[rows.length - 1].push(
            <div
              key={card.id}
              className={`card ${card.matched ? 'matched' : ''}`}
              onClick={() => handleCardClick(card.id)}
            >
              {card.flipped || card.matched ? <span className='game-item'>{card.symbol}</span> : <span className='game-item'>&#9733;</span>}
            </div>
          );
          return rows;
        }, []).map((row, rowIndex) => (
          <div key={rowIndex} className="card-row">
            {row}
          </div>
        ))}
      </div>

      <div>
        <p>{langModes ? 'Mouvements : ' : 'Moves: '} {moves}</p>
        <p>{langModes ? 'Paires assorties : ' : 'Matched Pairs: '} {matchedPairs}</p>
        <p>{langModes ? 'Temps restant : ' : 'Time Left: '} {timeLeft}</p>
        {isGameOver && (
          <div>
            <p>{langModes ? 'Fin du jeu !' : 'Game Over!'}</p>
            <p>{langModes ? 'Mouvements finaux : ' : 'Final Moves: '} {moves}</p>
            <p>{langModes ? 'Paires assorties finales : ' : 'Final Matched Pairs: '} {matchedPairs}</p>
            <button onClick={handleRestart}>{langModes ? 'Redémarrer' : 'Restart'}</button>
          </div>
        )}
      </div>
    </div>

  );
}

export default Games;