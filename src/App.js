import React, {Component} from 'react';
import SearchBar from './SearchBar';
import Cars from'./Cars';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
    }
  }

  searchUpdate = (data) => {
    this.setState({
      query: data
    })
  }

  render(){
    const {query} = this.state
   
    return (
      <div className="App">
        <SearchBar callbackFromParent={this.searchUpdate}/> 
        <Cars  query={query} />
      </div>

    );
  }
}

export default App;
