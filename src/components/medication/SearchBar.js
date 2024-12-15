import React from "react";

const SearchBar = ({ onSearch }) => {
    return <input type="text" placeholder="Search medications..." onChange={(e) => onSearch(e.target.value)} className="form-control mb-3" />;
};

export default SearchBar;
