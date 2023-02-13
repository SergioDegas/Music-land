


import React from 'react';
import { useDispatch } from 'react-redux';
import { ContactAddApi } from './Api';
import {ResponsiveBar} from './AppBar/AppBar'


export const App = () => {

  // dispatch(() => ContactAddApi());
// ContactAddApi()
 
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    console.log(text);
    if (text !== '') {
      // dispatch(ContactAddApi(text));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };
   return (
     <>
       <ResponsiveBar />
       <form  onSubmit={handleSubmit}>
         <input name="text"  />
         <button type="submit" >
           Add task
         </button>
       </form>
     </>
   );
};
