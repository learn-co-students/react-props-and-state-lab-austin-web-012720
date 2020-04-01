import React from 'react'
import Pet from './Pet'


class PetBrowser extends React.Component {


  // ### `Pet`

  // 1.  Should receive a `pet` prop. Use the attributes in this data to render the
  //     pet card correctly. It should show the pet's `name`, `type`, `age` and
  //     `weight`. Based on the pet's `gender`, the component also needs to contain
  //     either a male (`♂`) or female (`♀`) symbol.

  // 2.  Each `pet` _may or may not_ have an `isAdopted` property set to `true`.
  //     Using this property, render the correct button in the pet's card; if the pet
  //     is adopted, show the disabled button. Otherwise, show the primary button to
  //     adopt the pet.

  // 3.  Should receive an `onAdoptPet` callback prop. This callback prop gets called
  //     with the pet's `id` when the user clicks the adopt pet button — _not_ when
  //     they click the disabled button!

  // createPet = () => {
  //   return this.props.pets.map((pet, idx) => {
  //     return <Pet key={idx} pet={pet} onAdoptPet={this.props.onAdoptPet} />;
  //   })
  // }

  render() {
    return <div className="ui cards">
      {this.props.pets.map((pet, idx) =>
        <Pet key={idx} pet={pet} onAdoptPet={this.props.onAdoptPet} />
      )} </div>
  }
}

export default PetBrowser
