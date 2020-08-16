import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/add" component={Form} />
          <Route path="/edit/:id" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default App;
