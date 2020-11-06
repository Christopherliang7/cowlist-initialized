import React from 'react';
import List from './List.jsx'
import Spotlight from './Spotlight.jsx'
import Submit from './Submit.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cowList: []
    }
  }

  render() {
    return (
    <div className='container'>
      <Spotlight />
      <br />
      <Submit />
      <br />
      <List />
    </div>
    )
  }
}

export default App;