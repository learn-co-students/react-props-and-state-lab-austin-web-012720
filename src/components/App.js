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

  changeType = (type) => {
    this.setState({filters: { type }})
  }

  fetchPets = () => {
    let url = '/api/pets'+(this.state.filters.type !== 'all' ? `?type=${this.state.filters.type}` : '');
    fetch(url)
    .then(res => res.json())
    .then(pets => this.setState({pets}))
  }

  adoptPet = (id) => {
    console.log(id)
    const pets = JSON.parse(JSON.stringify(this.state.pets));
    pets.find(pet => {
      if (pet.id === id)
        return pet.isAdopted = true;
      
      return false;
      
    })
    this.setState({
      pets
    })
  }

  componentDidMount() {
    this.fetchPets();
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
              <Filters onFindPetsClick={this.fetchPets} onChangeType={this.changeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
