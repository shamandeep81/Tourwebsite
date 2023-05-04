
import React, { useState } from 'react';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform the search using the searchTerm state variable
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="search">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <button className="button3" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
