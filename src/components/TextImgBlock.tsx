import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

interface Props {
  image: string;
  title: string;
  bodyText: string;
}

const TextImgBlock = ({ bodyText, image, title }: Props) => {
  return (
    <Col xs={12}>
      <Container>
        <Row>
          <Col>
            <Image fluid src={image} />
          </Col>
          <Col className="d-flex justify-content-center flex-column">
            <h2>{title}</h2>
            <p>{bodyText}</p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default TextImgBlock;
