import React, { Component } from 'react';
import axios from 'axios';
export default class Booklist extends Component {
     constructor(props) {
        super(props);
        this.state = {status:false, data:[]}; 
    }
   componentDidMount(){         axios.get("http://localhost:4000/books/").
   then((response) => {
                this.setState({
                    data: response.data ,
                    status: true
                })
         })
   }    
  render() { 
    let  bookItemClick = this.props.bookItemClick;
    return (
      <div className="col-md-2">
        <ul class="list-group">
        {
            this.state.data.map(function(v, k){
                return(
                    <li class="list-group-item"
                        onClick = {
                            bookItemClick.bind(null, v.id)}>
                    {v.name}
                    </li>
                )
            })
        }        
        
        </ul>
      </div>
    );
  }
}


