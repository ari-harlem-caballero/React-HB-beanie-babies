import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';


export default function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="beanie-baby">Find</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            {/* this home page route should list all the beanies */}
            <BeaniesPage />
          </Route>
          <Route> 
            {/* this route should point to a particular beanie baby by id and render that specific BeanieDetail page */}
            <BeanieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}