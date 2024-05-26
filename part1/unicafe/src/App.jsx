import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={ handleGood }>good</button>
      <button onClick={ handleNeutral }>neutral</button>
      <button onClick={ handleBad }>bad</button>
      <h1>Statistics</h1>
      <div>Good {good}</div>
      <div>Neutral {neutral}</div>
      <div>Bad {bad}</div>
      <div>All {total}</div>
      <div>Average {average}</div>
      <div>Positive {positivePercentage}%</div>
    </div>
  )
}

export default App