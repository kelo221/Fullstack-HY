import React, {useState, useEffect} from 'react'
import InputBox from './components/InputBox'
import Notification from './components/Notification'
import PersonHandler from './components/personHandler'
import noteService from './components/services/notes'
import './index.css'


const App = () => {
    const [notes, setNotes] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [nameFilter, setNewFilter] = useState('')
    const [successMessage, setSuccessMessage] = useState(null)


    useEffect(() => {
        noteService
            .getAll()
            .then(initialNames => {
                setNotes(initialNames)
            })
    }, [])

    const addNote = (event) => {
        event.preventDefault()

        const foundName = (!!(notes.find(element => element.name === newName)));

        if (!foundName) {
            const noteObject = {
                name: newName,
                number: newNumber,
                id: notes.length + 1,
            }
            setNotes(notes.concat(noteObject))

            setSuccessMessage(`'${newName}' was added!`)


            noteService
                .create(noteObject)
                .then(response => {
                    setNotes(notes.concat(response.data))
                    setNewName('')
                })

        } else {

            const personObject = ((notes.find(element => element.name === newName)));


            if (window.confirm(`${newName} is already added to phonebook. Replace old number?`)) {
                personObject.number = newNumber
                noteService.update(personObject.id, personObject).then(r => console.log(r))
            }

        }
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        event.preventDefault()
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        event.preventDefault()
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        event.preventDefault()
        setNewFilter(event.target.value)

    }



    /// I have absolutely no idea what the undefined issue
    /// as it refreshes everytime for some reason the latter exercises cannot be done
    const notesToShow = notes.filter(note => note.name.toLowerCase().includes(`${nameFilter.toLowerCase()}`))


    return (
        <div>

            <h1>Phonebook</h1>

            <h3>Add new</h3>

            <Notification message={successMessage}/>

            <form onSubmit={addNote}>

                <InputBox newPlaceholder="name" newName={newName} handleNameChange={handleNameChange}/>
                <br/>

                <InputBox newPlaceholder="number" newName={newNumber} handleNameChange={handleNumberChange}/>
                <br/>
                <button type="submit">add</button>
            </form>

            <div>
                <h3>Filter</h3>
                <InputBox newPlaceholder="filter" newName={nameFilter} handleNameChange={handleFilterChange}/>
                <h1>Numbers</h1>
            </div>

            <PersonHandler notesToShow={notesToShow}> </PersonHandler>


        </div>
    )
}
export default App