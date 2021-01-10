import React from 'react'

export default function Questions({ userQuestions }){

    const [inx,setInx] = React.useState(0)
    const [isCompleted,setCompleted] = React.useState(false)

    const answer =  userQuestions[inx].correct_answer
    const incorrectAnswers = userQuestions[inx].incorrect_answers
    incorrectAnswers.push(answer)
    
    const randomInxs = [0,1,2,3].sort( () => .5 - Math.random())

    function handleClick(){
      console.log(inx)
      inx < userQuestions.length-1 ? setInx(inx+1):
      setCompleted(true)
    }

  return(<div className="question-container">
       <div className="d-flex justify-content-center mt-5 question-box">
          <div className="card">
            <div className="card-header">
              <h6>Question no:{[inx+1]}</h6>
            </div>
             <div className="card-body">
              <h5 className="card-title">{userQuestions[inx].question}</h5>
              <div className="button-group d-flex-column">
                <div><button  className="btn btn-outline-info mt-1"> A: {incorrectAnswers[randomInxs[0]]}</button></div>
                <div><button className="btn btn-outline-info mt-1">B: {incorrectAnswers[randomInxs[1]]}</button></div>
               
                <>
                <div><button className="btn btn-outline-info mt-1">C: {incorrectAnswers[randomInxs[2]]}</button></div>
                <div><button className="btn btn-outline-info mt-1">D: {incorrectAnswers[randomInxs[3]]}</button></div>
                </>
                {'}'}

              </div>
              <div className="d-flex justify-content-end">
              <button 
              onClick={handleClick}
              className="btn btn-outline-primary mt-2">next Question</button>
              </div>
            </div> 
          </div>
        </div>
        </div>
  )
}