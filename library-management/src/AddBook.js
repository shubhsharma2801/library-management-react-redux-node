/** Component to display ADD and EDIT book screen */
import React, { Component } from 'react';
import './AddBook.css';
import {editAction} from './actions/simpleAction';
import { connect } from 'react-redux';
//redux dispatch map to edit 
const mapDispatchToProps = dispatch => ({
    editAction: (data) => dispatch(editAction(data)),
  })
  
  /* 
   * mapStateToProps
  */
  const mapStateToProps = state => ({
    ...state
  })

class AddBook extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            description:'',
            author:'',
            count:0
        }
        this.editMode =false;
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onBookEdit =this.onBookEdit.bind(this);
    }
    /**When book is edited and saved */
    onBookEdit(){
        console.log(this.props);
        this.props.editAction(this.state);
        if (typeof this.props.onChange === 'function') {
            this.props.onChange("Home");
        }
    }
    /**Here we check if it is editMode. If yes then we set the state with prop passed in editBook */
    componentDidMount(){
        console.log(this.props.editBook);
        if(this.props.editBook){
            this.setState(this.props.editBook);
            this.editMode =true;
        }
      }
    /**Generic handler to handle input change and assigning to state */
    onChangeHandler(event){
        var obj = Object.assign({},this.state);
        obj[event.target.name]=event.target.value;
        this.setState(obj);
    }
    /**When book is added we update the redux store and then reset the state */
    onBookSubmit(event){
        event.preventDefault();
        this.props.onBookSubmit(this.state);
        this.setState({
            name:'',
            description:'',
            author:'',
            count:0
        });
    }
    headerClicked(value,event){
        
    }
    render(){
        return (
            
        <div className="form">
            
              <label for="fname">Book Name</label>
              <input type="text" value={this.state.name} name="name" onChange={this.onChangeHandler}/>
          
              <label for="lname">Book Description</label>
              <input type="text" value={this.state.description} name="description" onChange={this.onChangeHandler}/>
          
              <label for="country">Author</label>
              <input type="text" value={this.state.author} name="author" onChange={this.onChangeHandler}/>

              <label for="country">Count</label>
              <input type="number" value={this.state.count} name="count" onChange={this.onChangeHandler}/>
             {/**on basis of edit mode buttons are rendered */} 
              {!this.editMode?<button onClick={this.onBookSubmit.bind(this)} value="Submit">Add Book</button>:
              <button onClick={this.onBookEdit.bind(this)} value="Submit">Edit Books</button>}
            
          </div>);
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddBook);