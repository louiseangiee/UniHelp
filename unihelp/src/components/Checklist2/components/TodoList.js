import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


import { useAuthContext } from "../../../hooks/useAuthContext";
import { useFirestore } from "../../../hooks/useFirestore";

export default function TodoList({ todo, todos, uni }) {
  const { user } =  useAuthContext()
  const { updateDocument, response } = useFirestore('userProgress')
  const [newTitle, setNewTitle] = useState(todo.title)
  const [newDeadline, setNewDeadline] = useState(todo.deadline)

  const toggleComplete = async (todo) => {
    for(var i = 0; i < todos.length; i++){
      if(todos[i] === todo){
        if(todos[i].done === false){
          todos[i] = {...todo, done: true}
        } else {
          todos[i] = {...todo, done: false}
          
        }
      }
    }

    console.log(todos)
    if(uni === 'nus'){
      await updateDocument(`progress${user.uid}`,{
        nus: todos
      })
    } else if (uni === 'ntu'){
      await updateDocument(`progress${user.uid}`,{
        ntu: todos
      })
    } else if (uni === 'smu'){
      await updateDocument(`progress${user.uid}`,{
        smu: todos
      })
    }
  };

  const handleDelete = async (todo) => {
    for(var i = 0; i < todos.length; i++) {
      if (todos[i] == todo) {
          todos.splice(i, 1);
      }
    }
    console.log(todos)
    if(uni === 'nus'){
      await updateDocument(`progress${user.uid}`,{
        nus: todos
      })
    } else if (uni === 'ntu'){
      await updateDocument(`progress${user.uid}`,{
        ntu: todos
      })
    } else if (uni === 'smu'){
      await updateDocument(`progress${user.uid}`,{
        smu: todos
      })
    }
  };

  return (
    <>
    <div className="list-item">

      <button
        className="button-complete"
        onClick={() => toggleComplete(todo)}>
      <img src= {"logos/complete.png"}></img>
        {/* <CheckCircleIcon id="i" /> */}
      </button>
    

      <p className="list">{todo.name}</p>
      <p className="list">{todo.deadline}</p>
        
     
    
      <button className="button-delete" onClick={() => handleDelete(todo)}>
        <img src= {"logos/delete.png"}></img>
        {/* <DeleteIcon id="i" /> */}
      </button>

    </div>
    </>
  );
}