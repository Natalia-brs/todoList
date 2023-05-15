import React, { useEffect, useState } from 'react';
import FormRow from '../components/FormRow';
import { useTodoContext } from '../context/todoContext';
import List from '../components/List';

const Home = () => {
  const { todo, list, setList, setTodo, editId, isEdit, setIsEdit, setEditId } =
    useTodoContext();
  const [user, setUser] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editId) {
      const updatedList = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: todo };
        }
        return item;
      });
      setIsEdit(false);
      setList(updatedList);
      setEditId(null);
      setTodo('');
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: todo,
      };
      setList([...list, newItem]);
      setTodo('');
    }
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const userEmail = JSON.parse(localStorage.getItem('user'));
    setUser(userEmail);
  }, []);

  return (
    <main>
      <div className='w-full h-screen bg-slate-400 pt-8'>
        <div className='bg-white p-3 max-w-md mx-auto shadow-lg rounded-lg'>
          <div className='text-center'>
            <h3 className='text-3xl font-mono text-cyan-900'>
              {' '}
              ToDo App {user.email}{' '}
            </h3>
            <div className='mt-4 flex'>
              <form onSubmit={handleSubmit}>
                <FormRow
                  value={todo}
                  name='todo'
                  handleChange={({ target }) => setTodo(target.value)}
                  labelText='Atividade:'
                  type='text'
                />
                <div className='flex'>
                  <button
                    className='ml-2 mt-4 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex'
                    type='submit'
                    disabled={todo.length < 3}
                  >
                    {isEdit ? 'Editar' : 'Adicionar'}
                  </button>
                  {list.length ? (
                    <button
                      className='ml-2  mt-4 border-2 border-cyan-900 p-2 text-cyan-900 hover:text-white hover:bg-cyan-900 rounded-lg flex'
                      type='submit'
                      onClick={() => setList([])}
                    >
                      Limpar lista
                    </button>
                  ) : null}
                </div>
              </form>
            </div>
          </div>

          <List />
        </div>
      </div>
    </main>
  );
};

export default Home;
