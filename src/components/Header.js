import React from 'react';

const Header = ({handleToggleDarkMode}) => {
  return (
  <div className='header'>
      <h1>Notes App</h1>
      <button className='save' onClick={()=>handleToggleDarkMode((previous)=> !previous) }>Toggle Mode</button>

  </div>);
};

export default Header;
