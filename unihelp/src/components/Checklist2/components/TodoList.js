import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


import { useAuthContext } from "../../../hooks/useAuthContext";
import { useFirestore } from "../../../hooks/useFirestore";

export default function TodoList({ todo, todos, uni }) {
  const { user } = useAuthContext()
  const { updateDocument, response } = useFirestore('userProgress')
  const [newTitle, setNewTitle] = useState(todo.title)
  const [newDeadline, setNewDeadline] = useState(todo.deadline)

  const toggleComplete = async (todo) => {
    for (var i = 0; i < todos.length; i++) {
      if (todos[i] === todo) {
        if (todos[i].done === false) {
          todos[i] = { ...todo, done: true }
        } else {
          todos[i] = { ...todo, done: false }

        }
      }
    }

    console.log(todos)
    if (uni === 'nus') {
      await updateDocument(`progress${user.uid}`, {
        nus: todos
      })
    } else if (uni === 'ntu') {
      await updateDocument(`progress${user.uid}`, {
        ntu: todos
      })
    } else if (uni === 'smu') {
      await updateDocument(`progress${user.uid}`, {
        smu: todos
      })
    }
  };

  const handleDelete = async (todo) => {
    for (var i = 0; i < todos.length; i++) {
      if (todos[i] == todo) {
        todos.splice(i, 1);
      }
    }
    console.log(todos)
    if (uni === 'nus') {
      await updateDocument(`progress${user.uid}`, {
        nus: todos
      })
    } else if (uni === 'ntu') {
      await updateDocument(`progress${user.uid}`, {
        ntu: todos
      })
    } else if (uni === 'smu') {
      await updateDocument(`progress${user.uid}`, {
        smu: todos
      })
    }
  };

  return (
    <>

      <div className="list-item row d-flex justify-content-between">
        <div className="col-1 d-flex justify-content-start">
          <button
            className="button-complete"
            onClick={() => toggleComplete(todo)}>
            <img src={todo.done ? "logos/check-box.png" : "logos/square.png"} className="logo-todo"></img>
          </button>
        </div>

        <div className="col d-flex justify-content-center align-items-center">
          <p className="list">{todo.name}</p>
        </div>

        {/* <div className="col-5"> 
          <p className="list">{todo.deadline}</p>
        </div> */}

        <div className="col-1 d-flex justify-content-end">
          <button className="button-delete" onClick={() => handleDelete(todo)}>
            <img src={"logos/delete.png"} className="logo-todo"></img>
          </button>
        </div>

      </div>
    </>


  );
}