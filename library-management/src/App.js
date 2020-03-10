/**Parent component to hold all methods */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import AddBook from './AddBook';
import HomePage from './HomePage';
import './App.css';

import { simpleAction,searchAction,dataLoaded } from './actions/simpleAction'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: (data) => dispatch(simpleAction(data)),
  searchAction:(data)=>dispatch(searchAction(data)),
  dataloaded :(data)=>dispatch(dataLoaded(data))
  
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  constructor(props){
    super(props);
    /**To decide which header is clicked. Default is set to home page */
    this.state ={
      headerClicked :'Home'
    }
    this.onHeaderClicked = this.onHeaderClicked.bind(this);
    this.onBookSubmit=this.onBookSubmit.bind(this);
    this.onSearch=this.onSearch.bind(this);
  }
  /**REST : GET call to get exixting books */
  componentDidMount() {
    fetch("http://localhost:9000/library")
      .then(res => res.text())
      .then(
        (result) => {
          console.log("##########");
          console.log(result);
          /**If data is available update the redux store with updated value */
          this.props.dataloaded(JSON.parse(result));
        },
        (error) => {
          console.log("##########");
          console.log(error);
          
        }
      )
  }
  /**Callback function passed to child as prop.It is called when header is clicked in child.  */
  onHeaderClicked(value){
    console.log("##############"+value);
    this.setState({
      headerClicked : value
    });
    this.forceUpdate();
  }
  /** When new book is added */
  onBookSubmit(value){
    this.props.simpleAction(value);
  }
  /**When user press enter in search bar. Callback function passed to child */
  onSearch(value){
    console.log(value);
    this.props.searchAction(value);
  }
  /**Rendering Logic: based on headerClicked components are rendered */
  render() {
    return (
      <div className="App">
        <Header onChange={this.onHeaderClicked} search={this.onSearch}/>
        
        {this.state.headerClicked ==="Add Book"?<AddBook onBookSubmit={this.onBookSubmit}/>:
        this.state.headerClicked==="Home"?<HomePage  
        books={this.props.simpleReducer.search.length>0?this.props.simpleReducer.search:this.props.simpleReducer.books}/>:''}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);