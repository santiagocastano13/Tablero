import React from 'react'
import { useState, useContext } from "react";
import './EnterField.css'
import { tasksContext } from '../Context/Context';



export const EnterField = () => {

  const context = useContext(tasksContext);


  const [TaskName, setTaskName] = useState('');
  const [TaskDescription, setTaskDescription] = useState('');

  const handleInput = (event) => {
      setTaskName(event.target.value);
  };

  const handleInputDesc = (event) => {
      setTaskDescription(event.target.value);
  };


  const addTask = () => {
    const newId = context.tasks.length + 1;
    const newTaskObject = { id: newId, name: TaskName, description: TaskDescription, done: false };
    let list = ([...context.tasks, newTaskObject]);
    context.setTasks(list);
  };

  return (
    <>
    
    <div id='field'>
        <h3>Titulo de la tarea: </h3>
        <input onChange={handleInput}/>
        <h3>Descripcion de la tarea: </h3>
        <input onChange={handleInputDesc}/>
        <button onClick={addTask}>Crear</button>
    </div>

    </>
  )
}
