import React, { useState } from "react";

function GuessNumberGame() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guessCount, setGuessCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [remainingGuesses, setRemainingGuesses] = useState(10);

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const guessNumber = parseInt(guess);

    if (isNaN(guessNumber)) {
      setFeedback("Please enter a valid number.");
    } else if (guessNumber < targetNumber) {
      setFeedback("Too low!");
      setGuessCount(guessCount + 1);
      setRemainingGuesses(remainingGuesses - 1);
    } else if (guessNumber > targetNumber) {
      setFeedback("Too high!");
      setGuessCount(guessCount + 1);
      setRemainingGuesses(remainingGuesses - 1);
    } else {
      setFeedback(`Congratulations, you guessed the number in ${guessCount + 1} attempts!`);
      setTargetNumber(Math.floor(Math.random() * 100) + 1);
      setGuessCount(0);
      setGuess("");
      setRemainingGuesses(10);
    }

    if (remainingGuesses <= 0) {
      setFeedback(`Game over. The number was ${targetNumber}.`);
      setTargetNumber(Math.floor(Math.random() * 100) + 1);
      setGuessCount(0);
      setGuess("");
      setRemainingGuesses(10);
    }
  }

  function handleResetClick() {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuessCount(0);
    setGuess("");
    setFeedback("");
    setRemainingGuesses(10);
  }

  return (
    <div>
      <h1>Guess the number</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Enter a number between 1 and 100:
          <input type="number" value={guess} onChange={handleInputChange} />
        </label>
        <button type="submit">Guess</button>
      </form>
      <p>{feedback}</p>
      <p>Remaining guesses: {remainingGuesses}</p>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default GuessNumberGame;






















// import React, { useState } from "react";

// function GuessNumberGame() {
//   const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
//   const [guessCount, setGuessCount] = useState(0);
//   const [guess, setGuess] = useState("");
//   const [feedback, setFeedback] = useState("");

//   function handleInputChange(event) {
//     setGuess(event.target.value);
//   }

//   function handleFormSubmit(event) {
//     event.preventDefault();

//     const guessNumber = parseInt(guess);

//     if (isNaN(guessNumber)) {
//       setFeedback("Please enter a valid number.");
//     } else if (guessNumber < targetNumber) {
//       setFeedback("Too low!");
//       setGuessCount(guessCount + 1);
//     } else if (guessNumber > targetNumber) {
//       setFeedback("Too high!");
//       setGuessCount(guessCount + 1);
//     } else {
//       setFeedback(`Congratulations, you guessed the number in ${guessCount + 1} attempts!`);
//       setTargetNumber(Math.floor(Math.random() * 100) + 1);
//       setGuessCount(0);
//       setGuess("");
//     }
//   }

//   function handleResetClick() {
//     setTargetNumber(Math.floor(Math.random() * 100) + 1);
//     setGuessCount(0);
//     setGuess("");
//     setFeedback("");
//   }

//   return (
//     <div>
//       <h1>Guess the number</h1>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Enter a number between 1 and 100:
//           <input type="number" value={guess} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Guess</button>
//       </form>
//       <p>{feedback}</p>
//       <button onClick={handleResetClick}>Reset</button>
//     </div>
//   );
// }

// export default GuessNumberGame;
