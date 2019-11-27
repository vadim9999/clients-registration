import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/index';

import ContentPage from './components/ContentPage/ContentPage';

const ContentPageWithRouter = withRouter(ContentPage);

class Router extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <ContentPageWithRouter />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default Router;