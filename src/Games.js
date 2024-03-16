import React, { useState, useEffect } from 'react';
import './CSCE464Final.css';

export default function Games() {
  const [currentGame, setCurrentGame] = useState('NumberGuessing');

  const toggleGame = (game) => {
    setCurrentGame(game);
  };

  return (
    <div id='game-menu'>
      <h1>Games Menu</h1>
      <div className='game-choice'>
        <button onClick={() => toggleGame('NumberGuessing')}>Number Guessing Game</button>
        <button onClick={() => toggleGame('WhacAMole')}>Whac-a-Mole Game</button>
        <button onClick={() => toggleGame('ClickingGame')}>Clicking Game</button>
        <button onClick={() => toggleGame('MemoryGame')}>Memory Game</button>
        <button onClick={() => toggleGame('Hangman')}>Hangman Game</button>
      </div>
      <div>
        {currentGame === 'NumberGuessing' && <NumberGuessingGame />}
        {currentGame === 'WhacAMole' && <WhacAMoleGame />}
        {currentGame === 'ClickingGame' && <ClickingGame />}
        {currentGame === 'MemoryGame' && <MemoryGame />}
        {currentGame === 'Hangman' && <HangmanGame />}
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
    const interval = difficulty === 'Hard' ? 500 : 1000;
    const timer = setInterval(randomSquare, interval);
    setTimerId(timer);
    return () => clearInterval(timer);
  }, [difficulty]);

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

  const countDown = () => {
    setCurrentTime(prevTime => prevTime - 1);
    if (currentTime === 0) {
      clearInterval(timerId);
      alert('GAME OVER! Your final score is ' + result);
    }
  };

  const handleDifficultyToggle = () => {
    setDifficulty(prevDifficulty => prevDifficulty === 'Hard' ? 'Simple' : 'Hard');
  };

  const resetGame = () => {
    setResult(0);
    setCurrentTime(60);
  };

  return (
    <div>
      <div>Mode:
        <button id="difficulty-toggle" onClick={handleDifficultyToggle}>{difficulty}</button>
        <div id='restart-mole'>
          <button onClick={resetGame}>Start new game</button>
        </div>
      </div>


      <h2>Your score: {result}</h2>
      <h2>Time Left: {currentTime}</h2>
      <div className="grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
          <div
            key={index}
            className={`square ${index === hitPosition ? 'mole' : ''}`}
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
      setLastResult('Congratulations! You got it right!');
      setLowOrHi('');
      setIsGameOver(true);
    } else if (guessCount === 10) {
      setLastResult('!!!GAME OVER!!!');
      setLowOrHi('');
      setIsGameOver(true);
    } else {
      setLastResult('Wrong!');
      if (userGuess < randomNumber) {
        setLowOrHi('Last guess was too low!');
      } else if (userGuess > randomNumber) {
        setLowOrHi('Last guess was too high!');
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
      <h1>Number guessing game</h1>
      <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>
      <div className="form">
        <label htmlFor="guessField">Enter a guess: </label>
        <input type="text" id="guessField" className="guessField" />
        <input type="button" value="Submit guess" className="guessSubmit" onClick={checkGuess} />
      </div>
      <div className="resultParas">
        <p className="guesses">{guesses.join(' ')}</p>
        <p className="lastResult">{lastResult}</p>
        <p className="lowOrHi">{lowOrHi}</p>
      </div>
      {isGameOver && (
        <button onClick={resetGame}>Start new game</button>
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
    <div>
      <h2>Clicking Game</h2>
      <p>Click the button as many times as possible within 10 seconds!</p>
      <button onClick={handleClick} disabled={isGameOver}>Click Me!</button>
      <p>Time Left: {timeLeft}</p>
      <p>Score: {score}</p>
      {isGameOver && (
        <div>
          <p>Game Over!</p>
          <p>Final Score: {score}</p>
          <button onClick={handleRestart}>Restart</button>
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
  }, [selectedCardIds]);

  const handleRestart = () => {
    setCards(generateCards());
    setSelectedCardIds([]);
    setMatchedPairs(0);
    setMoves(0);
    setTimeLeft(60);
    setIsGameOver(false);
  };

  return (
    <div>
      <h2>Memory Game</h2>
      <p>Match pairs of cards before time runs out!</p>
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
              {card.flipped || card.matched ? <span class='game-item'>{card.symbol}</span> : <span class='game-item'>&#9733;</span>}
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
        <p>Moves: {moves}</p>
        <p>Matched Pairs: {matchedPairs}</p>
        <p>Time Left: {timeLeft}</p>
        {isGameOver && (
          <div>
            <p>Game Over!</p>
            <p>Final Moves: {moves}</p>
            <p>Final Matched Pairs: {matchedPairs}</p>
            <button onClick={handleRestart}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
}

function HangmanGame() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [wordFetched, setWordFetched] = useState(false);

  const fetchWord = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
      const data = await response.json();
      setWord(data[0].toLowerCase());
      setWordFetched(true);
    } catch (error) {
      console.error('Error fetching word:', error);
    }
  };

  const resetGame = () => {
    setWord('');
    setGuessedLetters([]);
    setRemainingAttempts(6);
    setGameOver(false);
    setGameWon(false);
    setWordFetched(false); // Reset wordFetched state
  };

  const handleLetterGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prevGuessedLetters) => [...prevGuessedLetters, letter]);
      if (!word.includes(letter)) {
        setRemainingAttempts((prevAttempts) => prevAttempts - 1);
      }
    }
  };

  useEffect(() => {
    if (!wordFetched) {
      fetchWord();
    }
    if (remainingAttempts === 0) {
      setGameOver(true);
    }
    const guessedWord = guessedLetters.join('');
    if (guessedWord === word) {
      setGameWon(true);
    }
  }, [guessedLetters, remainingAttempts, word, wordFetched]);

  const renderWord = () => {
    return word.split('').map((char, index) => (
      <span key={index}>{guessedLetters.includes(char) || char === ' ' ? char : '_'}</span>
    ));
  };

  return (
    <div>
      <h1>Hangman Game</h1>
      <div className="hangman">
        <div className="hangman-body">
          {remainingAttempts < 6 && <div className="head"></div>}
          {remainingAttempts < 5 && <div className="body"></div>}
          {remainingAttempts < 4 && <div className="left-arm"></div>}
          {remainingAttempts < 3 && <div className="right-arm"></div>}
          {remainingAttempts < 2 && <div className="left-leg"></div>}
          {remainingAttempts < 1 && <div className="right-leg"></div>}
        </div>
      </div>

      <div className="word">{renderWord()}</div>
      {!gameOver && !gameWon && (
        <div className="keyboard">
          {Array.from(Array(26), (_, i) => String.fromCharCode(65 + i)).map((letter, index) => (
            <button key={index} onClick={() => handleLetterGuess(letter.toLowerCase())} disabled={guessedLetters.includes(letter.toLowerCase())}>
              {letter}
            </button>
          ))}
        </div>
      )}

      {gameOver && <h2>Game Over! The word was "{word}".</h2>}
      {gameWon && (
        <div>
          <h2>Congratulations! You won!</h2>
          <p>Well done! You successfully guessed the word. Keep up the good work!</p>
        </div>
      )}
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}