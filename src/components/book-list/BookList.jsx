import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import { withBookStoreService } from '../hoc';
import { booksLoaded, booksRequested } from '../../actions';
import Spinner from '../spinner';

class BookList extends Component {
  state = {};

  componentDidMount() {
    // Get Data
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks().then(data => {
      booksLoaded(data);
    });
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <>
        <ul className="book-list">
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
const mapStateToProps = ({ books, loading }) => ({ books, loading });

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default compose(
  withBookStoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
