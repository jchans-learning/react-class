import PropTypes from 'prop-types'

function HelloWorld(props) {
  // 解構賦值
  const { name, text, clickMethod } = props

  return (
    <>
      <h1 onClick={clickMethod}>
        {name}, {text}
      </h1>
    </>
  )
}

// 透過 props 傳入參數來得到父母元件傳來的屬性值
// props 是一個物件

// 預設屬性
HelloWorld.defaultProps = {
  name: 'Hans',
  text: 'Hello!',
}

// 檢查props的類型
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickMethod: PropTypes.func,
}

export default HelloWorld
