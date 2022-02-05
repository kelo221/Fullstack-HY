import React from 'react'
import RenderContent from "./RenderContent";

const personHandler = ({ notesToShow }) => {
    return (
        notesToShow.map(numberInfo =>
                <RenderContent key={numberInfo.id} numberInfo={numberInfo}/>
            )
    )
}

export default personHandler