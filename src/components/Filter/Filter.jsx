import { useState, useContext } from 'react';
import './Filter.css';
import { tasksContext } from '../Context/Context';



export const Filter = () => {
  const filterContext = useContext(tasksContext);
  const [filterType, setFilterType] = useState('');

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filteredTasks = filterType === '' ? filterContext.tasks :
  filterType === 'Pendientes' ? filterContext.tasks.filter(task => !task.done) :
  filterType === 'Resueltas' ? filterContext.tasks.filter(task => task.done) :
  contextList.tasks;

  return (
    <>
      <div id='filter'>
        <h3 id='filterTitle'>Filtrar: </h3>
        <select name="Filter" id="Filter" onChange={handleFilterChange}>
          <option value="">Todas las tareas</option>
          <option value="Pendientes">Pendientes</option>
          <option value="Resueltas">Resueltas</option>
        </select>
      </div>
    </>
  );
};
