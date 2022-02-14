/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import CareersContainer from '../containers/CareersContainer';
import MainContainer from '../containers/MainContainer';

import { ROUTE_INDEX, ROUTE_CAREERS } from './routes';

export default () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={ROUTE_INDEX} component={MainContainer} />
          <Route exact path={ROUTE_CAREERS} component={CareersContainer} />
          <Redirect to={ROUTE_INDEX} />
        </Switch>
      </Layout>
    </Router>
  );
};
