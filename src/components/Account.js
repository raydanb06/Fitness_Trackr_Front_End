import React from "react";

import { Register, Login } from '../components';

const Account = ({ setToken }) => {
  
  return <>
    <h1 className='header'>Login Page</h1>
    <Register setToken={setToken}/>
    <Login setToken={setToken}/>
  </>
}

export default Account;