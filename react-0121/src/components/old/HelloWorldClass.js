import React from 'react'

class HelloWorldClass extends React.Component {
  // 解構賦值寫法
  constructor(props) {
    super(props)
    this.state = {}
    console.log(props)
  }

  render() {
    // 解構賦值寫法
    const { name, text } = this.props

    return (
      <h1>
        {name}, {text}
      </h1>
    )
  }
}

// 預設屬性
HelloWorldClass.defaultProps = {
  name: 'Hans',
  text: 'Hello! This is defalutProps from Class Componet',
}

export default HelloWorldClass
