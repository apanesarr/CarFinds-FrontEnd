import React, {Component} from 'react';
import SearchBar from './SearchBar';
import Cars from'./Cars';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      page: 1
    }
  }

  searchUpdate = (data) => {
    this.setState({
      query: data
    })
  }

  render(){
    console.log(this.state.query)
    return (
      <div className="App">
        <SearchBar callbackFromParent={this.searchUpdate}/> 
        <Cars />
      </div>

    );
  }
}

export default App;
