import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
//import axios from 'axios';
//import Component from 'react';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Survey To GO Green
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Item Name</label>
          <input
            className='form-input'
            type='text'
            name='itemname'
            placeholder='Enter your Item name'
            value={values.itemname}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Alternate Item</label>
          <input
            className='form-input'
            type='text'
            name='altitem'
            placeholder='Enter item name'
            value={values.altitem}
            onChange={handleChange}
          />
           {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Alternate Item url</label>
          <input
            className='form-input'
            type='text'
            name='alturl'
            placeholder='Enter Url...'
            value={values.alturl}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Image Url</label>
          <input
            className='form-input'
            type='text'
            name='imgurl'
            placeholder='Enter Image ...'
            value={values.imgurl}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Price</label>
          <input
            className='form-input'
            type='text'
            name='amount'
            placeholder='Enter amount of item...'
            value={values.amount}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
         SUBMIT
        </button>
        
      </form>
    </div>
  );
};

export default FormSignup;
