import StatisticLine from "./StatisticLine"

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positivePercentage = total === 0 ? 0 : (good / total) * 100

  return (
    <div>
      <h1>Statistics</h1>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={`${positivePercentage}%`} />
        </div>
      )}
    </div>
  )
}

export default Statistics
