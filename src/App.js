import { useState } from 'react';
import data from "./data.json";
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState(data) //tenemos un estado inicial y un set para actualizarlo 
  const onComplete = (id) => {
    console.log('task', id)

    setTodos(todos.map((todo) => { //iteramos todos con la fn map que retorna una fn o callback
      return todo.id === Number(id) ? {...todo, completed : !todo.completed} : {...todo} //si algun id coincide con un id ingresado
    }))
  }

  const OnDeleteItem = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  const addTodo = (newTodo) => {
    console.log('newTodo', newTodo);
    let newItem = {id : +new Date(), task: newTodo, completed: false};
    setTodos([...todos, newItem])
  }
  
  return ( //pasamos toda la informacion a la lista de tareas 
    <div className = "container">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos = {todos} onComplete = {onComplete} OnDeleteItem={OnDeleteItem}/>   
    </div>
  );
}

export default App;
