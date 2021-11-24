import { useState, useEffect } from 'react';
import axios from 'axios';
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    itemname: '',
    altitem: '',
    alturl: '',
    imgurl: '',
    amount:'',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);

    let data = {
      item: values.itemname,
      alt_title: values.altitem,
      alt_url: values.alturl,
      alt_img: values.imgurl,
      alt_price:values.amount,
    };
    
    axios.post('https://dswqyz.deta.dev/add/t96aac78ft70', data)
    .then(response => console.log(response));
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
