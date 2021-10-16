import React from "react";
import AddActivityForm from "./AddActivityForm";

const Activities = ({ token, activities }) => {

  return <>
    <h1 className='header'>Activities Page</h1>
    {
      token && <AddActivityForm token={token}/>
    }
    {
      activities.map(activity => <div key={activity.id}>{activity.name}, {activity.description}</div>)
    }
  </>
}

export default Activities;