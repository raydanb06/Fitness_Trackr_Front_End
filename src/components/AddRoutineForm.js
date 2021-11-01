import React, { useState } from 'react';
import { callAPI } from '../util';

const AddRoutineForm = ({ token, fetchActivities}) => {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  
  const handleActivitySubmit = async (ev) => {
    ev.preventDefault();

    try {
      const addActivity = await callAPI({
        method: 'POST',
        url: 'activities',
        token: `${token}`,
        body: {
          name: name,
          description: description 
          }
        })
    
      setName('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }

    await fetchActivities();
  }

  return <>
    <h2 className='header'>Add Activity</h2>
    <form onSubmit={handleActivitySubmit}>
      <input placeholder='Name' type='text' value={name} onChange={(ev) => setName(ev.target.value)}/>
      <input placeholder='Description' type='text' value={description} onChange={(ev) => setDescription(ev.target.value)}/>
      <button type='submit'>Add Activity</button>
    </form>
  </>
}

export default AddActivityForm;