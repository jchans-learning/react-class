function HelloList(props) {
  // 解構賦值
  const { names } = props

  return (
    <>
      <ul>
        {/* 陣列直接輸出為 array.join('') */}
        {names}
        {/* {[
          <h2>123123</h2>,
          <button>Press Me</button>,
          <a href="123.com">321</a>,
        ]} */}

        {names.map((names, index) => {
          return (
            <li key={index} style={{ color: '#ff6600', fontSize: 20 }}>
              {names}，你好
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default HelloList
