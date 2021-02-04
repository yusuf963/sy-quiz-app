import React, { useState, useEffect, useCallBack } from 'react'

const Quiz = () => {
  const [questions, updateQuestions] = useState([])
  const [questionsNumber, updateQuestionsNumber] = useState(10)
  const [category, updateCategory] = useState('')
  const [difficulty, updateDifficulty] = useState('medium')
  const [type, updateType] = useState('')
  const [startGame, updatestartGame] = useState(false)

  const [currentQuestion, updatecurrentQuestion] = useState(0)

  const fetchingData = async () => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${questionsNumber}&${!category ? '' : 'category'}=${category}&${!difficulty ? '' : 'difficulty'}=${difficulty}&${!type ? '' : 'type'}=${type}`)
    const data = await res.json()
    updateQuestions(data.results)
    console.log(data.results)
  }

  return <>
    { !startGame && (<>
      <select onChange={(e) => updateQuestionsNumber(e.target.value)}>
        <option > Number of Questions</option>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
      </select>
      <select onChange={(e) => updateCategory(e.target.value)}>
        <option value=''>Any</option>
        <option value='9'>General Knowledge</option>
        <option value='10'>Entertainment: Books</option>
        <option value='11'>Entertainment: Film</option>
        <option value='12'>Entertainment: Music</option>
        <option value='13'>Entertainment: Musicals and Theatres</option>
        <option value='14'>Entertainment: Television</option>
        <option value='15'>Entertainment: Video Games</option>
        <option value='16'>Entertainment: Board Games</option>
        <option value='31'>Entertainment: Japanese Anime and Manga</option>
        <option value='32'>Entertainment: Cartoon and Animations</option>
        <option value='29'>Entertainment: Comics</option>
        <option value='17'>Science and Nature</option>
        <option value='18'>Science: Computers</option>
        <option value='19'>Science: Maths</option>
        <option value='30'>Science: Gadgets</option>
        <option value='20'>Mythology</option>
        <option value='21'>Sports</option>
        <option value='22'>Geography</option>
        <option value='23'>History</option>
        <option value='24'>Politics</option>
        <option value='25'>Art</option>
        <option value='26'>Celebrities</option>
        <option value='27'>Animals</option>
        <option value='28'>Vehicles</option>
      </select>
      <select onChange={(e) => updateDifficulty(e.target.value)}>
        <option value=''>Difficulty</option>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>
      <select>
        <option value='multiple'>Multiple Choice</option>
        <option value='boolean'>True / False</option>
      </select>
      <button onClick={() => fetchingData()}>Set Quis Ready</button>
      <button onClick={() => {
        updatestartGame(!startGame)
      }}> Start Quiz</button>
    </>)}

    {startGame && (
      <>
        <h2>{questions[currentQuestion].question}</h2>
        <button>{questions[currentQuestion].correct_answer}</button>
        {questions[currentQuestion].incorrect_answers.map((answer, i) => {
          return <button key={i}>{answer}</button>
        })}
        <button onClick={() => updatecurrentQuestion(currentQuestion + 1)}>Next Question</button>
        {currentQuestion === questionsNumber - 1 && <div>
          <p>Game over</p>
          <button onClick={() => console.log('new game started')}>Set a new Quiz</button>
        </div>}
      </>)}

  </>
}

export default Quiz