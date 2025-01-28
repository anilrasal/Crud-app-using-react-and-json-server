import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <div className="container">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">CRUD App</Navbar.Brand>
          <Nav className="justify-content-end" defaultActiveKey="/home">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Add User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
