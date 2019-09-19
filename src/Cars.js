import React, {Component} from 'react';
import CarCards from './components/CarCards';
import Pagination from './components/Pagination';
import config from './config.js';
export default class Cars extends Component{
    constructor(props){
        super(props);
        this.state = {
          cars: [],
          isLoaded: false,
          count: 0,
          page: 1,
          newpage: 1,
        }
        this.getData = this.getData.bind(this);
      }
    
    
    componentDidMount(){
        this.getData(this.state.newpage, this.props.query)
    }  

    componentDidUpdate(query, prevState) {
        if(this.state.query!==this.props.query){
            this.getData(this.state.page, this.props.query)
        }
        if(this.state.newpage!==this.state.page){
            this.getData(this.state.newpage, this.state.query)
            window.scrollTo(0, 0)
        }

    }

    pageUpdate = (data) =>{
        this.setState({
            newpage: data
        })
    }


    getData(page,query) {
        fetch(config.api + page + '&search=' + query, {
          headers: {
              authorization: config.token
          }
      }).then(res => res.json())
      .then(
          
        (data) => {
        
          this.setState({
            isLoaded: true,
            cars: data.results,
            query: query,
            page: page,
            count: data.count 
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
    }

    render(){
        let {cars, isLoaded,count, page} = this.state
        return(
            <div>
                <div style={{paddingTop: 10}}>
                    <CarCards col isLoaded={isLoaded} cars = {cars}/>
                </div>
                <footer style={{padding:30}}>
                    <Pagination callbackFromParent={this.pageUpdate} page = {page} count = {Math.round(count/24)}/>
                </footer>
            </div>
        );
    }
}