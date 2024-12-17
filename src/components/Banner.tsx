//component imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {
  image: string;
  bannerText: string;
  bannerColor: string;
  isMobile: boolean;
}

const Banner = ({ image, bannerText, bannerColor, isMobile }: Props) => {
  const bannerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: isMobile ? "30vh" : "50vh",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const bannerTextStyle: React.CSSProperties = {
    color: "white",
    backgroundColor: bannerColor,
    opacity: "95%",
    padding: "5%",
    borderRadius: isMobile ? "1em" : "3em",
    boxShadow: "5px 3px 3px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    marginLeft: isMobile ? "3%" : "0",
    marginRight: isMobile ? "3%" : "0",
  };

  return (
    <Container fluid className="space-grotesk">
      <Row>
        <Col xs={12} className="p-0" style={bannerStyle}>
          <div style={bannerTextStyle}>
            <h1>{bannerText}</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
