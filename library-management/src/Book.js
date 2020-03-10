/**Show single book card */
import React, { Component } from 'react';
import './HomePage.css';


export default class Book extends Component{
    constructor(props){
        super(props);
        this.onEditClicked =this.onEditClicked.bind(this);
    }
    /**When edit button is clicked */
    onEditClicked(){
        this.props.onEdit(this.props.item);
    }
    render(){
        return (
            <div className="column">
                <div className="card">
                <h3>{this.props.item.name}</h3>
                <p><b>Author :</b>{this.props.item.author}</p>
                <p><b>Quantity :</b>{this.props.item.count}</p>
                <p><b>Description :</b>{this.props.item.description}</p>
                
                <button style={{width:"auto",backgroundColor:"#222"}} onClick={this.onEditClicked}>Edit</button>
            </div>
            
        </div>
        );
    }
}
