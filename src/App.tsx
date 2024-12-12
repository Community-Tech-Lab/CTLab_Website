//image imports
import home_banner from "./assets/Homepage_banner.svg";

//component imports
import Banner from "./components/Banner";
import Menu from "./components/Menu";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Banner
        bannerColor={"#fceb00"}
        bannerText="Community Tech Lab"
        image={home_banner}
      />

      <Menu />
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
