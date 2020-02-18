import React, { Component } from 'react';
import Navbar from './navbar.js';
import Booklist from './booklist.js';
import BookContainer from './bookcontainer.js'

export default class App extends Component {
     constructor(props) {
        super(props);
        this.state={selectedId:-1}; 
        this.bookItemClick = this.bookItemClick.bind(this); 
    }   
    bookItemClick(id){
        this.setState({selectedId:id});
    }
  render() {     
    return (
      <div className="container-fluid">
        <Navbar/>
        <div className="row">
            <Booklist bookItemClick={this.bookItemClick} />
            <BookContainer id={this.state.selectedId}/>
        </div>
      </div>
    );
  }
}


