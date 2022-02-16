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
    const [messageBoxColor, setMessageBoxColor] = useState('Green')


    useEffect(() => {
        noteService
            .getAll()
            .then(initialNames => {
                if (initialNames)
                    setNotes(initialNames);
            })
    }, [])

    const addNote = (event) => {
        event.preventDefault()

        const foundName = (!!(notes.find(element => element.name === newName)));

        const idCheck = () => {
            for (let i = 0; i < notes.length; i++) {
                if(notes[i].id !== i+1){
                    return i+1
                }
            }
        }


        let newId = idCheck()
        console.log(newId)

        if (newId === undefined){
            console.log("the array should be fine so id will be ", notes.length+1)
            newId = notes.length+1
        }



        if (!foundName) {
            const noteObject = {
                id: newId,
                name: newName,
                number: newNumber,
            }


            setSuccessMessage(`'${newName}' was added!`)

            console.log(noteObject)


            console.log(notes)

            noteService
                .create(noteObject)
                .then(response => {
                    console.log(response)
                    setNotes(notes.concat(noteObject))
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
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }


    return (
        <div>

            <h1>Phonebook</h1>

            <h3>Add new</h3>

            <Notification message={successMessage} colorNew={messageBoxColor}/>

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

            <PersonHandler notesToShow={notes} nameFilter={nameFilter} setSuccessMessage={setSuccessMessage}
                           setNotes={setNotes} setMessageColor={setMessageBoxColor}

            > </PersonHandler>
        </div>
    )
}
export default App