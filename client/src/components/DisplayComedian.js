import React, { Component } from "react";
import BackgroundCard from "./BackgroundCard";
import faker from "faker";
import Button from "./Button";
faker.seed(800);

class DisplayComedian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
    };
  }
  displayCard(user) {
    return (
      <div className={"ui grid centered container"}>
        <div className={"sixteen wide center aligned column"}>
          <h3> Featured Comedian </h3>
        </div>
        <div className={"six wide column"}>
          <img
            src={user && user.avatar ? user.avatar : faker.image.avatar()}
            alt="avatar"
          ></img>
        </div>
        <div className={"ten wide column"}>Details</div>
        <div className={"ui ten wide column center aligned grid"}>
          <div className={"column"}>
            <Button
              color="ui teal button"
              actionType="click"
              name="AutoGenerate Comedian"
              // onclick=
            />
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { user } = this.state;
    return (
      <BackgroundCard width="50rem" divMargin="auto">
        {this.displayCard(user)}
      </BackgroundCard>
    );
  }
}

export default DisplayComedian;
