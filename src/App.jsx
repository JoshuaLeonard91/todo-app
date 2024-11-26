import { useState, useEffect } from "react"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  // const todos = [
  //   { input: 'Hello!', complete: true },
  //   { input: 'boob', complete: false },
  //   { input: 'penis', complete: false },
  //   { input: 'feed tememo and yogi', complete: true }
  // ]



  const [todos, setTodos] = useState([
    { input: 'Hello!', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('All')

  function handleAddTodo(newTodo) {
    /* Create new list, add current todos values, add a new to do*/
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>

      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TodoList handleCompleteTodo={handleCompleteTodo} todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
