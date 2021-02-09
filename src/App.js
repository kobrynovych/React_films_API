import React from 'react';
import Container from '@material-ui/core/Container';
import Nav from './components/Nav';
 
function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg" className='container'>
        <Nav />
      </Container>
    </React.Fragment>
  );
}
export default App;
