import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// custom components
import Home from './layout/Home';
import LandingPage from './landing/landing_page';
import MainPageContainer from './main/main_page_container';

const Root = ({store}) => {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <Home/>
      </Router>
    </Provider>
  )
}

export default Root;
