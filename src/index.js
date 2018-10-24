import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from './Components/NotFound';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ (props) => <App {...props} />}/>
      <Route exact path="/search/:id" component={ (props) => <App {...props} />}/>
      <Route component={NotFound} />

    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
