import React from "react";

const Activities = ({ token, activities }) => {

  return <>
    <h1 className='header'>Activities Page</h1>
    {
      activities.map(activity => <div key={activity.id}>{activity.name}, {activity.description}</div>)
    }
  </>
}

export default Activities;