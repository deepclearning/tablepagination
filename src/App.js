import React from 'react';
import { Route, Switch, BrowserRouter, Redirect, NavLink, Link } from 'react-router-dom';
import {useHistory, useLocation, useRouteMatch, useParams} from 'react-router'
import './App.css';
import Gettableview from "./components/Gettableview.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <NavLink activeClassName="active" to="/contacts">Datapeace</NavLink>
      </header>
      </BrowserRouter>
      <Gettableview/>
    </div>
  );
}

export default App;
