import React, { useContext, useEffect } from 'react'
import './Home.css'
import { EnterField } from "../../EnterField/EnterField";
import { Filter } from "../../Filter/Filter";
import { Tasks } from "../../Tasks/Tasks";
import { ResponseText } from "../../ResponseText/ResponseText";
import { tasksContext } from '../../Context/Context';
import { ItemTask } from '../../ItemTask/ItemTask';



export const Home = () => {

  const contextList = useContext(tasksContext)

  
  const handleCheckboxClick = (taskId) => {
    contextList.setTasks(tasks =>
        tasks.map(task =>
            task.id === taskId ? { ...task, done: !task.done } : task
        )
    );
};

  return (
    <>
    <div id='home'>
      <EnterField/>
      <ResponseText result={`usted tiene ${contextList.tasksPending} tareas pendientes y ${contextList.tasksResolved} tareas completadas`} />
      <Filter />
      <Tasks>
           {
              contextList.tasks.map(task => 
                  (
                      <div className="items" key={task.id}>
                        <ItemTask taskName={task.name} description={task.description}/>
                        <input type="checkbox" checked={task.done} onChange={() => handleCheckboxClick(task.id)} />
                      </div>
                  )
              )
            }
      </Tasks>

    </div>
    </>
  )
}
