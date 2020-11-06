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
      selectiveCow: {id: 0, cow_name: '', cow_description: ''}
    }
    this.getCows = this.getCows.bind(this)
    this.cowClicked = this.cowClicked.bind(this)
    this.cowDeleted = this.cowDeleted.bind(this)
    // this.cowUpdated = this.cowUpdated.bind(this)
  }

  componentDidMount() {
    this.getCows()
    // console.log(this.state.cowList)
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
    // console.log(cowItem);
    this.setState({selectiveCow: {id: cowItem.id, cow_name: cowItem.cow_name, cow_description: 
      cowItem.cow_description}})
    // console.log('THIS IS SELECTIVE COW: ', this.state.selectiveCow)
  }

  cowDeleted(cowItem) {
    axios.delete(`./api/cows/${cowItem.id}`)
    .then(this.getCows())
    .catch((error) => ('Error with Delete Request: ', error))
  }

  render() {
    return (
    <div className='container'>
      <Spotlight cowItem={this.state.selectiveCow}/>
      {/* {this.state.selectiveCow.cow_name} */}
      <br />
      <Submit getCows={this.getCows}/>
      <br />
      <h1>List of Cows:</h1>
      {this.state.cowList.map(cowItem => {
        return (
          <div>
            <button onClick={() => this.cowClicked(cowItem)}>
              <p>{cowItem.cow_name}</p>
            </button>
            <button onClick={() => this.cowDeleted(cowItem)}>Delete</button>
          </div>
        )
      })}

    </div>
    )
  }
}

export default App;