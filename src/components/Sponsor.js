import React from "react";
import Image from 'next/image'

export default class Sponsor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sponsor">
        <div className={`row${this.props.flipped ? " reverse" : ""}`} >
          <div className="text">
            <h2>{this.props.title}</h2>
            <p>{this.props.body}</p>
          </div>
          <div className="image">
            <Image src={this.props.img} alt="" fill={true} />
          </div>
        </div>
      </div>
    );
  }
}