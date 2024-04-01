import React, { useContext, useEffect } from 'react'
import './Home.css'
import { EnterField } from "../../EnterField/EnterField";
import { Filter } from "../../Filter/Filter";
import { Tasks } from "../../Tasks/Tasks";
import { InfoText } from "../../InfoText/InfoText";
import { tasksContext } from '../../Context/Context';
import { ItemTask } from '../../ItemTask/ItemTask';



export const Home = () => {

  const context = useContext(tasksContext)

  return (
    <>
    <div id='home'>
      <EnterField/>
      <InfoText result={`Usted tiene ${context.tasksPending} tareas pendientes y ${context.tasksResolved} tareas completadas`} />
      <hr />
      <Filter />
      <Tasks>
           {
              context.filteredTasks.map(task => 
                <div className="items" key={task.id}>
                  <ItemTask taskId={task.id} taskName={task.name} description={task.description} taskDone={task.done}/>
                </div>              
              )
            }
      </Tasks>

    </div>
    </>
  )
}
