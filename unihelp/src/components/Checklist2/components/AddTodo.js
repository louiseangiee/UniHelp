import React, { useState, useEffect } from "react";
// import { db } from "../firebase";
import { useDocument } from '../../../hooks/useDocument';
import { useFirestore } from "../../../hooks/useFirestore";
import { useAuthContext } from "../../../hooks/useAuthContext";

export default function AddTodo({ uni }) {
  const { user } = useAuthContext()
  const { updateDocument, response } = useFirestore('userProgress')
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const { document, error } = useDocument('userProgress', `progress${user.uid}`)

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('')
    let errors = []

    if(name.trim() === ''){
      errors.push('name')
    } 
    if(deadline === ''){
      errors.push('deadline')
    }

    if(errors.length > 0) {
      setErrorMessage(`Please enter ${errors.join(', ')}`)
      return
    }

    const toDoToAdd = {
      name,
      deadline,
      done: false
    }

    if(uni === 'nus'){
      await updateDocument(`progress${user.uid}`, {
        nus: [...document[uni], toDoToAdd]
      })
    } else if (uni === 'ntu'){
      await updateDocument(`progress${user.uid}`, {
        ntu: [...document[uni], toDoToAdd]
      })
    } else if (uni === 'smu'){
      await updateDocument(`progress${user.uid}`, {
        smu: [...document[uni], toDoToAdd]
      })
    }

    

    if(!response.error){
      setName('')
      setDeadline('')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter todo..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="input_container">
        <input
          type="date"
          placeholder="Enter deadline"
          onChange={(e) => setDeadline(e.target.value)}
          value={deadline}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}