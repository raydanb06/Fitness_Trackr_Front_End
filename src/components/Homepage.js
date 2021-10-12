import React from "react";

const Homepage = ({ token }) => {

  return <>
        <h1 className='header'>Fitness Trackr Homepage</h1>
    {
      token ? 
      <div>You are logged in.</div> 
      : 
      <div>Login to do more.</div>
    }
  </>
}

export default Homepage;