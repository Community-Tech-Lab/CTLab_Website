//component imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//hook imports
import { useEffect, useState } from "react";

interface Props {
  image: string;
  bannerText: string;
  bannerColor: string;
}

const Banner = ({ image, bannerText, bannerColor }: Props) => {
  //hooks
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia("(max-width: 768px").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

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
    <Container fluid className="">
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
