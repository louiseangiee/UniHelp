//functionalities
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useDocument } from '../../hooks/useDocument'

//components
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";


function Todo() {
  const { updateDocument, response } = useFirestore('userProgress')
  const [todos, setTodos] = useState([]);
  const { user } = useAuthContext()
  const { document, error } = useDocument('userProgress', `progress${user.uid}`)

  return (
    
    <div>
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      {document && (
      <div>
        {document.ntu.map(todo => (
          <TodoList todo={todo} todos={document.ntu} />
        ))}
      </div>
      )}
    </div>
  );
}
export default Todo;