import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import FadeIn from 'react-fade-in'
function Navigation (){
    return (

            <nav>
                <FadeIn>
                <Navbar bg="light" expand="lg" id="nav">
                <Container>
                <Link to="/"><Navbar.Brand>Home</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    
                    <Nav.Link as={Link} to="/herontwikkeling-en-transformatie">Herontwikkeling en transformatie</Nav.Link>
                    <Nav.Link as={Link} to="/advies">Advies</Nav.Link>
                    <Nav.Link as={Link} to="/onderzoek">Onderzoek</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </FadeIn>
            </nav>

    )
}
export default Navigation