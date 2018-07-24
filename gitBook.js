import React, { Component } from "react";

class gitBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "document",
      nodes: [
        {
          type: "heading1",
          text: "A title"
        },
        {
          type: "paragraph",
          text: "This is a second paragraph of text"
        },
        {
          type: "paragraph",
          text: "This is a second paragraph of text"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.nodes.map(
          o => (o.type === "heading1" ? <h1>o.text</h1> : <p>o.text</p>)
        )}
      </div>
    );
  }
}

export default gitBook;
