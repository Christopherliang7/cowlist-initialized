import React from 'react';
import List from './List.jsx'
import Spotlight from './Spotlight.jsx'
import Submit from './Submit.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cowList: [],
      spotlightName: '',
      spotlightDescription: ''
    }
    this.getCows = this.getCows.bind(this)
    this.cowClicked = this.cowClicked.bind(this)
  }

  componentDidMount() {
    this.getCows()
    console.log(this.state.cowList)
  }

  getCows() {
    const cowListArray = [];
    axios.get('/api/cows')
    .then((response) => {
      // console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        cowListArray.push(response.data[i]);
      }
      this.setState({cowList: cowListArray})
    })
    .catch((error) => console.log('Error with GET request: ', error))
  }

  cowClicked(cowItem) {
    console.log(cowItem);
    this.setState({spotlightName: cowItem.cow_name, spotlightDescription: cowItem.cow_description})
  }

  render() {
    return (
    <div className='container'>
      <Spotlight />
      <p>{this.state.spotlightName}</p>
      <p>{this.state.spotlightDescription}</p>
      <br />
      <Submit />
      <br />
      <h1>List of Cows:</h1>
      {this.state.cowList.map(cowItem => {
        console.log(cowItem)
        return (
          <div>
            <button onClick={() => this.cowClicked(cowItem)}>
              <p>{cowItem.cow_name}</p>
            </button>
          </div>
        )
      })}

      {/* <List cowList={this.state.cowList}/> */}
    </div>
    )
  }
}

export default App;