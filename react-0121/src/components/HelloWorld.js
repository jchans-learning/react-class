function HelloWorld(props) {
  return (
    <h1>
      {props.name}, {props.text}
    </h1>
  )
}

export default HelloWorld

// 透過 props 傳入參數來得到父母元件傳來的屬性值
// props 是一個物件
