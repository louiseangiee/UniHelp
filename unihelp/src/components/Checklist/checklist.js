import React, { useEffect, useState } from "react";
import Header from "./components/Header"
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import "./checklist.css";
import "./App.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { projectFirestore } from '../../firebase/config'
import { useCollection } from '../../hooks/useCollection'

const App = () => {
    const { user } = useAuthContext();
    const identifier = 'progress' + user.uid
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    const [isPendingData, setIsPendingData] = useState(false)

    useEffect(() => {
        setIsPendingData(true)

        const unsub = projectFirestore.collection('userProgress').doc(identifier).get().then(doc => {
            if (doc.exists) {
                setIsPendingData(false)
                var data = doc.data()
                console.log(data)
                setTodos(data.smu.checklist)
                //console.log(data.smu.checklist)
            }
        })
    }, [user.uid]);

    return(
        <div className = "container">
            <div className="app-wrapper">
                <div>
                    <Header />
                </div>
                <div>
                    <Form
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                    />
                </div>
                <div>
                    <TodosList todos={todos}
                        setTodos={setTodos}
                        setEditTodo={setEditTodo} />
                </div>
            </div>
        </div>);
}

export default Checklist;