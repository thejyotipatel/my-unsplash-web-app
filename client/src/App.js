import SmallNavbar from './components/SmallNavbar'
import Error from './pages/Error'
import styled from 'styled-components'
import { CategeryNavbar } from './components'
function App() {
  return (
    <Wrapper className='App'>
      <SmallNavbar />
      <CategeryNavbar />
      {/* <Error /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: min(98%, 2000px);
  border: 2px solid hotpink;
  margin-inline: auto;
`
export default App
