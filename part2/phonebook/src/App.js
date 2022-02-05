import React, {useState} from 'react'
import RenderContent from './components/RenderContent'
import InputBox from './components/InputBox'
import PersonHandler from './components/personHandler'

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [nameFilter, setNewFilter] = useState('')

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
        } else {
            alert(`${newName} is already added to phonebook`)
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