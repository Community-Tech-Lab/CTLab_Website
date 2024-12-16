import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

interface Props {
  image: string;
  title?: string;
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
            <Image fluid src={image} rounded />
          </Col>
          <Col
            md={{ order: flip ? "first" : "last" }}
            className={
              title
                ? "d-flex justify-content-center flex-column"
                : "d-flex justify-content-center flex-column align-items-center"
            }
          >
            {title ? (
              <h1 className="border-bottom border-dark sub-heading py-2">
                {title}
              </h1>
            ) : null}
            <p
              className={
                title
                  ? "space-grotesk-small p-3"
                  : "space-grotesk-small boxxed-text p-3"
              }
            >
              {bodyText}
            </p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default TextImgBlock;
