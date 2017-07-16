import React from 'react';
import LandingPage from '../landing/landing_page';
import MainPageContainer from '../main/main_page_container';
import { Route, Switch, Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (


                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/main' component={MainPageContainer} />
                </Switch>
  
        )
    }
}