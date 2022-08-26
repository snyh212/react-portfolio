function Navigation() {
  return (
    <nav>
        <ul className="nav nav-pills">
            <li className="nav-item"><a className="nav-link active App-link " href="#about">About Me</a></li>
            <li className="nav-item"><a className="nav-link active" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link active" href="#contact">Contact</a></li>
            <li className="nav-item"><a className="nav-link active" href="#resume">Resume</a></li>
        </ul>
    </nav>
  );
}

export default Navigation;
/*  import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import Container from 'react-bootstrap/Container';
     <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#about">Shmuel Hoffman</Navbar.Brand>
          <Nav className="me-auto">

          </Nav>
        </Container>
      </Navbar>
    </> */