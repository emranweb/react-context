import React from "react";
import InfoBox from "./InfoBox";
import StyleContext from "./context";
import TextContext from "./TextContext";

class App extends React.Component {
  constructor() {
    super();
    this.state = { style: "primary", text: "primary" };
  }

  changeStyle = (data) => {
    this.setState({ style: data, text: data });
  };

  render() {
    return (
      <div className="container">
        <div>
          <h2 className="title is-3">Change Card Style : </h2>
          <button
            className="btn btn-primary"
            onClick={() => this.changeStyle("primary")}
          >
            Primary
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.changeStyle("danger")}
          >
            Denger
          </button>
        </div>
        <StyleContext.Provider value={this.state.style}>
          <TextContext.Provider value={this.state.text}>
            <InfoBox />
          </TextContext.Provider>
        </StyleContext.Provider>
      </div>
    );
  }
}

export default App;
