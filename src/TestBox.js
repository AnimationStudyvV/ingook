import React, { Component } from "react";

import Phone from './component/Phone';
class TextBox extends Component {
  render() {
    const name = "react";
    return (
      <div id = "testbox">
        <Phone/>
      </div>
      )
  }
}

export default TextBox;