import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState(null)

  useEffect(() => {
    personsService.getAll()
      .then(response => {
        setPersons(response.data)
      })
      .catch(error => {
        // console.error('Error fetching persons:', error)
        setNotification({ message: `Error retrieving data from the /persons API endpoint`, type: 'error' })
        setTimeout(() => {
          setNotification({ message: null, type: '' })
        }, 5000)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState({ message: null, type: '' })

  const addName = (event) => {
    event.preventDefault()
    // Check if name (newName) already exists in the persons array
    const nameExists = persons.find(person => person.name === newName)

    if (nameExists) {
      if (nameExists.number === newNumber) {
        alert(`${nameExists.name} is already added to phonebook`)
      } else {
        // Confirm with the user to replace the old number with the new one
        if (window.confirm(`${nameExists.name} is already added to the phonebook, replace the old number with a new one?`)) {
          const updatedPerson = { ...nameExists, number: newNumber }
          personsService.update(nameExists.id, updatedPerson)
            .then(response => {
              setPersons(persons.map(person => person.id !== nameExists.id ? person : response.data))
              setNotification({ message: `Number changed for ${response.data.name}`, type: 'success' })
              setTimeout(() => {
                setNotification({ message: null, type: '' })
              }, 5000)
              setNewName('')
              setNewNumber('')
            })
            .catch(error => {
              // console.error('Error updating person:', error)
              setNotification({ message: `Error updating ${updatedPerson.name}`, type: 'error' })
              setTimeout(() => {
                setNotification({ message: null, type: '' })
              }, 5000)
            })
        }
      }
    } else {
      const newPersonObject = {
        // id: persons.length + 1, // let the server generate a random id
        name: newName,
        number: newNumber
      }
      // Add name if not in the persons array
      personsService.create(newPersonObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNotification({ message: `Added ${response.data.name}`, type: 'success' })
          setTimeout(() => {
            setNotification({ message: null, type: '' })
          }, 5000)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          // console.error('Error adding new person:', error)
          setNotification({ message: `Error adding new person: ${newPersonObject.name}`, type: 'error' })
          setTimeout(() => {
            setNotification({ message: null, type: '' })
          }, 5000)
        })
    }
  }

  const deletePerson = (id) => {
    const person = persons.find(person => person.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .remove(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
          // console.log(`${response.data.name} deleted`)
          setNotification({ message: `${response.data.name} deleted`, type: 'success' })
          setTimeout(() => {
            setNotification({ message: null, type: '' })
          }, 5000)
        })
        .catch(error => {
          // console.error('Error deleting person:', error)
          setNotification({ message: `Information of ${person.name} has already been removed from server`, type: 'error' })
          setTimeout(() => {
            setNotification({ message: null, type: '' })
          }, 5000)
        })
    }
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  if (persons === null) {
    return null
  }

  const personsToShow = persons.filter(person =>
    person.name.toUpperCase().includes(filter.toUpperCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} type={notification.type} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
