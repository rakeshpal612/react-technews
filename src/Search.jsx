import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="searchHere"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
