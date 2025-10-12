import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavDropdown } from 'react-bootstrap';

export const Header = () => {
  const [closeBtnToggle, setCloseBtnToggle] = useState(false);
  const expanded = 'lg'; // 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | false
  useEffect(() => {
    const element: HTMLElement = document.querySelector('[aria-label="Close"') as HTMLElement;
    element.click();
  }, [closeBtnToggle])
  const linkOnClick = () => { setCloseBtnToggle(b => !b) }

  return (
    <>
    
    <div className="header">

      <Navbar variant="dark" expand={expanded} className="my-navbar">
        <Container fluid>
          <Navbar.Brand>
            <div className="header-left">
              <span className="title">YIN WRONG / Artist & Experimental Animator</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expanded}`} className="my-navbar-toggler" />
          <Navbar.Offcanvas
            className="my-offcanvas"
            id={`offcanvasNavbar-expand-${expanded}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expanded}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expanded}`}>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 my-offcavas-body">
                <Nav.Link as={Link} onClick={linkOnClick} to="/home">Link</Nav.Link>
                {/* <NavDropdown
                  title="Short"
                  id={`offcanvasNavbarDropdown-expand-${expanded}-1`}
                >
                  <NavDropdown.Item as={Link} onClick={linkOnClick} to="/routine">
                    Routine
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link as={Link} onClick={linkOnClick} to="/gif">GIF</Nav.Link>
                <NavDropdown
                  title="Photography"
                  id={`offcanvasNavbarDropdown-expand-${expanded}-2`}
                >
                  <NavDropdown.Item as={Link} onClick={linkOnClick} to="/antielab">
                    Antielab
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} onClick={linkOnClick} to="/pride">
                    HK Pride 2019
                  </NavDropdown.Item>
                   <NavDropdown.Item as={Link} onClick={linkOnClick} to="/kodak">
                    Kodak films
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item as={Link} onClick={linkOnClick} to="/london">
                    London
                  </NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link as={Link} onClick={linkOnClick} to="/contact">Contact</Nav.Link>
                {/* <Nav.Link as={Link} onClick={linkOnClick} to="/supportme">$upport Me</Nav.Link> */}
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </div>
    <div className="header-space"></div>
    </>
  );
}
