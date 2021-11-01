import React from "react";

const MyRoutines = ({ token, routines, user }) => {

  const myRoutines = routines.filter(routine => user.id === routine.creatorId);
  console.log('>>>>>>>>>> myRoutines:', myRoutines);

  return <>
    <h1 className='header'>My Routines Page</h1>
    {
      myRoutines.map(myRoutine => <div key={myRoutine.id}> {myRoutine.name}, {myRoutine.goal}:
      {myRoutine.activities.map(activity => <div key={activity.id}> {activity.name}, { activity.description}, {activity.duration}, {activity.count} </div>)} </div>)
    }
  </>
}

export default MyRoutines;