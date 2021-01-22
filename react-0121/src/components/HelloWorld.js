function HelloWorld(props) {
  // 解構賦值
  const { name, text } = props

  return (
    <h1>
      {name}, {text}
    </h1>
  )
}

export default HelloWorld

// 透過 props 傳入參數來得到父母元件傳來的屬性值
// props 是一個物件
