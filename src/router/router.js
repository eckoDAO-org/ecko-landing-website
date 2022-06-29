import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MainContainer from '../containers/MainContainer';

import styled from 'styled-components/macro';

import {
  ROUTE_INDEX,
  ROUTE_PRIVACY_POLICY,
  ROUTE_TERMS_OF_USE,
} from './routes';
import TermsOfUseContainer from '../containers/TermsOfUseContainer';
import PrivacyPolicyContainer from '../containers/PrivacyPolicyContainer';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export default () => {
  return (
    <Router>
      <Layout>
        <Container>
          <Switch>
            <Route exact path={ROUTE_INDEX} component={MainContainer} />
            <Route
              exact
              path={ROUTE_PRIVACY_POLICY}
              component={PrivacyPolicyContainer}
            />
            <Route
              exact
              path={ROUTE_TERMS_OF_USE}
              component={TermsOfUseContainer}
            />
            <Redirect to={ROUTE_INDEX} />
          </Switch>
        </Container>
      </Layout>
    </Router>
  );
};
