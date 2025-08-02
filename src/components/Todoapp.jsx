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
                <h1 className='text-center text-2xl font-bold mb-5 '>MY TODO LIST</h1>
                <h2 className='font-bold text-lg'>Add a Todo</h2>
                <div className="field flex flex-col sm:flex-row sm:flex-wrap mt-3  items-center my-2">
                    <input onChange={handlechange} value={todo} type="text" className='bg-white w-full sm:w-120 pl-3 py-1 rounded-4xl' />
                    <button type="submit" onClick={handleadd} className='border-2 ml-3  border-black px-4 py-1 rounded-4xl bg-violet-800 hover:bg-violet-950 text-white cursor-pointer w-full sm:w-auto'>
                        Save
                    </button>
                </div>
            </div>

            <h2 className='font-bold text-lg'>Your Todos:</h2>
            {todos.length === 0 && (
                <p className='text-lg font-semibold my-5 text-red-500'>
                    No Todos To Display
                </p>
            )}

            {todos.map((item, index) => {
                return (
                    <div key={index} className="todos flex flex-col sm:flex-row gap-2 my-3 items-start sm:items-center w-full">
                        <div className="flex items-center">
                            <input onChange={() => handlecheckbox(index)} type="checkbox" checked={item.isCompleted} name="checkbox" id="check" className='mr-3 mt-1 sm:mt-0' />
                        </div>
                        <div className={`text w-full sm:w-80 break-words px-2 min-w-[200px] capitalize border border-black-700 ${item.isCompleted ? "line-through" : ""}`}>
                            {item.todo}
                        </div>
                        <div className="buttons flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                            <button onClick={() => handleedit(index)} className='border-2 border-black px-3 py-1 rounded-md bg-violet-800 hover:bg-violet-950 text-white cursor-pointer w-full sm:w-auto' >
                                Edit
                            </button>
                            <button onClick={() => handledelete(index)} className='border-2 border-black px-3 py-1 rounded-md bg-violet-800 hover:bg-violet-950 text-white cursor-pointer w-full sm:w-auto ' >
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}

        </>
    )

}

export default Todoapp