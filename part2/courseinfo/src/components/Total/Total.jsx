const Total = ({ exercises }) => {
  // console.log("Total component:", exercises)
  const total = exercises.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p><b>Total of {total} excercises</b></p>
  )
}

export default Total