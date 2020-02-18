import React, { Component } from 'react';
import axios from 'axios';
export default class BookContainer extends Component {
     constructor(props) {
        super(props);
        this.state = {status:false, data:{}}; 
        this.getData = this.getData.bind(this); 
    }
    
  componentWillReceiveProps(newProps){
      this.getData(newProps.id)
  }    
  componentDidMount(){ 
   
   if(this.props.id === -1)
       return;
    this.getData(this.props.id);  
   } 
    
  getData(id){
      axios.get("http://localhost:4000/books/"+id).
      then((response) => {
                this.setState({
                    data: response.data ,
                    status: true
                })
         })
  }    
      
  render() { 
    if(!this.state.status)
        return(
            <h4>Select a book..</h4>
        )
    let v = this.state.data;  
    return (
      <div className="col-md-10">
                    <img src={`http://localhost:4000/books/${v.id}.jpeg`} width="90px"/>
                     <h6>Name: {v.name} </h6>
                     <h6>Author: {v.author}</h6>
                     <h6>Publication Year: {v.publication_year}</h6>
                     <h6>Description: {v.description}</h6>
                     <h6>Rating: >{v.rating}</h6>
                     <h6>Price: {v.price}   </h6>
      </div>
    );
  }
}


