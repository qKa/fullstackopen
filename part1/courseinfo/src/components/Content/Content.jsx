import Part from "./ContentPart"

const Content = ({ parts }) => {
  const { parts: partsArray } = parts;
  // console.log(parts.parts[0].name)
  // const { parts } = course;

    return (
      <div>
        <Part name={partsArray[0].name} exercises={partsArray[0].exercises} />
        <Part name={partsArray[1].name} exercises={partsArray[1].exercises} />
        <Part name={partsArray[2].name} exercises={partsArray[2].exercises} />
      </div>
    )
  }

export default Content;