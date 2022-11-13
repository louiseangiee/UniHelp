//functionalities
import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useDocument } from '../../hooks/useDocument'

//components
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";


function Todo({ uni }) {
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
        <AddTodo uni={ uni }/>
      </div>
      {document && (
      <div>
        {document[uni].map(todo => (
          <TodoList todo={todo} todos={document[uni]} uni={ uni }/>
        ))}
      </div>
      )}
    </div>
  );
}
export default Todo;