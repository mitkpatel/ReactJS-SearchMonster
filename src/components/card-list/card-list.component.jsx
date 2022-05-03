import Card from "../card/card.component";

import "./card-list.style.css";
const CardList = ({ monsters, searchField }) => {
  if (monsters == "") {
    return (
      <div>
        <h1 className="error">{`No monster found with name ${searchField}!!!`}</h1>
      </div>
    );
  } else {
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
};

export default CardList;
