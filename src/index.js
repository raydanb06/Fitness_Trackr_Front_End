import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Account, Homepage, Routines, Activities } from './components'
import { callAPI } from './util';

const App = () => {
  const [ token, setToken ] = useState('');
  const [ routines, setRoutines] = useState([]);
  const [ activities, setActivities ] = useState([]);
  console.log(routines);
  console.log(activities);
  
  const fetchRoutines = async () => {
    const routinesObj = await callAPI({
      method: 'GET',
      url: 'routines',
      token: `${token}`
    })
    if (routinesObj) setRoutines(routinesObj);
  };

  const fetchActivities = async () => {
    const actvitiesObj = await callAPI({
      method: 'GET',
      url: 'activities',
      token: `${token}`
    })
    if (actvitiesObj) setActivities(actvitiesObj);
  }

  useEffect(() => {
    fetchRoutines();
  }, [ token ]);

  useEffect(() => {
    fetchActivities();
  }, [ token ]);

  return <>
    <Link to='/'>Homepage</Link> | <Link to='/routines'>Routines</Link> | <Link to='/activities'>Activities</Link> | <Link to='/account'>Login/Register</Link> | { token && <Link to='/myroutines'>My Routines</Link>} | { token && <Link to='/account' onClick={() => setToken('')}>Logout</Link>}

    <Route exact path='/'>
      <Homepage token={token} />
    </Route>

    <Route exact path='/routines'>
      <Routines token={token} routines={routines} />
    </Route>

    <Route exact path='/activities'>
      <Activities token={token} activities={activities} fetchActivities={fetchActivities}/>
    </Route>

    <Route exact path='/account'>
      <Account setToken={setToken} />
    </Route>

    <Route exact path='/myroutines'>
      <Routines token={token} routines={routines} />
    </Route>
  </>
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);