import React from 'react';
import {useState} from 'react/cjs/react.development';
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function TodoList() {
 
 // state array which holds all todos
 const [todos, setTodos] = useState([]);
 
 //function to add a todo to list
 const addTask = task => {
     if (!task.text)
     {
         return
     }
     //... destructing todos array
     const newTodos = [task,...todos]; 
     //above line equals to below two lines of code
     //const oldTask = todos;
     //todos.push(task);

     setTodos(newTodos); //updation of state
 }

    //function to remove a todo from the list
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task=> id !==  id);
        setTodos (updatedTasks) 
    }
    //function to show task is completed
    const completeTask = id => {
        let updatedTasks = todos.map (todo => {
            if (todo.id ==id){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)

    }


    return <div>
        
        <TodoForm addTask={addTask}> </TodoForm>
        <Todo todos = {todos} completeTask={completeTask} removeTask = {removeTask}></Todo>
    </div>;
  
}