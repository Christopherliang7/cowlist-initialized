import React from 'react';
import axios from 'axios';

class Spotlight extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      update_cow_name: this.props.cowItem.cow_names,
      update_cow_description: this.props.cowItem.cow_description
    }

    this.cowUpdated = this.cowUpdated.bind(this)
    this.onUpdateName = this.onUpdateName.bind(this)
    this.onUpdateDescription = this.onUpdateDescription.bind(this)
  }

  cowUpdated(event) {
    event.preventDefault();
    console.log('COW UPDATING: ', this.props.cowItem.id)
    axios.put(`/api/cows/${this.props.cowItem.id}`, {cow_name: this.state.update_cow_name, cow_description: this.state.update_cow_description})
  }

  onUpdateName(event) {
    event.preventDefault()
    this.setState({update_cow_name: event.target.values})
  }

  onUpdateDescription(event) {
    event.preventDefault()
    this.setState({update_cow_description: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>Cow Spotlight: </h1>
        {/* onSubmit={(event) => this.cowUpdated(event)} */}
        <form >
          <input name='cow_name' value={this.props.cowItem.cow_name} onChange={this.onUpdateName}/> 
          <textarea name='cow_name' value={this.props.cowItem.cow_description} onChange={this.onUpdateDescription}/>
          <button>Update</button>
        </form>
  
      </div>
    )
  }

}


  

export default Spotlight;