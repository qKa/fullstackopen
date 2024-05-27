const Header = ({ course }) => {
  // console.log("Header component:", course)
  return (
    <div>
      <h2>{course.name}</h2>
    </div>
  )
}

export default Header