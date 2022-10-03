import contactService from '../services/contactService'

const Contact = ({eachContact, persons, setPersons, setDisplayMessage, setDisplayStyle}) => {
    const handleClick = () => {
        const answer = window.confirm(`Deleting ${eachContact.name} Are you sure` )
        if (answer) {
            handleDelete()
        }
    }

    const handleDelete = () => {
        contactService
        .deleteContact(eachContact.id)
        .then(returnedContact => {
            setPersons(persons.filter(person => person.id !==eachContact.id))
            
        })
        .catch(error => {
            setPersons(persons.filter(person => person.id !==eachContact.id))
            setDisplayStyle(false)
            setDisplayMessage(`the number of ${eachContact.name} was already deleted from the server`)
            setTimeout(()=> {
                setDisplayMessage(null)
            }, 3500)
        })
    }

    return(
        <div>
            <li key={eachContact.id}>
                {eachContact.name} : {eachContact.number}
                <button onClick={handleClick}> delete </button>
            </li>
        </div>
    )
}

export default Contact