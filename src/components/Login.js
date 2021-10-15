import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { callAPI } from '../util';

const Login = ({ setToken }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const history = useHistory();

  const handleLoginSubmit = async (ev) => {
    ev.preventDefault();
    
    try {
      const loginObj = await callAPI({
        url: 'users/login',
        method: 'POST',
        body: {
          username: `${username}`,
          password: `${password}`
        }
      });

      setUsername('');
      setPassword('');

      if (loginObj.token) {
        setToken(loginObj.token);
        history.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <>
    <h2 className='header'>Login</h2>
    <form onSubmit={handleLoginSubmit}>
      <label htmlFor='username'>Username:</label>
      <input placeholder='Username' type='text' value={username} onChange={
        ev => setUsername(ev.target.value)
      }></input>

      <label htmlFor='password'>Password:</label>
      <input placeholder='Password' type='password' /*minLength='8'*/ value={password} onChange={
        ev => setPassword(ev.target.value)
      }></input>

      <button type='submit'>Login</button>
    </form>
  </>
}

export default Login;