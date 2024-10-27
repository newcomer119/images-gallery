import React from "react";
import { Navbar , Container} from "react-bootstrap";

// const navbarStyle = {
//     backGroundColor : 'lightblue'
// };

const Header = ({ title }) => {
  return (
    <Navbar bg="primary" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default Header;
