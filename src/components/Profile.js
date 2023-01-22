import { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    console.log("Child constructor");
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("set timeout");
    }, 0);
    console.log("Child did mount");
    this.setState({ counter: this.state.counter + 1 });
  }

  componentDidUpdate() {
    console.log("Child did update");
  }

  render() {
    console.log("child render");

    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  }
}

export default Profile;
