import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Bar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      
        <Navbar.Brand href="#home"><img src="/images/logo.png" alt="" width="25"/> Security Inspector</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Team: <a href="#home">Grid Grinders</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
