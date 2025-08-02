import React from 'react'
import { useState, useEffect } from 'react'

const Todoapp = () => {
    const [todo, settodo] = useState("")
    const [todos, settodos] = useState([])

    useEffect(() => {   //when open website it will take your all todos in ui from storage
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if (savedTodos) {
            try {
                settodos(savedTodos);
            } catch (error) {
                console.error("Invalid JSON in localStorage:", error);
                localStorage.removeItem("todos");
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));  // save in localstorage whenever anything change in todos
    }, [todos]);


    const handleedit = (index) => {
        const newtodos = todos.filter((item, indexoftodos) => {   //removeing that from current list
            return index !== indexoftodos;
        });
        settodos(newtodos);

        const updatetodo = todos.find((item, indexoftodos) => {
            return index === indexoftodos;
        })
        settodo(updatetodo.todo);

    }

    const handledelete = (particularindex) => {
        const newtodos = todos.filter((item, indexoftodos) => {
            return particularindex !== indexoftodos;
        })
        settodos(newtodos);

    }


    const handleadd = () => {
        if (todo.trim() !== "") {
            settodos([...todos, { todo, isCompleted: false }]);
            settodo("");
        }

    }
    const handlechange = (e) => {
        settodo(e.target.value);
    }
    const handlecheckbox = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        settodos(newTodos);

    }

    return (
        <>

            <div className="addtodo">
    <h1 className="text-center text-2xl font-bold mb-5 shadow-blue-950">MY TODO LIST</h1>
    <h2 className="font-bold text-lg">Add a Todo:</h2>
    
    <div className="field flex flex-col md:flex-row mt-3 gap-3 items-center my-2">
        <input
            onChange={handlechange} value={todo} type="text" className="bg-white mx-10 border-1 border-gray-400 w-full md:w-[400px] px-4 py-1 rounded-full"
        />
        <button type="submit" onClick={handleadd}className="border-2 border-black px-4 py-1 rounded-full bg-violet-800 hover:bg-violet-950 text-white cursor-pointer w-full md:w-auto">
            Save
        </button>
    </div>

    <h2 className="font-bold text-lg">Your Todos:</h2>

    {todos.length === 0 && (
        <p className="text-lg font-semibold my-5 text-red-500">No Todos To Display</p>
    )}

    {todos.map((item, index) => (
        <div
            key={index}
            className="todos flex flex-col md:flex-row gap-3 my-3 items-start md:items-center w-full"
        >
            <div className="flex items-center">
                <input
                    onChange={() => handlecheckbox(index)}
                    type="checkbox"
                    checked={item.isCompleted}
                    className="mr-3 mt-1 md:mt-0"
                />
            </div>

            <div
                className={`text w-full md:w-[400px] break-all  py-1 px-4 min-w-[200px] border-1 border-gray-400 capitalize bg-white text-black rounded-full ${
                    item.isCompleted ? "line-through" : ""
                }`}
            >
                {item.todo}
            </div>

            <div className="buttons flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <button
                    onClick={() => handleedit(index)}
                    className="border-2 border-black px-4 py-1 rounded-full bg-violet-800 hover:bg-violet-950 text-white cursor-pointer w-full md:w-auto"
                >
                    Edit
                </button>
                <button
                    onClick={() => handledelete(index)}
                    className="border-2 border-black px-3 py-1 rounded-full bg-violet-800 hover:bg-violet-950 text-white cursor-pointer w-full md:w-auto"
                >
                    Delete
                </button>
            </div>
        </div>
    ))}
</div>

        </>
    )

}

export default Todoapp