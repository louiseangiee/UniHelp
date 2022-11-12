import React from "react";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from 
// import DeleteIcon

export default function Todo({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit,
}) {
    const[newTitle,setNewTitle] =React.useState(todo.title);
    
    const handleChange = (e) => {
        e.preventDefault();
        if(todo.complete === true){
            setNewTitle(todo.title);
        } else {
            todo.title = "";
            setNewTitle(e.target.value);
        }
    }

    return(
        <div className="todo">
            <input  
                style={{textDecoration: todo.completed && "line-through"}}
                type="text"
                value={todo.title === "" ? newTitle : todo.title}
                className = "list"
                onChange={handleChange}
                />
            <div>
                <button 
                    className ="button-complete"
                    onClick = {() => toggleComplete(todo)}
                    >add
                </button>

                <button 
                    className="button-edit"
                    onClick = {() => handleEdit(todo, newTitle)}
                >edit
                </button>
                <button 
                    className="button-delete"
                    onClick={() => handleDelete(todo.id)}
                >del
                </button>
        </div>
        </div>
    );

    
 }