import React, { Component } from 'react';
import './HomePage.css';
import Books from './Book';
import AddBook from './AddBook';
export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            bookCount:this.props.books.length,
            onEdit:false
        }
        this.isBookEmpty =this.isBookEmpty.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onBookEdited =this.onBookEdited.bind(this);
        this.onHeaderClicked =this.onHeaderClicked.bind(this);
        this.currentBook ={};
    }
    onBookEdited(){

    }
    isBookEmpty(){
        
    }
    onHeaderClicked(){
        this.setState({
            bookCount:this.props.books.length,
            onEdit:false
        });
        this.currentBook={};
    }
    onEdit(value){
        console.log(value);
        this.setState({
            bookCount:this.props.books.length,
            onEdit:true
        });
        this.currentBook=value;
    }
    render(){
        if(!this.state.onEdit){
            const books = this.props.books.map((item,index)=>{
                return <Books key={index} onEdit={this.onEdit} item={item}/>
            });
            return(
            <div className="row">
                
                    {this.props.books.length >0 ? books:<h1>There is no book added. Please Add!!</h1>}
            </div>);
        }else{
            return (<AddBook onChange={this.onHeaderClicked}  editBook={this.currentBook} onBookEdit={this.onBookEdited}/>);
        }
        
    }
}