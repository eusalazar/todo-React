import React from 'react'

 function TodoItem({todo, onComplete, OnDeleteItem}) { //le pasamos esta fn a cada todo
    const getStyle= () => {
     return { //retornamos un obj para darle estilo a cada una de las tareas
        textDecoration: todo.completed ? "line-through" : "none" ,
        margin: "20px",
        border: "1px solid #ffffff",
        backgroundColor: "CCF7E3"
    }
    }
    return ( //la propiedad checked cambia de acuerdo a si tiene completed o no 
    <div style = {getStyle()}>
        <input type = 'checkbox' checked = {todo.completed}
        onChange = {() => onComplete (todo.id)} //lo pasamos como propiedad, esta funcion envia el id de la tarea y la marca com
        /> 
        {todo.task}
        <button className = 'add-btn' onClick = {() => OnDeleteItem(todo.id)}>X</button>
    </div>
  )
};

export default TodoItem;
