import styled from 'styled-components'

const Wrapper = styled.div`
  width: min(100%, 1400px);
  height: 100vh;
  margin: 0 auto;
  display: grid;
  place-content: center;
  justify-items: center;
  img {
    width: 100%;
  }
  h3 {
    font-size: 2em;
    color: var(--black-2);
    font-weight: 400;
    text-align: center;
    margin: 0;
  }
  p {
    font-size: 16px;
    color: var(--black-3);
    font-weight: 400;
    text-align: center;
    margin: 1em 0;
  }
  a {
    text-decoration: none;
    padding: 0.5em 1em;
    border-radius: 36px;
    text-transform: capitalize;
    background-color: var(--black-2);
    font-size: 16px;
    color: var(--white-1);
    font-weight: 500;
    display: flex;
    align-items: center;
    box-shadow: var(--box-shadow-3);
  }
  a span {
    margin-left: 0.5rem;
    font-size: 24px;
  }
`

export default Wrapper
