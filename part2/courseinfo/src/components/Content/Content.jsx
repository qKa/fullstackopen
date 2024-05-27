import Part from "./ContentPart"

const Content = ({ course }) => {
  // console.log("Content component:", course)

  return (
    <div>
      <Part id={course.id} name={course.name} exercises={course.exercises} />
    </div>
  )
}

export default Content