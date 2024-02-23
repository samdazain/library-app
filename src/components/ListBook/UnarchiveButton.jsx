import React from "react";

function UnarchiveButton({ id, onUnarchive }) {
  return (
    <button
      type="button"
      className="text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-500"
      onClick={() => onUnarchive(id)}
    >
      Unarchive
    </button>
  );
}

export default UnarchiveButton;
