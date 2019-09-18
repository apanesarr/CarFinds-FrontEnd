import "./SearchBar.css"
import React, {Component} from 'react';
import {Search} from 'semantic-ui-react';
export default class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          value: ''
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    
      handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })
        setTimeout(() => {
          if (this.state.value.length < 1) this.setState({ isLoading: false }) 
          this.setState({
            isLoading: false,
          })
          this.handleSubmit()
        }, 300)
       
      }
    
      handleSubmit(){
        this.props.callbackFromParent(this.state.value)
      }
    
      render() {
        const { isLoading, value } = this.state
        return (
          <div className="header">
            <h1 className="logo">CarFinds</h1>
            <div className="header-right">
            <Search 
              loading={isLoading} 
              showNoResults={false} 
              onSearchChange={this.handleSearchChange}
              value={value}
            />
            </div>
          </div>
        );
      }
    }