import React, { useState, useEffect } from "react";
import { callAPI } from "../util";

const Homepage = ({ token }) => {
  const [ user, setUser ] = useState({});
  try {
    if (token) {
      const fetchUser = async () => {
        const userObj = await callAPI({
          method: 'GET',
          url: 'users/me',
          token: `${token}`
        })
        if (userObj) setUser(userObj);
      }
  
      useEffect(() => {
        fetchUser();
      }, [ token ]);
    }
    
  } catch (error) {
    console.error(error);
  }

  return <>
    <h1 className='header'>Fitness Trackr Homepage</h1>
    {
      token ? 
      <div>Welcome, {user.username}.</div> 
      : 
      <div>Login to do more.</div>
    }
  </>
}

export default Homepage;