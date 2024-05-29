import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    // Check if name (newName) already exists in the persons array
    const nameExists = persons.some(person => person.name === newName)

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPersonObject = {
        // id: newName,
        name: newName
      }
      // Add name if not in the persons array
      setPersons(persons.concat(newPersonObject))
    }
    setNewName('')
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return (
          // <div key={person.id}>{person.name}</div>
          <div key={person.name}>{person.name}</div>
        )
      })}
    </div>
  )
}

export default App