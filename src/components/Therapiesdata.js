import { Component } from "react";
import "./TherapiesStyles.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img4.webp";
import img4 from "../images/img5.webp";
import img5 from "../images/img6.jpg";
import img6 from "../images/img7.jpeg";
class TherapiesData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="ther-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="images">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default TherapiesData;
