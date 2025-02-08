import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";

const Menu = () => {
  return (
    <Navbar className="d-flex justify-content-around align-self-start position-absolute start-0 top-0 w-100 p-0 navColor">
      <Container className="m-0 p-0">
        <Link to="/">
          <Navbar.Brand>
            <img src={Logo} alt="logo" className="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className=" fs-4">
            <Link to="/credits">Credits</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
