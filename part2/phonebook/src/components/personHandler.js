import React from 'react'
import RenderContent from "./RenderContent";
import noteService from "./services/notes"

const personHandler = ({ notesToShow }) => {
    const toggleImportanceOf = (id) => {
        console.log(`importance of ${id} needs to be toggled`)

        if (window.confirm("Do you really want to leave?")) {
            console.log(`ok`)

          noteService.del(parseInt(id)).then(r => console.log(r))

        }
    }

    return (
        notesToShow.map(numberInfo =>
            <React.Fragment key={numberInfo.id}>
                <RenderContent numberInfo={numberInfo}/>
                <button onClick={() => toggleImportanceOf(numberInfo.id)}>Delete</button>
            </React.Fragment>

            )
    )
}

export default personHandler