import { createContext, useContext, useState, useMemo } from "react";

const TodoContext = createContext();
const getLocalStorage = JSON.parse(localStorage.getItem('list')) ?? [];


const TodoProvider = ({ children }) => {
    const [user, setUser ] = useState({ email: '', password: '' })
    const [todo, setTodo ] =  useState('');
    const [list, setList] = useState(getLocalStorage);
    const [editId, setEditId] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    
  
    const values = useMemo(() => ({
      isEdit,
      setIsEdit,
      editId,
      setEditId,  
      todo,
      setTodo,
      list,
      setList,
      user,
      setUser,
    }), [user, todo, list, editId, isEdit]);

    return (
        <TodoContext.Provider value={ values }>
              { children }
        </TodoContext.Provider>
    );
};

const useTodoContext = () => {
    return (
        useContext(TodoContext)
    );
};

export {
    useTodoContext,
    TodoProvider,
};
