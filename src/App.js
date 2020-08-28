import React, { Component } from 'react';
import { baseUrl } from './component/baseUrl';
import { Main } from './component/MainComponent';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          colleges:[]
        };
        this.getCollege();
    }

    getCollege = async () =>{
        const api_call = await fetch(baseUrl + "colleges")
        const response = await api_call.json();
        console.log(response)
        this.setState({
          colleges:response
        })
 
    }

    render(){
        return(
            <div>
              <Main colleges={this.state.colleges}/>
            </div>
        )
    }
}

export default App;
