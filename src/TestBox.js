import React, { Component } from "react";
import NeonBox from "./component/Neon/NeonBox";

import Phone from './component/Phone';
class TextBox extends Component {
  render() {
    const name = "react";
    return (
      <div id = "testbox">
        {/* <Phone/> */}
        <NeonBox/>
      </div>
      )
  }
}

export default TextBox;