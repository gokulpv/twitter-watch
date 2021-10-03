import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Feed from "./pages/feeds/feed";
import GlobalStyle from "./styles/base";
import ErrorBoundary from "./hoc/errorBoundary";
import Layout from "./layouts/layout";
import favourites from "./config/favourites.config";

const App = () => {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Router>
        <Switch>
          {favourites.map(({ handleName }) => (
            <Route key={handleName} path={`/${handleName}`} exact>
              <Layout>
                <Feed />
              </Layout>
            </Route>
          ))}
          {/* Redirect if the paths are diffrent from favourites */}
          <Redirect to={favourites[0].handleName} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
