import { React, useState } from "react";
import { useHistory } from "react-router";

import { callAPI } from '../util';

const Register = ({ setToken }) => {
  const [ newUsername, setNewUsername ] = useState('');
  const [ newPassword, setNewPassword ] = useState('');
  const [ , ] = useState('');
  const history = useHistory();

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    try {
      const registerObj = await callAPI({
        url: 'users/register',
        method: 'POST',
        body: {
          username: 'newUsername',
          password: 'newPassword'
        }
      });

      if (registerObj.user) {
        setToken(registerObj.token);
        if (registerObj.token) {
          history.push('/');
        }
      }

    } catch (error) {
      console.error(error);
    }

    setNewUsername('');
    setNewPassword('');
  };

  return <>
    <h2 className='header'>Register</h2>
    <form onSubmit={handleRegisterSubmit}>
      <label htmlFor='new-username'>Username:</label>
      <input placeholder='New Username' type='text' value={newUsername} onChange={
        ev => setNewUsername(ev.target.value)
      }></input>

      <label htmlFor='new-password'>Password:</label>
      <input placeholder='New Password' type='password' /*minLength='8'*/ value={newPassword} onChange={
        ev => setNewPassword(ev.target.value)
      }></input>

      <button type='submit'>Register</button>
    </form>
  </>
}

export default Register;