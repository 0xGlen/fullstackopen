import { React, useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import contactService from './services/contactService'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [displayMessage, setDisplayMessage] = useState(null)
  const [displayStyle, setDisplayStyle] = useState(true)

  useEffect(() => {
    contactService
    .getAll()
    .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
    })
  }, [])

  const handlePersonChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    console.log(e.target.value)
    setNewFilter(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {displayMessage === null ? '': <Notification displayMessage={displayMessage} displayStyle={displayStyle}/>}
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} setShowAll={setShowAll}/>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
        handlePersonChange={handlePersonChange} 
        persons={persons} 
        setPersons={setPersons}
        setNewName={setNewName} 
        setNewNumber={setNewNumber} 
        setDisplayMessage={setDisplayMessage} 
        setDisplayStyle = {setDisplayStyle}/>
      <Persons 
        showAll={showAll} 
        persons={persons}
        setPersons={setPersons}
        newFilter={newFilter} 
        setDisplayMessage={setDisplayMessage} 
        setDisplayStyle = {setDisplayStyle}/>
    </div>
  )
}

export default App