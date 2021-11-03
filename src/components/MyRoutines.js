import React from "react";
import AddRoutineForm from "./AddRoutineForm";

const MyRoutines = ({ token, routines, user, fetchRoutines }) => {

  const myRoutines = routines.filter(routine => user.id === routine.creatorId);
  console.log('>>>>>>>>>> myRoutines:', myRoutines);

  return <>
    <h1 className='header'>My Routines Page</h1>
    {
      token && <AddRoutineForm token={token} fetchRoutines={fetchRoutines}/>
    }
    {
      myRoutines.map(myRoutine => <div key={myRoutine.id}> {myRoutine.name}, {myRoutine.goal}:
      {myRoutine.activities.map(activity => <div key={activity.id}> {activity.name}, { activity.description}, {activity.duration}, {activity.count} </div>)} </div>)
    }
  </>
}

export default MyRoutines;