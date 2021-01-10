import axios from 'axios'


export default async function getQuestions(){
  const options={
    method:"get",
    url:"https://opentdb.com/api.php?",
    params:{
      amount:50
    }
  }
  let questions = {
    easy:[],
    medium:[],
    hard:[]
  }
  const {data} = await axios.request(options)

    data.results.forEach(q=>{
    const difficulty = q.difficulty

      difficulty.includes('easy') ?
      questions.easy.push(q):
      difficulty.includes('medium') ?
      questions.medium.push(q):
      questions.hard.push(q)
  }
)
  return questions
}

