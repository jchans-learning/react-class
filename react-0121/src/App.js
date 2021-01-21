import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default App
