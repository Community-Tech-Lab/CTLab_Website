import bannerPicture from "../assets/visit_banner.svg";
import Menu from "../components/Menu.tsx";
import Banner from "../components/Banner.tsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StewardCard from "../components/StewardCard.tsx";
import theJoyProjImg from "../assets/TheJoyProject.jpeg";
import piper from "../assets/Piper.jpeg";
import { PiPi } from "react-icons/pi";

const Stewards = () => {
  const joyProjectText =
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Metus eros lacinia hac consequat nec varius erat primis imperdiet. Proin eu suscipit tempus enim enim. Nascetur eget orci congue tincidunt nulla natoque iaculis nibh. At hac hendrerit sociosqu fames tincidunt ornare molestie primis. Purus maecenas habitasse mauris consectetur sociosqu duis ante vivamus. Non natoque sapien sodales taciti lectus etiam habitant consectetur.";

  return (
    <>
      <Menu />
      <Banner
        bannerText="Meet the Stewards"
        bannerColor="red"
        image={bannerPicture}
      />
      <Container fluid>
        <Row>
          <h1>Discover Our Stewards</h1>
        </Row>
        <Row>
          <StewardCard
            title="The Joy Project"
            bodyText={joyProjectText}
            image={theJoyProjImg}
            date="October 7th - 10th"
          />

          <StewardCard
            title="Detroit Black Food Sovereignty Network"
            date="October 7th - 10th"
            bodyText={joyProjectText}
            image={piper}
          />
          <StewardCard
            title="Detroit Black Food Sovereignty Network"
            date="October 7th - 10th"
            bodyText={joyProjectText}
            image={piper}
          />
        </Row>

        <Row>
          <StewardCard
            title="Detroit Black Food Sovereignty Network"
            date="October 7th - 10th"
            bodyText={joyProjectText}
            image={piper}
          />
        </Row>
      </Container>
    </>
  );
};

export default Stewards;
