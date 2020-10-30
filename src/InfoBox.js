import React from "react";
import Button from "./Button.js";
import StyleContext from "./context.js";

function InfoBox() {
  return (
    <StyleContext.Consumer>
      {(value) => {
        return (
          <div
            className={`card text-white ${
              value === "primary" ? "bg-secondary" : "bg-dark"
            }`}
          >
            <div className="card-header">Card header</div>
            <div className="card-body">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptatibus quia quas reiciendis illo accusamus quis iste optio
                accusantium. Dolorem repudiandae porro repellat ipsum dolor sunt
                veritatis repellendus animi praesentium!
              </p>
            </div>
            <div className="card-footer">
              <Button />
            </div>
          </div>
        );
      }}
    </StyleContext.Consumer>
  );
}

export default InfoBox;
