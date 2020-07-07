import React from 'react'

class Button extends React.Component {
  render () {
    return (
      <>
        <button onClick={this.props.onclick} className={this.props.color} type={this.props.actionType}>
          {this.props.name}
        </button>
        <a onClick="http://localhost:8080/v1/api/auth/github/">Login With Github</a>
      </>
    )
  }
}

export default Button
