import React from 'react'
import axios from 'axios'

class Submit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cow_name: '',
      cow_description: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onNameChange(event) {
    event.preventDefault();
    this.setState({cow_name: event.target.value});
  }

  onDescriptionChange(event) {
    event.preventDefault();
    this.setState({cow_description: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault()
    axios.post('/api/cows', {cow_name: this.state.cow_name, cow_description: this.state.cow_description})
    .then(response => {console.log(response)})
    .catch(error => {console.log('Error with Axios POST request: ', error)});
  }

  render() {
    return (
      <div>
        <h1>Tell us about your cow:</h1>

        <form className='form-container' onSubmit={(event) => this.onSubmit(event)}>
          <input type="text" placeholder="Name" name='cow_name' onChange={this.onNameChange} />
          <br />
          <textarea rows='4' cols='50' placeholder='Description' name='cow_description' onChange={this.onDescriptionChange} />
          <input type='submit' />
        </form>
      </div>
    )
  }
};

export default Submit