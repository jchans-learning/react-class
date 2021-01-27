import TodoItem from './TodoItem'

function TodoList(props) {
  const { todos, handleCompleted, handleDeleted } = props
  return (
    <>
      <ul>
        {todos.map((item, index) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              handleCompleted={handleCompleted}
              handleDeleted={handleDeleted}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
