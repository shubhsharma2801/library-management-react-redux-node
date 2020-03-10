/**Component to show all Headers */
import React, { Component } from 'react';
import './Header.css';
export default class Header extends Component{
    constructor(props){
        super(props);
        this.state ={
            searchValue :''
        }
        this.headerClicked = this.headerClicked.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
    }
/**Adding listner on keypress */    
    componentDidMount(){
        document.addEventListener("keypress",this.handlerSearch.bind(this));
    }
/** Calling onChange method on App to handle header click */    
    headerClicked(value,event){
        if (typeof this.props.onChange === 'function') {
            console.log(value);
            this.props.onChange(value);
        }
    }
/**When enter is pressed in input */    
    handlerSearch(event){
        console.log(this.props);
        if(event.keyCode ===13 ){
            this.props.search(this.state.searchValue);
        }
    }
    handleOnchange(event){
        this.setState({
            searchValue:event.target.value
        });
    }
    render(){
        return(
            <nav class="navigation">
            <ul class="menu">
                <li><a href="#" onClick={this.headerClicked.bind(this,"Home")} >Home</a></li>
                <li><a href="#" onClick={this.headerClicked.bind(this,"Add Book")}>Add Book</a></li>
                <li><div className="search">
                        <input type="text" placeholder="Press Enter to Search" name="search" onChange={this.handleOnchange}/>
                        
                    </div>
                </li>
                
            </ul>
            </nav>
        );
    }
}