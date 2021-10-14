import React from "react";

import { Register } from '../components';

const Account = ({ setToken }) => {
  
  return <>
    <h1 className='header'>LoginPage</h1>
    <Register setToken={setToken}/>
  </>
}

export default Account;