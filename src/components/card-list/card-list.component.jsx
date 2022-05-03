import { Component } from "react";
import Card from "../card/card.component";

import "./card-list.style.css";
class CardList extends Component {
  render() {
    const { monsters, searchField } = this.props;
    console.log("list", monsters);
    if (monsters == "") {
      console.log("No monster found!");
      return (
        <div>
          <h1 className="error">{`No monster found with name ${this.props.searchField}!!!`}</h1>
        </div>
      );
    } else {
      console.log("Monster found!");
      return (
        <div className="card-list">
          {monsters.map((monster) => {
            return <Card monster={monster} />;
          })}
        </div>
      );
    }
  }
}

export default CardList;
