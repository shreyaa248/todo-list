import React, { useState } from 'react';

export default function TodoForm(props) {
   // input state initialization
   const [input, setInput] = useState('');
  
   //on change of  input
   const handleChange = e => {
      setInput(e.target.value)
}
  
   const handleSubmit = (e) => {
    //preventing reloading of page when form is submitted
      e.preventDefault();
      props.addTask ({
         id: Math.floor(Math.random()*100000),
      text:input ,
      isComplete: false
      })
      setInput('')

      
   } 


   return <form className="todo-form">
       
      <input types="text" placeholder='Add a todo' onChange ={handleChange} className ="todo-input" value={input} name="text" />
      
      <button type = "submit" onClick={handleSubmit} className='todo-btn'> ADD TODO</button>
   </form>;
}
