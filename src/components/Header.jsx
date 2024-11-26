import React from 'react'

export default function Header(props) {
    /* props */
    const { todos } = props

    /* check todos length (array length)*/
    const todosLength = todos.length
    /* check todos length if 1 or 0 == task, else tasks*/
    const isTaskPlural = todos.length != 1
    const taskOrTasks = isTaskPlural ? 'tasks' : 'task'

    return (
        <header>
            <h1 className='text-gradient'>You have {todosLength} open {taskOrTasks}.</h1>
        </header>
    )
}
