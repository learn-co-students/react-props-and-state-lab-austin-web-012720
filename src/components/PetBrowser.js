import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map(newPet => {
      return <Pet key={newPet.id} pet={newPet} onAdoptPet={this.props.onAdoptPet}/>
    })
    return pets
  }
}

export default PetBrowser




// render() {
//   return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>
// }