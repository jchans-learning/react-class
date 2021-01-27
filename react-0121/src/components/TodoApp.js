import { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([
    '洛克人',
    '海賊王',
    '白金之星',
    '七七乳加巧克力',
    '魔法風雲會',
  ])

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
            const newTodos = [e.target.value, ...todos]

            setTodos(newTodos)

            setTodo('')
          }
        }}
      />
      <ul>
        {todos.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
