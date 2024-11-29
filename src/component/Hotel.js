import React, {Component} from 'react';


import JSON from './food.json';        
import HotelList from './HotelList';

class Hotel extends Component {
    constructor(){
        super();
        this.state ={                 
            title: 'Pune Restaurants',   
            Hotel: JSON            
        }
    }
    render(){
          return(
            <div>
                <h2>{this.state.title}</h2>
                <HotelList prodlist={this.state.Hotel}/>  
            </div>
        )
    }
}

export default Hotel;