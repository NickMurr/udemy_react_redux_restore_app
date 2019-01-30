/* eslint-disable import/prefer-default-export */
const booksLoaded = newBooks => ({
  type: 'BOOKS_LOADED',
  payload: newBooks
});

export { booksLoaded };
