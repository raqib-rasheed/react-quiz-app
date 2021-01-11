import React from 'react'
import DisplayScore from './display_score'

export default function Questions({ userQuestions }){
    console.log(userQuestions)

    const [inx,setInx] = React.useState(0)
    const [isCompleted,setCompleted] = React.useState(false)
    const [selected,setSelected] = React.useState(false)
    const [score,setScore] = React.useState(false)
    const [modalOpen,setModalOpen] = React.useState(false)

    const answer =  userQuestions[inx].correct_answer
    let point = 0;
    console.log(answer)
    const incorrectAnswers = userQuestions[inx].incorrect_answers
    incorrectAnswers.push(answer)
    const randomInxs = [0,1,2,3].sort( () => .5 - Math.random())
    
    function checkAnswer(event){
      setSelected(true)
      const selectedOption = event.target.childNodes[1].textContent
      selectedOption===answer && (setScore(point++)
      )
    } 

    function handleClick(event){
      inx < userQuestions.length-2 ? setInx(inx+1):
      setCompleted(true)
      setSelected(false)
      isCompleted && handleViewScore()
    }
    function handleViewScore(){
      const totalQuestions = userQuestions.length
      const score = Math.round(point/totalQuestions*100)
      setScore(score)
      setModalOpen(true)
    }

  return(<div className="question-container">
       <div className="d-flex justify-content-center mt-5 question-box">
          <div className="card">
            <div className="card-header">
              <h6>Question no:{isCompleted?[inx+2]:[inx+1]}</h6>
            </div>
             <div className="card-body">
              <h5 className="card-title">{userQuestions[inx].question}</h5>
              <div className="button-group d-flex-column">
                <div>
                
                <button  
                onClick={checkAnswer}
                disabled={selected}
                className={selected ? "btn btn-outline-dark mt-1" : "btn btn-outline-info mt-1"}> A: {incorrectAnswers[randomInxs[0]]}
                </button></div>
                <div>
                
                <button 
                onClick={checkAnswer}
                disabled={selected}
                className={selected ? "btn btn-outline-dark mt-1" : "btn btn-outline-info mt-1"}>B: {incorrectAnswers[randomInxs[1]]}</button></div>
               
                <>
                <div><button 
                onClick={checkAnswer}
                disabled={selected}
                className={selected ? "btn btn-outline-dark mt-1" : "btn btn-outline-info mt-1"}>C: {incorrectAnswers[randomInxs[2]]}</button></div>

                <div>
                <button 
                onClick={checkAnswer}
                disabled={selected}
                className={selected ? "btn btn-outline-dark mt-1" : "btn btn-outline-info mt-1"}>D: {incorrectAnswers[randomInxs[3]]}</button></div>
                </>
              </div>
              <div className="d-flex justify-content-end">
              {!isCompleted ? <button 
              disabled={!selected}
              onClick={handleClick}
              className={selected ? "btn clickme btn-outline-info mt-1" : "btn btn-outline-primary mt-2"}>next Question</button>: <button 
              disabled={!selected}
              onClick={handleViewScore}
              className="btn border border-2 border-info btn-success mt-2">view score </button> }
              </div>
            </div> 
          </div>
        </div>

        { modalOpen && <DisplayScore score={score} /> }

        </div>
  )
}