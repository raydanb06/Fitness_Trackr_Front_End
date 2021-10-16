import React from "react";

const Routines = ({ token, routines }) => {

  return <>
    <h1 className='header'>Routines Page</h1>
    {
      routines.map(routine => <div key={routine.id}>{routine.name}</div>)
    }
  </>
}

export default Routines;