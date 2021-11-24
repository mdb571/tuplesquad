import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn' onClick={()=>setIsSubmitted(false)}>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://us.123rf.com/450wm/cienpies/cienpies1803/cienpies180300057/96841508-eco-friendly-city-concept-illustration-for-sustainable-urban-lifestyle-go-green-typography-quote-wit.jpg?ver=6' alt="" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
