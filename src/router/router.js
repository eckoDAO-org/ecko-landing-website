/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MainContainer from '../containers/MainContainer';
import PrivacyPolicyContainer from '../containers/PrivacyPolicyContainer';
import TermsOfUseContainer from '../containers/TermsOfUseContainer';

import { ROUTE_INDEX, ROUTE_PRIVACY_POLICY, ROUTE_TERMS_OF_USE } from './routes';

export default () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={ROUTE_INDEX} component={MainContainer} />
          <Route exact path={ROUTE_PRIVACY_POLICY} component={PrivacyPolicyContainer} />
          <Route exact path={ROUTE_TERMS_OF_USE} component={TermsOfUseContainer} />
          <Redirect to={ROUTE_INDEX} />
        </Switch>
      </Layout>
    </Router>
  );
};
