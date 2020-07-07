import React from "react";

class Button extends React.Component {
  render() {
    return (
      <>
        <button
          onClick={this.props.onclick}
          className={this.props.color}
          type={this.props.actionType}
        >
          {this.props.name}
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.reload();
          }}
          className={this.props.color}
          type={this.props.actionType}
        >
          Log Out
        </button>
      </>
    );
  }
}

export default Button;
