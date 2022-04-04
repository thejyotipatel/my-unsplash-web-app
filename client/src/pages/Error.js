import img from '../assets/images/404 Error Page not Found.svg'
import Wrapper from '../assets/wrappers/pageNotFound'

const Error = () => {
  return (
    <Wrapper>
      <img src={img} alt='not found' />
      <h3>There's NOTHING here...</h3>
      <p>...maybe the page you looking for is not found or never existed.</p>
      <a href='/'>
        back to home
        <span className='material-icons'>east</span>
      </a>
    </Wrapper>
  )
}
export default Error
