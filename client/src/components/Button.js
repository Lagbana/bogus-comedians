import React from "react";
import { update } from "../services/withUser";

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
            update(null);
            window.location.href = '/login'
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
