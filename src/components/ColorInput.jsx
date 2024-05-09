import React from 'react'

export default function ColorInput(props) {


    const { color, setColor, handleColorDisplay } = props

    return (
        <header>
            <input type="text" placeholder='your fav color!?' value={color}
                onChange={(e) => setColor(e.target.value)} />
            <button onClick={() => {
                handleColorDisplay(color);
                setColor('');
            }}>show!</button>
        </header>
    )
}
