import React from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from  "./components/Todo";

function Checklist2(){
    const [todos, setTodos] = React.useState([]);

    // React.useEffect(()=>{

    // });

    const handleEdit = async (todo, title) => {
        
    }

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
                        handleEdit={handleEdit}
                    />

                ))}

            </div>

        </div>
    )
}
export default Checklist2; 