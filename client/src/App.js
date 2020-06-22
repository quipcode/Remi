import React, {Component}from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configureStore'

import home from './pages/home'
import write from './pages/write'

const store = ConfigureStore()


class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
              <Route exact path="/" component={home} ></Route>
              <Route exact path="/write" component={write} ></Route>
          </Switch>
  
        </Router>
      </Provider>
    )
  }
}


export default App;
