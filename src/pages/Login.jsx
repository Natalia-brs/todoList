import React from 'react';
import FormRow from '../components/FormRow';
import { useTodoContext } from '../context/todoContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { user, setUser } = useTodoContext();
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email } = user;
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/todo');
    console.log('oi');
  };

  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passValid = 6;
  const isValid =
    user.password.length > passValid && regexEmail.test(user.email);

  return (
    <main className='shadow-lg rounded-lg bg-white flex h-screen w-screen
              items-center justify-center bg-transparent' >
      <form 
      className=' bg-slate-100 mt-24 space-y-8 rounded py-10 px-6 md:mt-0 md:max-w-md md:px-14'
      onSubmit={handleSubmit}>
        <FormRow
         
          type='email'
          labelText='Email'
          name='email'
          value={user.email}
          handleChange={handleChange}
        />
        <FormRow
          type='password'
          labelText='Senha'
          name='password'
          value={user.password}
          handleChange={handleChange}
        />

        <button 
        className='ml-2  mt-4 border-2 border-cyan-900 p-2 text-cyan-900 hover:text-white hover:bg-cyan-900 rounded-lg flex'
        type='submit' disabled={!isValid}>
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
