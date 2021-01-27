import { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, text: '洛克人', completed: false },
    { id: 2, text: '海賊王', completed: true },
    { id: 3, text: '白金之星', completed: false },
    { id: 4, text: '七七乳加巧克力', completed: false },
  ])

  const handleCompleted = (id) => {
    const newTodos = [...todos]

    const index = newTodos.findIndex((item) => item.id === id)

    if (index > -1) {
      newTodos[index].completed = !newTodos[index].completed

      setTodos(newTodos)
    }
  }

  return (
    <>
      <h1>待辦事項</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            const newTodoItem = {
              id: +new Date(),
              text: e.target.value,
              completed: false,
            }

            const newTodos = [newTodoItem, ...todos]

            setTodos(newTodos)

            setTodo('')
          }
        }}
      />
      <ul>
        {todos.map((item, index) => {
          if (item.completed) {
            return (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => {
                    handleCompleted(item.id)
                  }}
                />
                <del>{item.text}</del>
              </li>
            )
          }
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => {
                  handleCompleted(item.id)
                }}
              />
              {item.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
