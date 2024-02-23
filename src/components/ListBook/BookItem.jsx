import React from "react";
import BookBody from "./BookBody";
import BookTitle from "./BookTitle";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import UnarchiveButton from "./UnarchiveButton";

function BookItem({
  title,
  createdAt,
  body,
  id,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
  showButtons = true,
}) {
  return (
    <div className="m-4 flex-row border-solid border-2 border-sky-500">
      <div className="m-4 flex-col">
        <BookTitle title={title} />
        <BookBody createdAt={createdAt} body={body} />
      </div>
      {showButtons && (
        <div className="ml-4 mb-2">
          <DeleteButton id={id} onDelete={onDelete} />
          {!archived && <ArchiveButton id={id} onArchive={onArchive} />}
          {archived && <UnarchiveButton id={id} onUnarchive={onUnarchive} />}
        </div>
      )}
    </div>
  );
}

export default BookItem;
