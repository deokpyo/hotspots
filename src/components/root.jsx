import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

// custom components
import App from './app';
import LandingPage from './landing/landing_page';
import MainPageContainer from './main/main_page_container';
import ProfileContainer from './profile/profile_container';

const Root = ({store}) => {
  const history = syncHistoryWithStore(createBrowserHistory(), store);

  return (
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/main' component={MainPageContainer}/>
            <Route path='/profile' component={ProfileContainer}/>
          </Switch>
        </App>
      </Router>
    </Provider>
  )
}

export default Root;
