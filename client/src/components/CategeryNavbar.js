import styled from 'styled-components'
import links from '../utils/links'

const CategeryNavbar = () => {
  return (
    <Wrapper>
      <button className='prev-btn' onClick={() => console.log('prev btn')}>
        <span className='material-icons'>navigate_before</span>
      </button>
      <button className='next-btn' onClick={() => console.log('next btn')}>
        <span className='material-icons'>navigate_next</span>
      </button>
      <div className='btn-links'>
        {links.map((item) => {
          const { id, text } = item
          return (
            <button key={id} className='link'>
              {text}
            </button>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  overflow: hidden;
  .btn-links {
    display: flex;
    align-items: center;
    width: 800px;

    margin: 5px 22px;

    .link {
      background-color: var(--white-1);
      border-bottom: 2px solid var(--white-1);
      text-transform: capitalize;
      color: var(--black-3);
      transition: var(--transition);
      font-weight: 400;
      font-size: 16px;
      margin: 10px 15px;

      :hover {
        color: var(--black-2);
        border-color: var(--black-2);
      }
    }
    .active {
      color: var(--black-3);
      border-bottom: 2px solid var(--black-2);
    }
  }
  /* prev and next btn */
  .prev-btn,
  .next-btn {
    display: none;
  }
  @media screen and (max-width: 769px) {
    .next-btn,
    .prev-btn {
      display: block;
      color: var(--black-3);
      background-color: #fff;
      cursor: pointer;
      outline: none;
      border: 0;
      position: absolute;
      top: 74px;
      transition: var(--transition);
      background-color: rgba(255, 255, 255, 1);
      :hover {
        color: var(--black-2);
      }
      span {
        font-size: 2.5em;
        font-weight: 500;
      }
    }

    .next-btn {
      right: 0;
      margin-right: 0.6em;
    }
  }
`
export default CategeryNavbar
