import React from 'react'

const Subject = (subject) => {

    return (
        <div>
            {subject.parts.map(subject =>
                <p key={subject.id}>
                    {subject.name} {subject.exercises}
                </p>
            )}
        </div>
    )
}

export default Subject