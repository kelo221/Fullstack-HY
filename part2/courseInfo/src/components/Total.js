import React from 'react'

const Total = (subject) => {

    return (
        <b>Total: {(subject.parts.map(subject => subject.exercises).reduce((a, b) => a + b))}</b>
    )
}

export default Total