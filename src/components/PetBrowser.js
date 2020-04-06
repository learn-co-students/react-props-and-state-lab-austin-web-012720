import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  // renderPets() {
  //   let arr = []
  //   for (let i = 0; i < this.props.pets.array.length; i++) {
  //     <Pet pet={this.props.pets[i]} onAdoptPet={this.props.onAdoptPet} />;
  //   }
  // }

  getPet() {
    let pet = this.props.pets.pop();
    return pet
  }

  render() {
    const pets = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));
    return(
    <div className="ui cards">{pets}</div>
    );
  }
}

export default PetBrowser;
