import React from 'react';
import BookList from '../book-list';

const books = [
  {
    id: 1,
    title: 'Production-Ready Microservices',
    author: 'Susan J. Fowler'
  },
  {
    id: 2,
    title: 'Release It!',
    author: 'Michael T. Nygard'
  }
];

const Home = () => (
  <>
    <BookList books={books} />
  </>
);

export default Home;
