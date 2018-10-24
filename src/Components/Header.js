import React from 'react';
import MainNav from './MainNav';
import SearchForm from './SearchForm';

const Header = props => {
  return (
    <header>
      <SearchForm onSearch={props.onSearch}/>
      <MainNav />
    </header>
  );
}

export default Header
