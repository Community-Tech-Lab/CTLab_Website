import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

interface Props {
  image: string;
}

const Banner = ({ image }: Props) => {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0 banner">
          <Image src={image} fluid className="banner-img layer" />
          <div className="layer banner-text">
            <h1>Sample-Text</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
