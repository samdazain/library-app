import React from "react";
import BookItem from "../ListBook/BookItem";

function ListArchivedBook({ books, onDelete, onUnarchive }) {
  const archivedBooks = books.filter((book) => book.archived);
  const isEmpty = archivedBooks.length === 0;

  return (
    <div>
      {isEmpty ? (
        <p>Tidak ada buku diarsipkan</p>
      ) : (
        archivedBooks.map((book) => (
          <div className="mb-4 mt-4" key={book.id}>
            <BookItem
              id={book.id}
              onDelete={onDelete}
              onUnarchive={onUnarchive}
              {...book}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default ListArchivedBook;
