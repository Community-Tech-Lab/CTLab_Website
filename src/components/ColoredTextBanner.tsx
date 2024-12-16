import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import nyuStewards from "../assets/nyu_stewards.svg";

const ColoredTextBanner = () => {
  const bannerStyle: React.CSSProperties = {
    backgroundColor: "#AC3D52",
  };

  const containerStyle = {
    backgroundColor: "#CF698F",
    color: "white",
    padding: "0",
    borderRadius: "1em",
  };

  return (
    <Container style={bannerStyle} fluid>
      <Row>
        <Col xs={12}>
          <Container style={containerStyle}>
            <Row>
              <Col xs={12} md={8}></Col>
              <Col xs={12} md={4}>
                <Image src={nyuStewards} fluid />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ColoredTextBanner;
