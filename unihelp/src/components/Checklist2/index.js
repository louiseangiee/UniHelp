import React, {useEffect, useState} from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from  "./components/Todo";
import { projectFirestore } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

function Checklist2(){
    const { user } = useAuthContext();
    const [todos, setTodos] = useState([]);
    
    useEffect(()=> {
        
    })
    // React.useEffect(()=>{

    // });

    /*const handleEdit = async (todo, title) => {
        await updateDoc(doc(db, "todos", todo.id), {title:title});
    };
    const toggleComplete = async(todo) => {
        await updateDoc(doc(db, "todos", todo.id), {
            completed: !todo.completed
        });
    };
    const handleDelete = async(id) => {
        await deleteDoc(doc(db,"todos", id));
    };  
    */
    return(
        <div className="App">
            <div>
                <Title />
            </div>
            <div>
                <AddTodo />
            </div>
            <div className="todo_container">
                {todos.map((todo) => (
                    <Todo 
                        key={todo.id}
                        todo={todo}
                        // toggleComplete={toggleComplete}
                        // handleDelete={handleDelete}
                        // handleEdit={handleEdit}
                    />

                ))}

            </div>

        </div>
    )
}
export default Checklist2; 