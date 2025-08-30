import React from 'react'

function Buttons({ name, color = '', bgColor = '', border = '' }) {
  return (
    <button
      type="button"
      className={`font-semibold text-lg ${color} ${bgColor} ${border} hover:scale-105 transition-all duration-300 active:scale-95`}
    >
      {name}
    </button>
  )
}

export default Buttons