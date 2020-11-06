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
    this.getCows = this.getCows.bind(this)

  }
  
  componentDidMount() {
    {this.getCows()}
    {console.log(this.state.cowList)}
  }

  getCows() {
    axios.get('/api/cows')
    .then((response) => {
      // console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        this.state.cowList.push(response.data[i]);
      }
    })
    .catch((error) => console.log('Error with GET request: ', error))
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