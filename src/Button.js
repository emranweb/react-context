import React from "react";
import StyleContext from "./context";
import TextContext from "./TextContext";

function Button() {
  return (
    <StyleContext.Consumer>
      {(value) => {
        return (
          <button
            type="button"
            className={`btn ${
              value === "primary" ? "btn-primary" : "btn-danger"
            }`}
          >
            <TextContext.Consumer>
              {(value) => (value === "primary" ? "Submit" : "Delete")}
            </TextContext.Consumer>
          </button>
        );
      }}
    </StyleContext.Consumer>
  );
}

export default Button;
