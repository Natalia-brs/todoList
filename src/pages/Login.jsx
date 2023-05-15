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
    <main>
      <form onSubmit={handleSubmit}>
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

        <button type='submit' disabled={!isValid}>
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
