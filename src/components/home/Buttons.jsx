import React from 'react'

function Buttons({ name }) {
  return (
    <button
      type="button"
      className={`font-medium`}
    >
      {name}
    </button>
  )
}

export default Buttons