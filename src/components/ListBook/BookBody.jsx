import React from "react";
import { showFormattedDate } from "../../utils/data";

function BookBody({ createdAt, body }) {
  return (
    <div>
      <p className="italic text-sm">{showFormattedDate(createdAt)}</p>
      <p className="text-sm text-opacity-75">Description : {body}</p>
    </div>
  );
}

export default BookBody;
