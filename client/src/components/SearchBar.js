import Wrapper from '../assets/wrappers/searchBar'

const SearchBar = () => {
  return (
    <Wrapper action='post'>
      <input
        type='search'
        placeholder='Search free high-resolution photos'
        className='search-ip'
      />
      <button className='search-btn'>
        <span className='material-icons'>search</span>
      </button>
    </Wrapper>
  )
}
export default SearchBar
