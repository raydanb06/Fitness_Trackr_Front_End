import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Account, Homepage } from './components'

const App = () => {
  const [ token, setToken ] = useState('');

  return <>
    <Link to='/'>Homepage</Link> | <Link to='/routines'>Routines</Link> | <Link to='/account'>Account</Link> 

    <Route exact path='/'>
      <Homepage token={token} />
    </Route>

    {/* <Route exact path='/routines'>
      <Routines />
    </Route> */}

    <Route exact path='/account'>
      <Account setToken={setToken} />
    </Route>
  </>
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);