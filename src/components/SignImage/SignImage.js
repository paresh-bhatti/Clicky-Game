//sets up the reusable SignCard component
import React from "react";
import "./SignImage.css";

//pass the image into each one so all 12 are rendered
const SignImage = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default SignImage;