import React, { useState, useEffect } from 'react'
import InputBox from './components/InputBox'
import PersonHandler from './components/personHandler'
import noteService from './components/services/notes'




const App = () => {
    const [notes, setNotes] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [nameFilter, setNewFilter] = useState('')



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

        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {

        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)

    }


    const notesToShow = notes.filter(note => note.name.toLowerCase().includes(`${nameFilter.toLowerCase()}`))

    return (
        <div>

            <h1>Phonebook</h1>

            <h3>Add new</h3>

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