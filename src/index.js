/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundary';
import BookstoreService from './services/bookstore-service';
import { BookStoreServiceProvider } from './components/bookstore-service-context';

import store from './store';
import Navbar from './components/layout/Navbar/Navbar';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookStoreServiceProvider value={bookstoreService}>
        <Router>
          <React.Fragment>
            <Navbar />
            <App />
          </React.Fragment>
        </Router>
      </BookStoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
