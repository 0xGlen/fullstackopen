import React from 'react'
import Contact from './Contact'

const Persons = ({showAll, persons, newFilter, setDisplayMessage, setDisplayStyle, setPersons}) => {
    const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

    return (
    <div>
    <h2>Numbers</h2>
    {personsToShow.map(person => <Contact key={person.id} eachContact={person} persons={personsToShow} setPersons={setPersons} setDisplayMessage={setDisplayMessage} setDisplayStyle={setDisplayStyle}/>)}
    </div>
    )
}

export default Persons