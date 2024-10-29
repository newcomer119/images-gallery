import React from "react";
import { Navbar , Container} from "react-bootstrap";
import { ReactComponent as Logo} from '../images/logo.svg'


const Header = ({ title }) => {
  return (
    <Navbar bg="primary" data-bs-theme="light">
        <Container>
            {/* <Navbar.Brand href="/">{title}</Navbar.Brand> */}
            <Logo style={{ maxWidth : '20rem', maxHeight : '4rem'}}/>
        </Container>
    </Navbar>
  );
};

export default Header;
