import React from "react";

const Search = ({handleSearchText}) => {
  return <div className="search">
    <span><i className="fa fa-search" aria-hidden="true" ></i></span>
    <input type="text" placeholder="type to search..." onChange={(event)=> handleSearchText(event.target.value)} />
  </div>;
};
export default Search;
