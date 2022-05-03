import React from "react";

import CardList from "../src/components//card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((error) => console.log("You got an error -", error));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      if (monster.name.toLowerCase().includes(searchField)) {
        return monster.name.toLowerCase().includes(searchField);
      } else {
        return false;
      }
    });

    return (
      <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='Search Monster'
        />
        <CardList monsters={filteredMonsters} searchField={searchField} />
      </div>
    );
  }
}

export default App;
