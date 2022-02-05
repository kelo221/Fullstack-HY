import React from 'react'

const RenderContent = ({ numberInfo }) => {
  return (
    <p>{numberInfo.name} {numberInfo.number} </p>
  )
}

export default RenderContent