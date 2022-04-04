import React from 'react'

const SearchBar = () => {
  return (
    <div className='header-box'>
      <form action='' className='search-form'>
        <input type='teat' placeholder='search here...' className='search-ip' />
        <button className='search-btn'>
          <span className='material-icons'>search</span>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
