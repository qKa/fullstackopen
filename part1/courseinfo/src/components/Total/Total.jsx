const Total = ({ exercises }) => {
    return (
    <div>
        <p>Number of excercises {exercises.parts[0].exercises + exercises.parts[1].exercises + exercises.parts[2].exercises}</p>
    </div>
    )
  }

export default Total;