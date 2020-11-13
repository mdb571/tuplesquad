import React from 'react';
import styled from 'styled-components';



const Person =(props)=>{
return(<p onClick={props.click}>This is for Storing Person information
 my name is {props.name} age is {props.age}
 </p>)

}

export default Person;