import React from 'react'
import RenderContent from "./RenderContent";
import noteService from "./services/notes"



const personHandler = ({notesToShow, nameFilter,setSuccessMessage,setNotes,setMessageColor}) => {



    const toggleImportanceOf = (id) => {
        if (window.confirm("Do you really want to delete?")) {
            noteService.del(parseInt(id))
                .catch(error => {
                    setMessageColor("Red")
                    setSuccessMessage("ERROR 404")
                })
            notesToShow = notesToShow.filter(item => item.id !== id)
            console.log(notesToShow)
            setNotes(notesToShow)
        }
    }

    if (notesToShow.length === 0) {
        return null
    }


    notesToShow = notesToShow.filter(function (element) {
        return element !== undefined;
    });

    return (
        notesToShow.filter(person => person.name.toLowerCase().includes(`${nameFilter.toLowerCase()}`)).map(filteredPerson => (
            <React.Fragment key={filteredPerson.id}>
                <RenderContent numberInfo={filteredPerson}/>
                <button type="button" onClick={() => toggleImportanceOf(filteredPerson.id)}>Delete</button>
            </React.Fragment>
        ))
    )
}

export default personHandler