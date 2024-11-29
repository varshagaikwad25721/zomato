import React from 'react';
import './Hotel.css';                    

const HotelList = (prodlist) => {         

                                            
    const renderList = ({prodlist}) => {    
         
        if(prodlist){                       
            return prodlist.map((data) => { 
                return(
                    <div key={data.id} className="card col-md-3">
                        <div className="row">
                            <div className="card-img">
                            <img className="card-img-top" src={data.image} alt={data.name}/>
                            </div>
                            <hr/>
                            {/* <span className="topTemp">{data.location}</span> */}
                            </div>
                            <div className="card-body">
                            <span className="max"> {data.cuisine}</span>  
                                {/* <h4 className="card-title">{data.rating}</h4> */}
                                <div className="card-text">
                                    <p className="day">{data.description}</p>
                                </div>
                        </div>
                    </div>
                )  
            })
        }  
    }
    return(
        <div className="container">
            <div  className="row">
                {renderList(prodlist)}  
            </div>
        </div>
    )
}

export default HotelList;