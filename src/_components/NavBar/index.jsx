import { useEffect } from "react";
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from '../../logo.svg';
import './index.css';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      if (window.scrollY > 50)
        setScrolled(true);
      else
        setScrolled(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (LinkValue) => {
    setActiveLink(LinkValue);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={logo} alt="" />  </a>
              <a href="#"><img src={logo} alt="" />  </a>
              <a href="#"><img src={logo} alt="" />  </a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}>Let's Talk</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
