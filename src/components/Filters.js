import React from 'react'

class Filters extends React.Component {

  onChangeType = (event) => {
    // console.log(event.target.value);
    this.props.onChangeType(event.target.value);
  }

    handleClick = () => {
      this.props.onFindPetsClick();
    }


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.onChangeType} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
