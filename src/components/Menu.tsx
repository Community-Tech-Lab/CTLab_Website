//component imports
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

//hook imports
import { useState } from "react";

const Menu = () => {
  //hooks
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleMenu = () => {
    if (showMenu == false) setShowMenu(true);
    else setShowMenu(false);
  };

  const bttnStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "10px",
    left: "10px",
    backgroundColor: "#CF698F",
    width: "45px",
    height: "45px",
    borderRadius: "100%",
    boxShadow: "3px 1px 1px rgba(0, 0, 0, 0.25)",
    color: "white",
  };

  const menuStyle: React.CSSProperties = {
    opacity: "90%",
    backgroundColor: "#CF698F",
    color: "white",
  };
  return (
    <div onClick={handleMenu} style={bttnStyle}>
      <CiMenuBurger />
      <Offcanvas
        style={menuStyle}
        show={showMenu}
        onHide={handleMenu}
        className="space-grotesk"
      >
        <Offcanvas.Header closeButton>
          <h1 className="border-bottom w-100">Menu</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container fluid>
            <Row>
              <Col>
                <Link
                  style={{
                    color: "white",
                  }}
                  to="/CTLab_Website"
                >
                  <h3>Home</h3>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col>
                <Link
                  style={{
                    color: "white",
                  }}
                  to="/CTLab_Website/stewards"
                >
                  <h3>Meet the Stewards</h3>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col>
                <Link
                  style={{
                    color: "white",
                  }}
                  to="https://communitytechny.org"
                >
                  <h3>CTNY</h3>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col>
                <Link
                  style={{
                    color: "white",
                  }}
                  to="https://elpuente.org"
                >
                  <h3>El Puente</h3>
                </Link>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Menu;
