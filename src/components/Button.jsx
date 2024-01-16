import React from 'react'

function Button({value,onClick}) {
  return (
    <div>
      <button className='btn' onClick={onClick}>
        {value}
      </button>
    </div>
  )
}

export default Button