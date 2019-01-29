import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import { withBookStoreService } from '../hoc';
import { booksLoaded } from '../../actions';

class BookList extends Component {
  state = {};

  componentDidMount() {
    // Get Data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }

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
const mapStateToProps = ({ books }) => ({ books });

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookStoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
