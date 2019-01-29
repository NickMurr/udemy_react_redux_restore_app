import React, { Component } from 'react';
import BookListItem from '../book-list-item';

class BookList extends Component {
  state = {};

  render() {
    const { books } = this.props;
    return (
      <>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BookList;