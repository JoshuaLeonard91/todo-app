import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos, selectedTab } = props


    /* Simplified */
    // const filterTodosList = tab === 'All' ? todos :
    //     tab === 'Completed' ?
    //         todos.filter(val => val.complete) :
    //         todos.filter(val => !val.complete)

    let filterTodosList;
    if (selectedTab === 'All') {
        filterTodosList = todos;
    } else if (selectedTab === 'Completed') {
        filterTodosList = todos.filter(val => val.complete);
    } else {
        filterTodosList = todos.filter(val => !val.complete);
    }


    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex}
                        todoIndex={todos.findIndex(val => val.input == todo.input)}
                        {...props}
                        todo={todo} />
                )
            })}
        </>
    )
}
