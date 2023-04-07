import React from "react";
import '../assets/css/kviz-card.scss'
import PoljePitanja from './PoljePitanja'

const KvizCard = () => {
    return (
        <div className="kviz-polje">
            <h2>Zastava - Drzava</h2>

            <PoljePitanja />
            
        </div>
    )
}

export default KvizCard




// chatGBT

// import React, { useState } from 'react';

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);

//   const questions = [
//     {
//       questionText: 'Koja zemlja ima zastavu s crvenom i bijelom šahovnicom?',
//       answerOptions: [
//         { answerText: 'Slovenija', isCorrect: true },
//         { answerText: 'Hrvatska', isCorrect: false },
//         { answerText: 'Srbija', isCorrect: false },
//         { answerText: 'Poljska', isCorrect: false },
//       ],
//     },
//     {
//       questionText: 'Koja zemlja ima zastavu s crvenim polumesecom i zvijezdom na bijeloj podlozi?',
//       answerOptions: [
//         { answerText: 'Turska', isCorrect: true },
//         { answerText: 'Saudijska Arabija', isCorrect: false },
//         { answerText: 'Jordan', isCorrect: false },
//         { answerText: 'Afganistan', isCorrect: false },
//       ],
//     },
//     {
//       questionText: 'Koja zemlja ima zastavu s crvenom zvijezdom i žutom polumjesecom na bijeloj podlozi?',
//       answerOptions: [
//         { answerText: 'Tunis', isCorrect: false },
//         { answerText: 'Algerija', isCorrect: true },
//         { answerText: 'Libija', isCorrect: false },
//         { answerText: 'Maroko', isCorrect: false },
//       ],
//     },
//     {
//       questionText: 'Koja zemlja ima zastavu s plavom i bijelom šahovnicom?',
//       answerOptions: [
//         { answerText: 'Slovenija', isCorrect: false },
//         { answerText: 'Hrvatska', isCorrect: true },
//         { answerText: 'Srbija', isCorrect: false },
//         { answerText: 'Poljska', isCorrect: false },
//       ],
//     },
//   ];

//   const handleAnswerOptionClick = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       setShowScore(true);
//     }
//   };

//   return (
//     <div className='app'>
//       {showScore ? (
//         <div className='score-section'>
//           Ti si odgovorio/la na {score} od {questions.length} pitanja.
//         </div>
//       ) : (
//         <>
//           <div className='question-section'>
//             <div className='question-count'>
//               <span>Pitanje {currentQuestion + 1}</span>/{questions.length}
//             </div>
//             <div className='question-text'>{questions[currentQuestion].questionText}</div>
//           </div>
//           <div className='answer-section'>
//             {questions[currentQuestion].answerOptions.map((answer, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleAnswerOptionClick(answer.isCorrect)}
//               >
//                 {answer.answerText}
//               </button>
//             ))}
//           </div>
//         </>
//       )}
//     </div
