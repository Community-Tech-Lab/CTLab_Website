import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

interface Props {
  image1: string;
  image2: string;
  title: string;
  outerColor: string;
  innerColor: string;
  bodyText: string;
  isMobile: boolean;
  buttonLable?: string;
  buttonLink?: string;
}

const ColoredTextBanner = ({
  image1,
  image2,
  title,
  outerColor,
  innerColor,
  bodyText,
  isMobile,
  buttonLink,
  buttonLable,
}: Props) => {
  const bannerStyle: React.CSSProperties = {
    backgroundColor: outerColor,
  };

  const containerStyle = {
    backgroundColor: innerColor,
    color: "white",
    padding: "0",
  };

  return (
    <Container style={bannerStyle} fluid>
      <Row>
        <Col xs={12} className="py-3">
          <Container className="my-3 rounded-4" style={containerStyle}>
            <Row>
              <Col xs={12} lg={8}>
                <Container>
                  <Row className="py-3">
                    <Col xs={12}>
                      <h1 className="banner-heading">{title}</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xs={12}
                      lg={6}
                      className="d-flex flex-column justify-content-center align-items-center"
                    >
                      <Image src={image1} fluid className="rounded-4 my-1" />
                    </Col>
                    <Col xs={12} lg={6}>
                      <p className="space-grotesk-small">{bodyText}</p>
                      <Link to={buttonLink ? buttonLink : "/"}>
                        <Button
                          className="space-grotesk-small my-2"
                          variant="light"
                        >
                          {buttonLable}
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col xs={12} lg={4}>
                <Image
                  src={image2}
                  fluid
                  style={{
                    width: "100%",
                  }}
                  className={isMobile ? "rounded-bottom-4" : "rounded-end-4"}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ColoredTextBanner;
