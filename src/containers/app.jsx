import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Router as BrowserRouter, Route, Switch /*, withRouter */ } from 'react-router-dom';

import history from '@utils/history';
import reducer from '@reducers';

import SpinnerPage from '@components/spinner/spinnerPage';

import LoginPage from '@pages/login/login.container';
import Logout from './logout.container';
import CheckSessionContainer from './checkSession.container';
const HomePage = React.lazy(() => import( /* webpackChunkName: "home-container" */ '@pages/home/home.container'));

/**
 * SET REDUX'S STORE START
 */
let store;
const middleware = [ thunk ];
if (process.env.APP_ENV !== 'production') {
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // for chrome extension
  middleware.push(createLogger());
  store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middleware)),
  );
} else {
  store = createStore(
    reducer,
    applyMiddleware(...middleware),
  );
}
/**
 * END
 */

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={Logout} />
          <Route path="/spinner" component={SpinnerPage} />
          <Route render={() => (
            <CheckSessionContainer>
              <Suspense fallback={<SpinnerPage/>}>
                <HomePage/>
              </Suspense>
            </CheckSessionContainer>
          )}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
};

export default App;

render(
  <App/>,
  document.getElementById('app')
);
