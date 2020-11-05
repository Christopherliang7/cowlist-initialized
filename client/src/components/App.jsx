import React from 'react'
import List from './list.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
    <div className='container'>
      <h1>Cow Spotlight:</h1>
      <br />

      <div>
        <h1>Tell me about your cow:</h1>
        <form className='form-container'>
          <input type="text" placeholder="Name"></input>
          <textarea rows='4' cols='50' placeholder='Description'></textarea>
          <button>Submit</button>
        </form>
      </div>
      
      <List />
    </div>
    );
  }
}

export default App;