import styled from 'styled-components'

const Wrapper = styled.form`
  width: min(95%, 900px);
  :hover,
  :focus {
    background-color: var(--white-1);
  }
  display: flex;
  align-items: center;
  justify-content: stretch;
  border-radius: 18px;
  border: var(--border-1);
  margin: 0.2em;
  border-radius: 18px;
  color: var(--black-2);
  background-color: var(--white-2);
  transition: var(--transition);
  box-shadow: var(--box-shadow);
  :hover,
  :focus {
    border-color: #1d1d1d;
    background-color: var(--white-1);
  }
  input {
    padding: 01em;
    color: var(--black-2);
    width: 100%;

    border-radius: 18px;
    background-color: transparent;
    border: none;
    outline: none;
  }
  button {
    margin: 0.5em 0.8em 0.5em 0;
    background-color: transparent;
  }
`
export default Wrapper
