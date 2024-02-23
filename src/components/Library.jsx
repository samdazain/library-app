import React from "react";
import { getInitialData, getArchivedData } from "../utils/data";
import ListArchivedBook from "./ArchivedBook/ListArchivedBook";
import ListBook from "./ListBook/ListBook";
import AddBookForm from "./AddBook/AddBookForm";
import SearchResult from "./SearchBook/SearchResult";

class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: getInitialData(),
      archivedBooks: getArchivedData(),
      searchKeyword: "",
      searchResult: [],
    };

    this.onAddBookHandler = this.onAddBookHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onSearchChangedHandler = this.onSearchChangedHandler.bind(this);
  }

  onAddBookHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        books: [
          ...prevState.books,
          {
            id: +new Date(),
            title,
            createdAt: new Date().toISOString(),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const books = this.state.books.filter((book) => book.id != id);
    this.setState({ books });

    const archivedBooks = this.state.archivedBooks.filter(
      (book) => book.id != id,
    );
    this.setState({ archivedBooks });
  }

  onArchiveHandler(id) {
    const bookToArchive = this.state.books.find((book) => book.id === id);

    this.setState((prevState) => ({
      archivedBooks: [
        ...prevState.archivedBooks,
        {
          id: bookToArchive.id,
          title: bookToArchive.title,
          createdAt: bookToArchive.createdAt,
          body: bookToArchive.body,
          archived: true,
        },
      ],
      books: prevState.books.filter((book) => book.id !== id),
    }));
  }

  onUnarchiveHandler(id) {
    const bookToUnarchive = this.state.archivedBooks.find(
      (book) => book.id === id,
    );

    this.setState((prevState) => ({
      books: [
        ...prevState.books,
        {
          id: bookToUnarchive.id,
          title: bookToUnarchive.title,
          createdAt: bookToUnarchive.createdAt,
          body: bookToUnarchive.body,
          archived: false,
        },
      ],
      archivedBooks: prevState.archivedBooks.filter((book) => book.id !== id),
    }));
  }

  onSearchChangedHandler(event) {
    const keyword = event.target.value;
    const filteredBooks = this.state.books.filter((book) =>
      book.title.toLowerCase().includes(keyword.toLowerCase()),
    );
    const filteredArchivedBooks = this.state.archivedBooks.filter((book) =>
      book.title.toLowerCase().includes(keyword.toLowerCase()),
    );
    const searchResult = [...filteredBooks, ...filteredArchivedBooks];
    this.setState({ searchKeyword: keyword, searchResult });
  }

  render() {
    return (
      <div className="px-12 py-2 flex-col">
        <h1 className="font-bold text-4xl mb-3">LIBRARY APP</h1>
        <div className="p-2 border-solid border-4 border-sky-500">
          <h2 className="font-semibold">Add book</h2>
          <AddBookForm addBook={this.onAddBookHandler} />
        </div>
        <div className="p-2 border-solid border-4 border-sky-500">
          <h2 className="font-semibold">Search Book</h2>
          <input
            type="text"
            placeholder="Search by title..."
            value={this.state.searchKeyword}
            onChange={this.onSearchChangedHandler}
            className="border border-black outline-none focus:outline focus:outline-black"
          />
        </div>
        <div className="p-2 border-solid border-4 border-sky-500">
          <h2 className="font-semibold">Search Result</h2>
          <SearchResult books={this.state.searchResult} showButtons={false} />
        </div>
        <div className="p-2 border-solid border-4 border-sky-500">
          <h2 className="font-semibold">List of Books</h2>
          <ListBook
            books={this.state.books}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
        <div className="p-2 border-solid border-4 border-sky-500">
          <h2 className="font-semibold">List of Archived Books</h2>
          <ListArchivedBook
            books={this.state.archivedBooks}
            onDelete={this.onDeleteHandler}
            onUnarchive={this.onUnarchiveHandler}
          />
        </div>
      </div>
    );
  }
}

export default Library;
