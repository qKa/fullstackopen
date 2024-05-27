import Header from "../Header/Header"
import Content from "../Content/Content"
import Total from "../Total/Total"

const Course = ({ course }) => {
    // console.log("Course component:", course)
    return (
        <div>
            <Header course={course} />
            {course.parts.map(part => (
                <Content key={part.id} course={part} />
            ))}
            <Total exercises={course} />
        </div >
    )
}

export default Course