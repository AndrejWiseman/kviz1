import React, { useState, useEffect } from "react"

const Hangman = () => {
  const words = ["apple", "banana", "orange", "pear", "peach"]
  const [answer, setAnswer] = useState("")
  const [guesses, setGuesses] = useState([])
  const [mistakes, setMistakes] = useState(0)

  useEffect(() => {
    setAnswer(words[Math.floor(Math.random() * words.length)])
  }, [])

  const handleGuess = (letter) => {
    if (!guesses.includes(letter)) {
      setGuesses([...guesses, letter])
      if (!answer.includes(letter)) {
        setMistakes(mistakes + 1)
      }
    }
  }

  const showAnswer = () => {
    return answer.split("").map((letter, index) => (
      <span key={index} className="answer-letter">
        {guesses.includes(letter) ? letter : "_"}
      </span>
    ))
  }

  const showHangman = () => {
    const images = [
      "https://i.imgur.com/s3q6mB1.png",
      "https://i.imgur.com/JQx6gGi.png",
      "https://i.imgur.com/YlUn1N5.png",
      "https://i.imgur.com/H9XxG30.png",
      "https://i.imgur.com/1uG7j29.png",
      "https://i.imgur.com/9uX7VjK.png",
    ]
    return <img src={images[mistakes]} alt="Hangman" />
  }

  const showAlphabet = () => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode("A".charCodeAt(0) + i)).map((letter) => (
      <button key={letter} onClick={() => handleGuess(letter)} disabled={guesses.includes(letter)}>
        {letter}
      </button>
    ))
  }

  const isGameOver = () => {
    return mistakes >= 6 || answer.split("").every((letter) => guesses.includes(letter))
  }

  return (
    <div className="hangman">
      <h1>Hangman Game</h1>
      <div className="hangman-image">{showHangman()}</div>
      <div className="hangman-answer">{showAnswer()}</div>
      <div className="hangman-alphabet">{showAlphabet()}</div>
      {isGameOver() && (
        <div className="game-over">
          {mistakes >= 6 ? <p>You lost. The answer was "{answer}".</p> : <p>You won!</p>}
          <button onClick={() => window.location.reload()}>Play again</button>
        </div>
      )}
    </div>
  )
}

export default Hangman
