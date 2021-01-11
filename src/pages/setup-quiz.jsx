import React from 'react'
import { useHistory } from "react-router-dom"
import getQuestions from '../utils/get-question'

const default__values = {
  number:3,
  difficulty:"easy"
}

export default function SetUpUserQuestions({ setUserQuestions }){

  let history = useHistory()

  const [questions,setQuestions] = React.useState({})
  const [inputs,setInputs] = React.useState(default__values)
 

  React.useEffect(()=>{
    getQuestions().then(q=>{
      setQuestions(q)
    })
  },
  [])

  function handleChange(event){
    const key = event.target.name
    default__values[key]=event.target.value
    setInputs(default__values)
    console.log(inputs)
  }

  function handleSubmit(){
    console.log(default__values)
    const questionsArr = questions[inputs.difficulty]
    const userQuestions = questionsArr.slice(0,inputs.number)
    setUserQuestions(userQuestions)
    history.push('/questions')
  }
  return (
    <>
    <div id="body" className="d-flex justify-content-center align-items-center">
      <div id="setup-quiz" className="bg-secondary p-5">
        <h1 className="text-info">Setup Quiz</h1>
        <h6 className="text-white mt-4">Number Of Questions</h6>
        <input required name="number" defaultValue="3" className="form-control text-center mb-1" type="number" max="5" min="1" onChange={handleChange} />
        <div id="select-items">
          <h6 className="text-center text-white">select Difficullty</h6>
          <select name="difficulty" className="form-select px-5" onChange={handleChange} >
            <option defaultValue="easy" value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button 
        onClick={handleSubmit}
        className="btn btn-outline-light mt-2 text-info">Submit</button>
      </div>
    </div>
    </>
  )
}