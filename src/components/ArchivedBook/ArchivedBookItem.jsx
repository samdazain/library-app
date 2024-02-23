import React from "react";
import BookBody from "./BookBody";
import BookTitle from "./BookTitle";
import DeleteButton from "./DeleteButton";
import UnarchiveButton from "../ListBook/UnarchiveButton";

function ArchivedBookItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onUnarchive,
}) {
  return (
    <div className="m-4 flex-row border-solid border-2 border-sky-500">
      <div className="m-4 flex-col">
        <BookTitle title={title} />
        <BookBody createdAt={createdAt} body={body} />
      </div>
      <div className="ml-4 mb-2">
        <DeleteButton id={id} onDelete={onDelete} />
        <UnarchiveButton id={id} onArchive={onUnarchive} />
      </div>
    </div>
  );
}

export default ArchivedBookItem;
