import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";
import { CiInstagram, CiTwitter } from "react-icons/ci";

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: "#006ea8",
  };

  return (
    <Container style={footerStyle} fluid className="pt-2">
      <Row>
        <Col xs={12} lg={3} className="my-2">
          <h2 className="footer-heading">Stewards Today, Leaders Tommorow</h2>
        </Col>

        <Col xs={12} md={4} lg={3} className="my-2">
          <h3 className="footer-sub-heading">Community Tech NY</h3>
          <p className="space-grotesk white">email: info@communitytechny.org</p>
          <Row>
            <Col className="white" xs={2}>
              <Link to="https://www.instagram.com/commtechny?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <Button variant="link" className="white px-0 py-1">
                  <CiInstagram className="logo" />
                </Button>
              </Link>
            </Col>
            <Col className="white" md={4} xs={2}>
              <Link to="https://twitter.com/commtechny">
                <Button variant="link" className="px-0 py-1 white">
                  <CiTwitter className="logo" />{" "}
                </Button>
              </Link>
            </Col>
          </Row>
          <Link to="https://communitytechny.org">
            <Button className="px-0 py-3 space-grotesk white" variant="link">
              View Website <GoLinkExternal />
            </Button>
          </Link>
        </Col>

        <Col xs={12} md={4} lg={3} className="my-2">
          <h3 className="footer-sub-heading">El Puente</h3>
          <p className="space-grotesk white">email: info@elpuente.org</p>
          <p className="space-grotesk white">call: +1 (718) 387-0404</p>
          <p className="space-grotesk white">
            211 South 4th St, Brooklyn, NY 11211
          </p>
          <Link to="https://elpuente.org">
            <Button
              className="px-0 py-3 space-grotesk-small white"
              variant="link"
            >
              View Website <GoLinkExternal />
            </Button>
          </Link>
        </Col>

        <Col xs={12} md={4} lg={3} className="my-2">
          <h3 className="footer-sub-heading">Come Visit the Lab!</h3>
          <p className="space-grotesk white">
            211 South 4th St, Brooklyn, NY 11211
          </p>
          <Link to="https://maps.app.goo.gl/oY2DLpA937ruiMcL6">
            <Button className="px-0 py-3 space-grotesk white" variant="link">
              View Map <GoLinkExternal />
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center py-2"
          style={{
            backgroundColor: "#3004ae",
          }}
        >
          <p
            className="space-grotesk white"
            style={{
              fontWeight: "500",
              fontSize: "large",
              textAlign: "center",
            }}
          >
            Website Designed by{" "}
            <a
              className="white"
              href="www.linkedin.com/in/oscar-comunidad-90b224168"
            >
              Oscar Comunidad
            </a>{" "}
            and{" "}
            <a
              className="white"
              href="https://www.linkedin.com/in/tiffany-lau-joa/"
            >
              Tiffany Lau Joa
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
