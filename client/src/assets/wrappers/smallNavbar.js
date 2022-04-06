import styled from 'styled-components'

const Wrapper = styled.header`
  width: min(100%, 2000px);
  margin-inline: auto;
  display: grid;
  margin: 0.5em 1em 0.5em 0;
  grid-template-columns: 60% auto;
  justify-content: stretch;
  align-items: center;
  .btns,
  .menu-btn {
    display: flex;
    justify-content: flex-end;

    button {
      padding: 0.5em 1em;
      background-color: var(--white-1);
      border: var(--border-1);
      border-radius: 4px;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      color: var(--black-3);
      transition: var(--transition);
      margin-right: 0.5em;
      font-weight: 500;

      :hover {
        color: var(--black-2);
        border-color: var(--black-2);
      }
    }
  }
  .header-item {
    display: flex;
    align-items: center;
    img {
      width: 45px;
    }
  }
  .menu-btn {
    display: none;
  }

  @media screen and (max-width: 700px) {
    .btns {
      display: none;
    }
    .menu-btn {
      display: flex;
      button {
        padding: 0.1em;
        margin: 0.5em 1em;
        color: var(--black-2);
        border: none;
        span {
          font-weight: 500;
          font-size: 2.5em;
          transition: var(--transition);
          :hover {
            color: var(--black-3);
          }
        }
      }
    }
  }
`
export default Wrapper
