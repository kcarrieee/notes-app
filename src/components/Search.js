import React from 'react';
import {MdSearch} from 'react-icons/md';

const Search = ({handleSearchNote}) => {
  return (
  <div className='search-bar'>
      <MdSearch className="search-icon" size="1.3em"/>
        <input onChange={(event)=> handleSearchNote(event.target.value)} type="text" placeholder='Type to search...' className='input'/>
  </div>
  );
};

export default Search;
