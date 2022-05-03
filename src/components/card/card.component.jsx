import { Component } from "react";

import "./card.style.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
      </div>
    );
  }
}

export default Card;
