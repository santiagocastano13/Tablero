import React from 'react'
import { createContext, useState } from "react";


export const tasksContext = createContext();

export const TaskProvider = ({ children }) => {
  
    const [tasks, setTasks] = useState([]);

    const tasksResolved = tasks.filter(task => task.done).length;
    const tasksPending = tasks.filter(task => !task.done).length;



  return (
    <>
    
    <tasksContext.Provider value={{ tasks, setTasks, tasksResolved, tasksPending}}>
        {children}
    </tasksContext.Provider>
    
    </>
  )
}
