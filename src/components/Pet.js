import React from 'react'


class Pet extends React.Component {
  constructor(props) {
    super()
    console.log(props)

    // this.state = {
    //   id: props.pet.id,
    //   type: props.pet.type,
    //   gender: props.pet.gender,
    //   age: props.pet.age,
    //   weight: props.pet.weight,
    //   name: props.pet.name,
    //   isAdopted: props.pet.isAdopted
    // }
  }

  // onAdoptPet = () => {
  //   this.setState({
  //     ...this.state,
  //     isAdopted: true
  //   })
  // }

//   render() {
//     return (
//       <div className="card">
//         <div className="content">
//           <a className="header">
//             {this.state.gender === 'female' ? '♀' : '♂'}
//             {this.state.name}
//           </a>
//           <div className="meta">
//             <span className="date">{this.state.type}</span>
//           </div>
//           <div className="description">
//             <p>Age: {this.state.age}</p>
//             <p>Weight: {this.state.weight}</p>
//           </div>
//         </div>
//         <div className="extra content">
//           <button onClick={() => { this.props.onAdoptPet(this.state.id) }} className={this.state.isAdopted ? "ui disabled button" : "ui primary button"}>Adopt pet</button>
//         </div>
//       </div>
//     )
//   }
// }

render() {
  return (
    <div className="card">
      <div className="content">
        <a className="header">
          {this.props.pet.gender === 'female' ? '♀' : '♂'}
          {this.props.pet.name}
        </a>
        <div className="meta">
          <span className="date">{this.props.pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {this.props.pet.age}</p>
          <p>Weight: {this.props.pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button onClick={() => { this.props.onAdoptPet(this.props.pet.id) }} className={this.props.pet.isAdopted ? "ui disabled button" : "ui primary button"}>Adopt pet</button>
      </div>
    </div>
  )
}
}
export default Pet



