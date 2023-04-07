import React, { useState } from "react";
import '../assets/css/polje-pitanja.scss'

// const PoljePitanja = () => {
//     return (
//         <div className="pitanja-polje">
            
//             <div className="slika">

//             </div>

//             <div className="odgovori">
//                 <button>Odgovor A</button>
//                 <button>Odgovor B</button>
//                 <button>Odgovor C</button>
//                 <button>Odgovor D</button>
//             </div>

//         </div>
//     )
// }

// export default PoljePitanja



const PoljePitanja = ({ question }) => {
    return (
      <div className="card">
        <div className="card-header">{question.question}</div>
        <div className="card-body">
          {question.options.map((option, index) => (
            <AnswerOption key={index} option={option} />
          ))}
        </div>
      </div>
    )
  }
  
  const AnswerOption = ({ option }) => {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={option.question}
          id={option.answer}
          value={option.answer}
        />
        <label className="form-check-label" htmlFor={option.answer}>
          {option.answer}
        </label>
      </div>
    )
  }
  
  export default PoljePitanja
