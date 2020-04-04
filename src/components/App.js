import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  onChangeType = (newType) => {
    this.setState({
      filters: { type: newType },
    });
  };

  onFindPetsCLick = () => {
    let url = "/api/pets";
    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((results) => this.setState({ pets: results }));
  };

  onAdoptPet = (petId) => {
    const updatePets = this.state.pets.map(pet => {
       return pet.id === petId ? { ...pet, isAdopted: true} : pet;
    });
    this.setState({ pets: updatePets})
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsCLick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
