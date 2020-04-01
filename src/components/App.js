import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = e => {
    this.setState({
      filters: {
        ...this.state,
        type: e.target.value
      } 
    })
  }

  onFindPetsClick = e => {
    let filterType = ''
    if (this.state.filters.type === 'all') {
      filterType = ''
    } else {
      filterType = '?type='+this.state.filters.type
    }

    fetch(`/api/pets${filterType}`)
    .then(r => r.json())
    .then(pets => {
      this.setState({
        ...this.state,
        pets: pets
      })
    })
  }

  onAdoptPet = petId => {
    // const pet = this.state.pets.find(pet => pet.id === petId);
    // pet.isAdopted = true;

    const newPetArr = this.state.pets.map(pet => {
      if (pet.id === petId){
        pet.isAdopted = true
      }
      return pet
    })

    this.setState({
      ...this.state,
      pets: newPetArr
    })
    console.log(this.state.pets)
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
