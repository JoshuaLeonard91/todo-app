import React from 'react'
import { useState } from 'react'

export default function TodoInput(props) {
    const { handleAddTodo } = props

    // user input value 
    const [inputValue, setInputValue] = useState('')

    return (
        <div className='input-container'>

            {/* value = user input, onChange listens for event, targets the value to update it. */}
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} placeholder='Add task' />

            {/* if inputvalue is empty returns else add user input */}
            <button onClick={() => {
                if (!inputValue) { return }
                handleAddTodo(inputValue)
                setInputValue('')
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
