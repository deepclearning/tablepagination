import React from 'react';
import { Route, Switch, BrowserRouter, Redirect, NavLink, Link } from 'react-router-dom';
import {useHistory, useLocation, useRouteMatch, useParams} from 'react-router'
import './App.css';
import Gettableview from "./components/Gettableview.jsx";
import ContactDetails from './components/ContactDetails.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavLink activeClassName="active" to="/contacts">Datapeace</NavLink>
        </header>
        <Switch>
          <Route path="/contacts/:contactId" component={ContactDetails} />
          <Route path="/contacts" component={Gettableview}/>
          <Redirect to="/contacts"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
