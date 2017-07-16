import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// custom components
import LandingPage from './landing/landing_page';

const Root = ({store}) => {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/" component={LandingPage}/>
      </Router>
    </Provider>
  )
}

export default Root;
