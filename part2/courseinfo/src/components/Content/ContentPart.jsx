// destruct id if needed: { id, name, exercises }
const ContentPart = ({ name, exercises }) => {
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

export default ContentPart