import React from "react";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";

// TODO: error page
class Error extends React.Component {
  render () {
    return(`Error: ${this.props.message}`);
  }

}

export default Error;