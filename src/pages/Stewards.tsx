import bannerPicture from "../assets/visit_banner.svg";
import Menu from "../components/Menu.tsx";
import Banner from "../components/Banner.tsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Stewards = () => {
  return (
    <Container>
      <Menu />
      <Banner
        bannerText="Meet the Stewards"
        bannerColor="red"
        image={bannerPicture}
      />
      <Row></Row>
    </Container>
  );
};

export default Stewards;
