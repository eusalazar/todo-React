import React, { useState } from 'react'

 function TodoForm({addTodo}) {

    const [userInput, setuserInput] = useState('');

    const handleOnchange = (e) => {  //podemos cambiar el texto de la caja
        setuserInput(e.currentTarget.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();   //para que el formulario no se envie por defecto
        if(userInput.trim() !== ''){  //verificamos el texto ingresado en la cajita-si el lo que ingresamos es distinto a vacio
            addTodo(userInput); //agregamos a al componente padre dicho texto
            setuserInput('');    //limpiamos la cajita

        }
    }

  return (
    <div style = {{margin:20}}>
        <form onSubmit = {handleSubmit}>
            <input type = "text"  value = {userInput} onChange = {handleOnchange}/>
            <button>Add todo</button>
        </form>
    </div>
  )
};

export default TodoForm;
