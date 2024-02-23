import React from "react";
import BookItem from "./BookItem";

function ListBook({ books, onDelete, onArchive }) {
  const nonArchivedBooks = books.filter((book) => !book.archived);
  const isEmpty = nonArchivedBooks.length === 0;

  return (
    <div>
      {isEmpty ? (
        <p>Tidak ada buku</p>
      ) : (
        nonArchivedBooks.map((book) => (
          <div className="mb-4 mt-4" key={book.id}>
            <BookItem
              id={book.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...book}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default ListBook;
