import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

interface bttnProps {
  title: string;
  link: string;
  variant?: string;
}

interface Props {
  image: string;
  title?: string;
  bodyText: string;
  flip: boolean;
  button?: bttnProps;
}

const TextImgBlock = ({ bodyText, image, title, flip, button }: Props) => {
  return (
    <Col xs={12} className="my-3">
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center flex-column align-items-left"
          >
            <Image fluid src={image} rounded />
            {button ? (
              <Link to={button ? button.link : "/"}>
                <Button
                  className="space-grotesk-small my-3"
                  variant={button.variant}
                >
                  {button.title}
                </Button>
              </Link>
            ) : null}
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
              style={{
                whiteSpace: "pre-line",
              }}
              className={
                title
                  ? "space-grotesk-small p-3"
                  : "space-grotesk boxxed-text p-3"
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
