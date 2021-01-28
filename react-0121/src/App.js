import React, { useState, useEffect, useRef } from 'react'
import $ from 'jquery'

function App() {
  const buttonOnRef = useRef(null)

  const [data, setData] = useState(123)

  useEffect(() => {
    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    $('#one').on('click', () => alert('data is ' + data))

    $(buttonOnRef.current).on('click', () => alert('data is ' + 'Test 2'))
  }, [])

  return (
    <>
      <button id="one">Click me 1</button>
      <button ref={buttonOnRef}>Click me 2</button>
    </>
  )
}

export default App
