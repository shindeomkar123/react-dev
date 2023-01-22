import { Component } from "react";
import useOnline from "../utils/useOnline";
import Profile from "./Profile";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("parent constructor ");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <>
        <div>Parent</div>
        <Profile />
      </>
    );
  }
}

export default About;
