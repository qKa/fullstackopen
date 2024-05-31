const Person = ({ person, deletePerson }) => {
    return (
        <div>
            {person.name} {person.number} {person.id} <button onClick={() => deletePerson(person.id)}>Delete</button>
        </div>
    )
}

export default Person
