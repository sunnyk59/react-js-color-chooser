import React from 'react'

export default function ColorCard(props) {

  const { color, handleColorReset } = props

  return (
    <div className='colorBox' style={{ backgroundColor: color }} onClick={() => handleColorReset()} ></div>
  )
}
