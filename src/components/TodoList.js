import React from 'react'
import TodoItem from './TodoItem';

 function TodoList({todos, onComplete, OnDeleteItem}) { //para recibir la lista de tareas la paso como props- componente padre 
  return (
    <div>
        {
            todos.map((todo,index) => (
                <TodoItem key={`todo-${index}`} todo={todo} onComplete={onComplete} OnDeleteItem={OnDeleteItem}/>
            ))
        }
    </div>
  )
};

export default TodoList;
