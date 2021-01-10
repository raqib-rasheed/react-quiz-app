import React from 'react'
import { BrowserRouter as Router,Route } from "react-router-dom";
import './App.css';
import Questions from './pages/question';
import SetUpUserQuestions from './pages/setup-quiz';
import {ErrorBoundary} from 'react-error-boundary'

function App() {
  const [userQuestions,setUserQuestions] = React.useState([])

  
  const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }) => {
    return (
      <div>
        <h1>An error occurred: {error.message}</h1>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
  )
}
  
  return (<>
    <Router>
      <Route exact path="/"><SetUpUserQuestions setUserQuestions={setUserQuestions} /> </Route>
      <Route path="/questions">
          <ErrorBoundary FallbackComponent={OurFallbackComponent} >
              <Questions userQuestions={userQuestions} />
          </ErrorBoundary>
      </Route> 
    </Router>
  </>);
}

export default App;
