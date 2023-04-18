import React, { useState } from "react";
import Confetti from "react-confetti";
import Layout from "../../components/Layout";
import "../../assets/css/pogodi-broj.scss";

function GuessNumberGame() {
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 1000) + 1
  );
  const [guessCount, setGuessCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [remainingGuesses, setRemainingGuesses] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [borderColor, setBorderColor] = useState("var(--crnaBg)");
  const [showConfetti, setShowConfetti] = useState(false);

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const guessNumber = parseInt(guess);

    if (isNaN(guessNumber)) {
      setFeedback("Unesi broj.");
    } else if (guessNumber < targetNumber) {
      setFeedback("Prenisko!");
      setGuessCount(guessCount + 1);
      setRemainingGuesses(remainingGuesses - 1);
    } else if (guessNumber > targetNumber) {
      setFeedback("Previsoko!");
      setGuessCount(guessCount + 1);
      setRemainingGuesses(remainingGuesses - 1);
    } else {
      setFeedback(
        `Čestitam, pogodio si broj iz ${guessCount + 1} pokušaja!`
      );
      setGameOver(true);
      setShowConfetti(true);
      setBorderColor("green");
    }

    if (remainingGuesses <= 1 && !gameOver) {
      setFeedback(`Kraj igre. Broj je bio ${targetNumber}.`);
      setGameOver(true);
      setBorderColor("red");
    }
  }

  function handleResetClick() {
    setTargetNumber(Math.floor(Math.random() * 1000) + 1);
    setGuessCount(0);
    setGuess("");
    setFeedback("");
    setRemainingGuesses(10);
    setGameOver(false);
    setShowConfetti(false);
    setBorderColor("var(--crnaBg)");
  }

  return (
    <Layout>
      <div
        style={{ border: `5px solid ${borderColor}` }}
        className="broj-polje"
      >
        {showConfetti && <Confetti className="konfete" />}

        <h1>Pogodi broj između 1 i 1000</h1>

        <form onSubmit={handleFormSubmit} className="form" >
          <label>
            <p>Unesi broj:</p>
            <input type="number" value={guess} onChange={handleInputChange} className="input" />
          </label>
          <button type="submit" className="dugme-pokusaj">Pokušaj</button>
        </form>

        <p className="feedback">{feedback}</p>

        <p className="preostalo-pokusaja">Preostalo pokušaja: {remainingGuesses}</p>

        <button onClick={handleResetClick} className="dugme-ponovo">Igraj ponovo</button>
      </div>
    </Layout>
  );
}

export default GuessNumberGame;










// import React, { useState } from "react";
// import Confetti from "react-confetti";
// import Layout from '../../components/Layout'

// import "../../assets/css/pogodi-broj.scss"

// function GuessNumberGame() {
// //   const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
//   const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 1000) + 1);
//   const [guessCount, setGuessCount] = useState(0);
//   const [guess, setGuess] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [remainingGuesses, setRemainingGuesses] = useState(10);
//   const [gameOver, setGameOver] = useState(false);
//   const [backgroundColor, setBackgroundColor] = useState("var(--crnaBg)");
//   const [showConfetti, setShowConfetti] = useState(false);

//   function handleInputChange(event) {
//     setGuess(event.target.value);
//   }

//   function handleFormSubmit(event) {
//     event.preventDefault();

//     const guessNumber = parseInt(guess);

//     if (isNaN(guessNumber)) {
//       setFeedback("Unesi broj.");
//     } else if (guessNumber < targetNumber) {
//       setFeedback("Prenisko!");
//       setGuessCount(guessCount + 1);
//       setRemainingGuesses(remainingGuesses - 1);
//     } else if (guessNumber > targetNumber) {
//       setFeedback("Previsoko!");
//       setGuessCount(guessCount + 1);
//       setRemainingGuesses(remainingGuesses - 1);
//     } else {
//       setFeedback(`Čestitam, pogodio si broj u ${guessCount + 1} pokušaja!`);
//       setGameOver(true);
//       setShowConfetti(true);
//       setBackgroundColor("green");
//     }

//     if (remainingGuesses <= 1 && !gameOver) {
//       setFeedback(`Kraj igre. Broj je bio ${targetNumber}.`);
//       setGameOver(true);
//       setBackgroundColor("red");
//     }
//   }

//   function handleResetClick() {
//     // setTargetNumber(Math.floor(Math.random() * 100) + 1);
//     setTargetNumber(Math.floor(Math.random() * 1000) + 1);
//     setGuessCount(0);
//     setGuess("");
//     setFeedback("");
//     setRemainingGuesses(10);
//     setGameOver(false);
//     setShowConfetti(false);
//     setBackgroundColor("var(--crnaBg)");
//   }

//   return (
//     <Layout>
//         <div style={{ backgroundColor }} className="broj-polje">

//         {showConfetti && <Confetti />}

//         <h1>Pogodi broj između 1 i 1000</h1>

//         <form onSubmit={handleFormSubmit}>
//             <label>
//             <p>Unesi broj:</p>
//             <input type="number" value={guess} onChange={handleInputChange} />
//             </label>
//             <button type="submit">Pokušaj</button>
//         </form>

//         <p>{feedback}</p>

//         <p>Preostalo pokušaja: {remainingGuesses}</p>

//         <button onClick={handleResetClick}>Igraj ponovo</button>
//         </div>
//     </Layout>
//   );
// }

// export default GuessNumberGame;



