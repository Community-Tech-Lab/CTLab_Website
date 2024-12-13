//Component Imports
import Menu from "../components/Menu.tsx";
import Banner from "../components/Banner.tsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StewardCard from "../components/StewardCard.tsx";
import TextImgBlock from "../components/TextImgBlock.tsx";

//Image imports
import logo from "../assets/PNK Logos/4.svg";
import theJoyProjImg from "../assets/TheJoyProject.jpeg";
import piper from "../assets/Piper.jpeg";
import bannerPicture from "../assets/visit_banner.svg";

const Stewards = () => {
  const stewardDesc =
    "Digital Stewards build and maintain the technology their communities need to foster healthy relationships, build resilience, and increase access to critical information. Digital Stewards work in neighborhoods to build wireless networks and develop local applications.";

  const exampleText =
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Metus eros lacinia hac consequat nec varius erat primis imperdiet. Proin eu suscipit tempus enim enim. Nascetur eget orci congue tincidunt nulla natoque iaculis nibh. At hac hendrerit sociosqu fames tincidunt ornare molestie primis. Purus maecenas habitasse mauris consectetur sociosqu duis ante vivamus. Non natoque sapien sodales taciti lectus etiam habitant consectetur.";

  return (
    <>
      <Menu />
      <Banner
        bannerText="The Future of Community-Owned Networks"
        bannerColor="red"
        image={bannerPicture}
      />
      <Container>
        <Row>
          <TextImgBlock
            flip={false}
            image={logo}
            bodyText={stewardDesc}
            title="About Us"
          />
        </Row>
        <Row
          style={{
            color: "#3004Af",
          }}
        >
          <h1 style={{ fontSize: "4.2rem" }} className="space-grotesk">
            Discover Our Stewards
          </h1>
        </Row>
        <Row>
          <StewardCard
            title="The Joy Project"
            bodyText={exampleText}
            image={theJoyProjImg}
            date="October 7th - 10th"
          />

          <StewardCard
            title="Detroit Black Food Sovereignty Network"
            date="October 7th - 10th"
            bodyText={exampleText}
            image={piper}
          />
          <StewardCard
            title="Detroit Black Food Sovereignty Network"
            date="October 7th - 10th"
            bodyText={exampleText}
            image={piper}
          />
        </Row>
        <Row>
          <TextImgBlock
            flip={true}
            image={logo}
            bodyText={exampleText}
            title="About Us"
          />
        </Row>
      </Container>
    </>
  );
};

export default Stewards;
