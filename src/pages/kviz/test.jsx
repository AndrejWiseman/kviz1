// import React, { useState, useEffect } from "react"
// // import { graphql } from "gatsby"

// import Layout from '../../components/Layout'

// // import flagsData from "../data/flags.json"

// import flagsData from '../../data/flagsData.json'
// import optionsData from '../../data/optionsData.json'

// import '../../assets/css/test.scss'

// // export const query = graphql`
// //   query {
// //     allFlagsJson {
// //       edges {
// //         node {
// //           country
// //           flag
// //           options
// //         }
// //       }
// //     }
// //   }
// // `



// const QuizPage = () => {
//     const [flags, setFlags] = useState(flagsData)
//     const [currentFlags, setCurrentFlags] = useState([])
//     const [score, setScore] = useState(0)
//     const [questionCount, setQuestionCount] = useState(0)
//     const [gameStarted, setGameStarted] = useState(false)
//     const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)
//     const [correctAnswer, setCorrectAnswer] = useState(null)
  
//     useEffect(() => {
//       if (gameStarted) {
//         const randomFlags = []
//         while (randomFlags.length < 5) {
//           const index = Math.floor(Math.random() * flags.length)
//           if (!randomFlags.includes(flags[index])) {
//             randomFlags.push(flags[index])
//           }
//         }
//         setCurrentFlags(randomFlags)
//         setScore(0)
//         setQuestionCount(0)
//         setShowCorrectAnswer(false)
//         setCorrectAnswer(null)
//       }
//     }, [flags, gameStarted])
  
//     const shuffle = (array) => {
//       let currentIndex = array.length, randomIndex, temporaryValue
  
//       while (0 !== currentIndex) {
//         randomIndex = Math.floor(Math.random() * currentIndex)
//         currentIndex -= 1
  
//         temporaryValue = array[currentIndex]
//         array[currentIndex] = array[randomIndex]
//         array[randomIndex] = temporaryValue
//       }
  
//       return array
//         .filter((answer, index) => index < 10)
//         .reduce((unique, answer) => unique.includes(answer) ? unique : [...unique, answer], [])
//     }
  
//     const handleAnswer = (answer) => {
//       if (answer === currentFlags[questionCount].country) {
//         setScore(score + 1)
//       } else {
//         setCorrectAnswer(currentFlags[questionCount].country)
//         setShowCorrectAnswer(true)
//         setTimeout(() => {
//         //   setShowCorrectAnswer(true)
//           setShowCorrectAnswer(false)
//           setCorrectAnswer(null)
//         // }, 2000)
//         }, 1300)
//       }
//       setQuestionCount(questionCount + 1)
//     }
  
//     const renderAnswers = () => {
//       const allAnswers = [...optionsData.options]
//       const correctAnswer = currentFlags[questionCount].country
//       const availableAnswers = allAnswers.filter(answer => answer !== correctAnswer)
//       const randomAnswers = []
//       while (randomAnswers.length < 3) {
//         const index = Math.floor(Math.random() * availableAnswers.length)
//         if (!randomAnswers.includes(availableAnswers[index])) {
//           randomAnswers.push(availableAnswers[index])
//         }
//       }
//       randomAnswers.push(correctAnswer)
//       const shuffledAnswers = shuffle(randomAnswers)

//       return shuffledAnswers.map((answer, index) => (

//         <button key={index} onClick={() => handleAnswer(answer)} disabled={showCorrectAnswer} className="odgovori-dugme" >
//           {answer}
//         </button>
//       ))
//     }
  
//     return (
//       <Layout>
//         <div className="kviz-container">
//             <h1>Zastava - Drzava</h1>

//             {!gameStarted &&
//             <button onClick={() => setGameStarted(true)} className="dugme-start">Pocni igru</button>
//             }


//             {gameStarted && currentFlags.length > 0 && questionCount < 5 &&
//             <div className="kviz-polje">
//                 <h3>Pitanje br. {questionCount + 1}</h3>

//                 <img src={currentFlags[questionCount].flag} alt="Flag" className="zastava" />

//                 {/* <div className="greska">
//                     {showCorrectAnswer &&
                        
//                             <h2>Pogresno! Tacan odgovor je {correctAnswer}</h2>
                        
//                     }
//                 </div> */}

//                 <div className="odgovori-polje">
                    
//                         {showCorrectAnswer &&
//                             <div className="pogreseno">
//                                 <div className="pogresno-text">
//                                     <p className="p1">Pogresno!</p>
//                                     <p className="p2">Tacan odgovor je <span>{correctAnswer}</span></p>
//                                 </div>
//                             </div>
//                         }
                    

//                     <div className="ponudjeni-odgovori">{renderAnswers()}</div>
//                 </div>
//             </div>
//             }


//             {questionCount === 5 &&
//                 <div className="rezultat-polje">

//                     <div className="score-polje">
//                         <h3>Rezultat je: <br /> {score} od 5</h3>

//                         <button onClick={() => {
//                         setGameStarted(false)
//                         window.location.reload()
//                         }}
//                         className="ponovo-dugme"
//                         >
//                         Pokusaj ponovo
//                         </button>
//                     </div>
                    
//                 </div>
//             }

//         </div>
//       </Layout>
//     )
//    }
  
// export default QuizPage



