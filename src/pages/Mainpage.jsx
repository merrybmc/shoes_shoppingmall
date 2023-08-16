import { Navbar, Container, Nav } from 'react-bootstrap';
import Card from '../components/Card';
import { useNavigate } from 'react-router';

export default function Mainpage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>ShoeShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Card />
    </>
  );
}
