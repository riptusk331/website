import { Container, Nav, Navbar, NavDropdown, Col, Row, Stack } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
import logo from "./rj-logo.png"

export const SiteNavbar = () => {
    const [liBounce, setLiBounce] = useState(false);
    const [ghBounce, setGhBounce] = useState(false);

    return (
        <header>
            <Navbar sticky="top" bg="light" expand="lg" className="py-1 mb-2">
                <Container className="px-4">
                    <div>
                        <LinkContainer to="/">
                            <Navbar.Brand>
                                <img alt="RJ Logo" height="30" width="30" src={logo} className="me-2 d-inline-block align-top" />{' '}ryanjoyce.net
                            </Navbar.Brand>
                        </LinkContainer>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <LinkContainer to="/blog"><Nav.Link>Blog</Nav.Link></LinkContainer>
                                <NavDropdown title="Demos" id="demos-nav-dropdown">
                                    <LinkContainer to="/demos/morningnote">
                                        <NavDropdown.Item>Morning Note</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/demos/chatreader">
                                        <NavDropdown.Item>Chat Reader</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                                <LinkContainer to="/aboutme">
                                    <Nav.Link>About Me</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div className="ms-auto" id="icons">
                        <span className="p-1" onMouseEnter={() => setGhBounce(true)} onMouseLeave={() => setGhBounce(false)}>
                            <a href="https://github.com/riptusk331" style={{ color: "inherit" }}>
                                <FontAwesomeIcon icon={faGithub} size="2x" bounce={ghBounce} />
                            </a>
                        </span>
                        <span className="p-1" onMouseEnter={() => setLiBounce(true)} onMouseLeave={() => setLiBounce(false)}>
                            <a href="https://www.linkedin.com/in/ryan-joyce-4b41328/" style={{ color: "inherit" }}>
                                <FontAwesomeIcon icon={faLinkedin} size="2x" bounce={liBounce} />
                            </a>
                        </span>
                    </div>
                </Container>
            </Navbar>
        </header >
    )
}