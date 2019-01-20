import React from 'react';
import { BookStoreServiceConsumer } from '../bookstore-service-context';

const withBookStoreService = () => Wrapped => props => (
  <BookStoreServiceConsumer>
    {bookstoreService => (
      <Wrapped {...props} bookstoreService={bookstoreService} />
    )}
  </BookStoreServiceConsumer>
);

export default withBookStoreService;
