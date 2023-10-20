import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const { getPrev, getNext, page, nbPages } = useGlobalContext();

  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrev()}>PREV</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNext()}>NEXT</button>
      </div>
    </>
  );
};

export default Pagination;
