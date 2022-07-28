import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export const Bar = () => {
  return (
    <Navbar className='footer' variant="dark">
      <Container>
      
        <Navbar.Brand><img src="/images/logo.png" alt="" width="25"/> Security Inspector</Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-start">
          <Navbar.Text>
           <Link to="/"><span style={{marginLeft:'20px'}}>Home</span></Link>
          </Navbar.Text>

          <Navbar.Text>
          <Link to="/secret"><span style={{marginLeft:'20px'}}>Secret Keys Scanner</span></Link>
          </Navbar.Text>

          <Navbar.Text>
          <Link to="/web"><span style={{marginLeft:'20px'}}>Web Scanner</span></Link>
          </Navbar.Text>

        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Team: <span className='tm'>Grid Grinders</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
