import React from 'react'
import { useHistory } from "react-router-dom"

export default function DisplayScore({score}){
  const history = useHistory()

  return (
    <div className="modal-container">
      <div className="modal-box m-3 p-2 text-dark">
        <h2>Your answered {score}% of your questions correct</h2>
        
        <button
        onClick={()=>history.push("/")}
        className="btn btn-secondary mx-2">Close</button>

      </div>
    </div> 
  )
}
