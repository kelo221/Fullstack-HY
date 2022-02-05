import React from 'react'

const InputBox = ({ newPlaceholder, newName, handleNameChange }) => {
    return (
        <input
            placeholder={newPlaceholder}
            value={newName}
            onChange={handleNameChange}
        />
    )
}

export default InputBox