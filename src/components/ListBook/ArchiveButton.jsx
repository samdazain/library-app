import React from "react";

function ArchiveButton({ id, onArchive }) {
  return (
    <button
      type="button"
      className="text-white bg-yellow-500 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500"
      onClick={() => onArchive(id)}
    >
      Archive
    </button>
  );
}

export default ArchiveButton;
