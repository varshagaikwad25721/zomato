import React,{Component} from 'react';
import './Search.css'; 

class search extends Component{
    constructor(){
        super()
        this.state={                    
            title:'React App',         
            userInput:'Plz. enter Product to search'  
        }
    }
    
    inputChange=(event)=>{ 
        this.setState({userInput:event.target.value ? event.target.value : 'Plz.enter Product to search'})
    }
    render(){ 
        return(
            <div className='img'>
                <center >
                    <h1 className='zo'> <i>Zomato</i></h1>
                    <p className='para'>Discover the best food & drinks in Pune</p> 
                    <center>
                  
                        <input placeholder="Search for restaurant or a dish"
                        onChange={this.inputChange}/>  
                    </center>
                    {/* <p>{this.state.userInput}</p>    */}
                </center>
                <hr/>
            </div>
        )
    }
}

export default search;