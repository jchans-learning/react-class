function HelloList(props) {
  // 解構賦值
  const { names } = props

  return (
    <>
      <ul>
        {names.map((names, index) => {
          return <li key={index}>{names}，你好</li>
        })}
      </ul>
    </>
  )
}

export default HelloList
