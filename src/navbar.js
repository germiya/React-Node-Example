import React, { Component } from 'react';
export default class NavBar extends Component {
     constructor(props) {
        super(props);        
    }     
  render() {
     
    return (
      <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">BookApp</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
        </ul>
      </div>
    </nav>
    );
  }
}



