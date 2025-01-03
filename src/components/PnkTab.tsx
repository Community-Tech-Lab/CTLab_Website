import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { GoLinkExternal } from "react-icons/go";

interface Material {
  name: string;
  desc: string;
  price?: string;
  link?: string;
}

interface Props {
  title: string;
  body: string;
  image: string;
  matertials?: Material[];
}

const PnkTab = ({ title, body, image, matertials }: Props) => {
  return (
    <Container>
      {/* header */}
      <Row>
        <Col xs={12}>
          <h1 className="main-heading my-2 py-1">{title}</h1>
        </Col>
      </Row>
      {/* image */}
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-center flex-column align-items-center py-3"
        >
          <Image fluid rounded src={image} />
        </Col>
      </Row>
      {/* body */}
      <Row>
        <Col>
          <p
            style={{
              whiteSpace: "pre-line",
            }}
            className="space-grotesk-small"
          >
            {body}
          </p>
        </Col>
      </Row>
      {/* Materials */}
      <Row>
        <Col xs={12}>
          <h2 className="sub-heading"> Build Materials</h2>
        </Col>
      </Row>

      <Row>
        {matertials?.map((material: Material, index) => (
          <Col
            key={index}
            xs={12}
            md={6}
            lg={4}
            className="space-grotesk-small part-box p-3"
          >
            <div>
              <h3 className="sub-heading">{material.name}</h3>
              <p>{material.desc}</p>
              {material.price ? <p>Estimated Price: {material.price}</p> : null}
            </div>

            <Link to={material.link ? material.link : "/"}>
              {material.link ? (
                <Button
                  className="space-grotesk-small my-3 p-0"
                  variant={"link"}
                >
                  Learn More <GoLinkExternal />
                </Button>
              ) : null}
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PnkTab;
