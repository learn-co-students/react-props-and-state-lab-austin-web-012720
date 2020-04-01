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

  onChangeType = (filterResult) => {
    this.setState({
      pets:[],
      filters: {
        type: filterResult
      }
    })
  }

  onFindPetsClick = () => {
    // console.log('Find Pets!');
    const url = '/api/pets';
    let param = '';
    if (this.state.filters.type !== 'all') {
      param = `?type=${this.state.filters.type}`
    }

    fetch(`${url}${param}`)
    .then(res => res.json())
    .then(json => this.setState({
        pets: json,
        filters: {
          type: this.state.filters.type
        }
      })
    )
  }

  onAdoptPet = (id) => {
    console.log("Adopt me!");
    // const curPet = this.state.pets.find((pet) => pet.id === id)
    // console.log(curPet);
    // curPet.isAdopted = true; This didin't work

    let pets = this.state.pets.slice(0);
    let curPet = pets.find((pet) => pet.id === id)
    curPet.isAdopted = true;
    this.setState({
      pets
    })
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
