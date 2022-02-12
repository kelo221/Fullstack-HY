import React from 'react'
import RenderContent from "./RenderContent";
import noteService from "./services/notes"

const personHandler = ({ notesToShow }) => {

    const toggleImportanceOf = (id) => {
        if (window.confirm("Do you really want to delete?")) {
          noteService.del(parseInt(id)).then(r => console.log(r))
        }
    }



    return (
        notesToShow.map(numberInfo =>
            <React.Fragment key={numberInfo.id}>
                <RenderContent numberInfo={numberInfo}/>
                <button type="button" onClick={() => toggleImportanceOf(numberInfo.id)}>Delete</button>
            </React.Fragment>

            )
    )
}

export default personHandler