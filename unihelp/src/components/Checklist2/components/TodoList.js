import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useFirestore } from "../../../hooks/useFirestore";

export default function TodoList({ todo, todos }) {
  const { user } =  useAuthContext()
  const { updateDocument, response } = useFirestore('userProgress')
  const [newTitle, setNewTitle] = useState(todo.title)
  const [newDeadline, setNewDeadline] = useState(todo.deadline)

  const toggleComplete = async (todo) => {
    for(var i = 0; i < todos.length; i++){
      if(todos[i] === todo){
        todos[i] = {...todo, done: true}
      }
    }
    await updateDocument(`progress${user.uid}`,{
      ntu: todos
    })
  };

  const handleDelete = async (todo) => {
    for(var i = 0; i < todos.length; i++) {
      if (todos[i] == todo) {
          todos.splice(i, 1);
      }
    }

    await updateDocument(`progress${user.uid}`,{
      ntu: todos
    })
  };

  return (
    <>
    <div className="todo">
      <input
        style={{ textDecoration: todo.done && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        disabled
        // onChange={handleChange}
      />
      <input
        style={{ textDecoration: todo.done && "line-through" }}
        type="date"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        disabled
        // onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          // onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
    </>
  );
}