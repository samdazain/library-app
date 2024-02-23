import React from "react";
import BookItem from "../ListBook/BookItem";

class SearchResult extends React.Component {
  render() {
    const { books, showButtons } = this.props;

    return (
      <div>
        {books.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            createdAt={book.createdAt}
            body={book.body}
            id={book.id}
            archived={book.archived}
            showButtons={showButtons}
          />
        ))}
      </div>
    );
  }
}

export default SearchResult;
