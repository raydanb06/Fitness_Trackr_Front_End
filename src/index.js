import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Homepage } from './components'

const App = () => {
  const [ token, setToken ] = useState('');

  return <>
    <Link to='/'>Homepage</Link>
    <Route exact path='/'>
      <Homepage token={token} />
    </Route>
  </>
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);