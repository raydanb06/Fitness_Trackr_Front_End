import React from "react";
import AddActivityForm from "./AddActivityForm";

const Activities = ({ token, activities, fetchActivities }) => {

  return <>
    <h1 className='header'>Activities Page</h1>
    {
      token && <AddActivityForm token={token} fetchActivities={fetchActivities}/>
    }
    {
      activities.map(activity => <div key={activity.id}>{activity.name}, {activity.description}, {activity.duration} </div>)
    }
  </>
}

export default Activities;