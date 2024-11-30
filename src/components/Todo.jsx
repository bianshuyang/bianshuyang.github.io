import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);

const inputRef = useRef()

const add = () =>{
    const inputText = inputRef.current.value.trim();

    if (inputText === ""){
        return null;
    }
   
    const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
    }
    setTodoList((prev)=> [...prev, newTodo]);
    inputRef.current.value = "";
}

const deleteTodo = (id)=>{
    setTodoList((prvTodos)=>{
        return prvTodos.filter((todo) => todo.id !== id)
    })
}

const toggle = (id)=>{
    setTodoList((prevTodos)=>{
        return prevTodos.map((todo)=>{
            if(todo.id === id){
                return {...todo, isComplete: !todo.isComplete}
            }
            return todo;
        })
    })
}

useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList))
}, [todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

{/* -------- Title ---------- */}
    <div className='flex items-center mt-7 gap-2'>
        <h1 className='text-3xl font-semibold'>Hello World</h1>
    </div>

{/* -------- Input Box ---------- */}

{/* -------- Todo List ---------- */}

    
    </div>
  )
}

export default Todo