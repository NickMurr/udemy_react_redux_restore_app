import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withBookStoreService } from '../../hoc-helpers';
import { booksLoaded } from '../../../actions';
import { compose } from '../../../utils';
import BookListItem from '../book-list-item';
import './BookList.scss';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    const data = bookstoreService.getBooks();

    booksLoaded(data);
  }

  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = ({ books }) => ({
  books
});

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
