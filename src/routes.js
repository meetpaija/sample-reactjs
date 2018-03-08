import React from 'react';
import { Route, Router } from 'react-router-dom'
import App from './App'
import Login from './components/Login';
import Registration from './components/Registration';
import ViewData from './components/ViewData';
// import TodoPage from './components/TodoPage';

const Routes = (props) => {
    return (<Router {...props}>
        <Route path="/" component={App} />
        <Route path="/register" component={Registration} />
        <Route path="/view" component={ViewData} />
    </Router>);
}

export default Routes;