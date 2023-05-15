import React from 'react';
import { useTodoContext } from '../context/todoContext';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = () => {
  const { list, setList, setTodo, setEditId, setIsEdit } = useTodoContext();

  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const editTodo = (id) => {
    const edit = list.find((item) => item.id === id);
    setEditId(id);
    setTodo(edit.title);
    setIsEdit(true);
  };

  return (
    <div className='mt-8'>
      <ol>
        {list.map(({ id, title }) => (
          <li className='p-2 rounded-lg' key={id}>
            <div className='p-4 text-lg '>
              <p>{title}</p>
            </div>
            <div className='flex'>
              <button
                className='text-red-500 w-10 p-4'
                onClick={() => editTodo(id)}
              >
                <FaEdit />
              </button>
              <button
                className='text-indigo-500 w-10 p-4'
                onClick={() => deleteTodo(id)}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
