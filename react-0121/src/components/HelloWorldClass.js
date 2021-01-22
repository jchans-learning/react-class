import React from 'react'

class HelloWorldClass extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <h1>
        {/* props 可以自動得到 */}
        {this.props.name}, {this.props.text}
      </h1>
    )
  }
}

export default HelloWorldClass
