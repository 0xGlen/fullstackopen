import React from 'react'
import contactService from '../services/contactService'

const PersonForm = ({newName, newNumber, handleNumberChange, handlePersonChange, persons, setPersons, setNewName, setNewNumber, setDisplayMessage, setDisplayStyle}) => {

    const addNewPerson = (e) => {
        e.preventDefault()
        console.log('button clicked', e.target.value)
        const personObject = {
          name: newName,
          number: newNumber
        }
    
      if(persons.some(person => person.name === newName)) {
        const alreadyAddedPerson = persons.filter(person => person.name===newName)
        const answer = window.confirm(`${newName} is already added. Replace?`)
        if(answer) {
          updateContact(alreadyAddedPerson, newNumber)
        } else {
          return
        }

      } else {
        addNewContact(personObject)
        setDisplayMessageUpdateAdded(personObject)
        setDisplayStyle(true)
      }
      }

      const updateContact = (person, number) => {
        contactService
        .update(person[0].id, person[0], number)
        .then(returnedPerson => {
          setPersons(persons.map(x => x.id === person[0].id ? returnedPerson : x))
          setDisplayMessageUpdateAdded(returnedPerson)
          setDisplayStyle(true)
        })
        .catch((error) => {
          console.log(error)
        })
      }

      const addNewContact = (personObject) => {
        contactService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch((error) => {
          console.log(error)
        })
      }
      
      const setDisplayMessageUpdateAdded = (object) => {
        if (persons.some(person => person.name === object.name)) {
          setDisplayMessage(`Updated ${object.name} number`)
        } else {
          setDisplayMessage(`Added ${object.name} number`)
        }
        setTimeout(()=> {
          setDisplayMessage(null)
        }, 3500)
      }

    return (
        <div>
        <h2>Add New Contact</h2>
        <form onSubmit={addNewPerson}>
          <div>
            name: <input value={newName} onChange={handlePersonChange}/>
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        </div>
    )
}

export default PersonForm