import Wrapper from '../assets/wrappers/smallNavbar'
import SearchBar from './SearchBar'
import logo from '../assets/images/unsplash_logo.svg'
const SmallNavbar = () => {
  return (
    <Wrapper>
      <div className='header-item'>
        <img src={logo} alt='logo' />
        <SearchBar />
      </div>
      <div className='menu-btn'>
        <button className='menu-btn' onClick={() => console.log('menu btn')}>
          <span className='material-icons'>menu</span>
        </button>
      </div>
      <div className='btns'>
        <button className='add-btn' onClick={() => console.log('add btn')}>
          <span className='material-icons'>add</span>
          <span> Add Image</span>
        </button>
        <button
          className='detail-btn'
          onClick={() => console.log('detail btn')}
        >
          <span className='material-icons'>info</span>
          <span> About</span>
        </button>
      </div>
    </Wrapper>
  )
}

export default SmallNavbar
