import { useState } from 'react'
import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'

function TodoApp() {
  const [todo, setTodo] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, text: '洛克人', completed: false },
    { id: 2, text: '海賊王', completed: true },
    { id: 3, text: '白金之星', completed: true },
  ])

  const handleCompleted = (id) => {
    const newTodos = [...todos]

    const index = newTodos.findIndex((item) => item.id === id)

    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed

      setTodos(newTodos)
    }
  }

  const handleAddNew = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      const newTodoItem = {
        id: +new Date(),
        text: e.target.value,
        completed: false,
      }

      const newTodos = [newTodoItem, ...todos]

      setTodos(newTodos)

      setTodo('')
    }
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  return (
    <>
      <h1>待辦事項</h1>
      <TodoAddForm todo={todo} setTodo={setTodo} handleAddNew={handleAddNew} />

      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default TodoApp
