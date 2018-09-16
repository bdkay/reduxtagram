import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import css from './styles/style.styl';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="view/:postId" component={Single}></Route>
    </Route>
    <Route path="*" component={Main} />
  </Router>
);


render(router, document.getElementById('root'));