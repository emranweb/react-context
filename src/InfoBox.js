import React from "react";
import Button from "./Button.js";

function InfoBox() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title"> Card Info Header</h3>
      </div>
      <div className="card-content">
        <p>
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
}

export default InfoBox;
