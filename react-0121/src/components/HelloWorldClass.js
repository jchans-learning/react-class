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

export default HelloWorldClass
