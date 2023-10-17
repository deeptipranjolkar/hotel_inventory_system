import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {
  const brandStyle = {
    fontSize: '2rem', // Adjust the size as needed
    fontWeight: 'bold', // Add other styles if desired
  };

  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <h1>
          <Navbar.Brand href="#home" style={brandStyle}>
            Hotel Inventory System
          </Navbar.Brand>
        </h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Add your navigation links here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
