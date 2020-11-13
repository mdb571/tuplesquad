import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/Person';
import styled from 'styled-components';
import { render } from 'react-dom';

 const Butsty = styled.button`
 background-color: ${props => props.alt ? 'red':'green'};
 padding: 10px;
 border:2px solid black;
 font:inherit;
 color: white;
 cursor:pointer;
 &:hover{
   background-color:${props => props.alt ? 'salmon':'lightgreen'};
   color:black
  }
  `;

class App extends Component {

  state = {
    persons:[
      {id:"aknsk",
        name: 'Akash',age:22},
      {id:"asasa",
        name: 'Rohit', age:23},
      {id:"adsa",
        name:'Ganesh', age:24}
    ],
    showPerson: false

  }
 


  hideNameHandler=()=>
  {
     const hide=this.state.showPerson;
     this.setState({showPerson: !hide})
  }
  deleteNameHandler=(pind)=>
  {
    const persons = [...this.state.persons];
    persons.splice(pind,1);
    this.setState({persons:persons});
     
  }
  render()
  {
    
   
    let persons =null;
    if (this.state.showPerson) {
     
      persons=(
        <div>
        {this.state.persons.map((person,index )=> {
          return <Person  click={()=>this.deleteNameHandler(index)}
          name={person.name} age={person.age} key={index} />
        })}
        </div>
      );
   } 
        

    
    return (
      <div className="App">
        <h1>Welcome to react</h1>
        <Butsty alt={this.state.showPerson} onClick={this.hideNameHandler} >CLICK TO CHANGE</Butsty>
        {persons}

       
      
      </div>
    );

  }
}
export default  App;
