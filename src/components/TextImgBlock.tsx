import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

interface Props {
  image: string;
  title: string;
  bodyText: string;
  flip: boolean;
}

const TextImgBlock = ({ bodyText, image, title, flip }: Props) => {
  return (
    <Col xs={12} className="my-3">
      <Container>
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center flex-column"
          >
            <Image fluid src={image} />
          </Col>
          <Col
            md={{ order: flip ? "first" : "last" }}
            className="d-flex justify-content-center flex-column"
          >
            <h1 className="border-bottom border-dark">{title}</h1>
            <p>{bodyText}</p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default TextImgBlock;
