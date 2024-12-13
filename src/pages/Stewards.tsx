import bannerPicture from "../assets/visit_banner.svg";
import Menu from "../components/Menu.tsx";
import Banner from "../components/Banner.tsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StewardCard from "../components/StewardCard.tsx";
import KCAW from "../assets/KCAW.jpeg";
import theJoyProjImg from "../assets/TheJoyProject.jpeg";
import piper from "../assets/Piper.jpeg";
import TextImgBlock from "../components/TextImgBlock.tsx";
import logo from "../assets/PNK Logos/4.svg";

const Stewards = () => {
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
          <TextImgBlock image={logo} bodyText={exampleText} title="About Us" />
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
            title="KCAW Raven Radio"
            bodyText={KCAW is a community radio station located in sitka, alaska. KCAW provides essential information services such as Emergency Alert System and AMBER announcements and severe weather warnings, as well as local, regional, state, national and international news.
            As a member of CoastAlaska, it createS and archiveS stories OF ITS COMMUNITY MEMBERS as radio content for the station to broadcast. }
            image={KCAW}
            date="October 15th - 18th"
          />
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
        </Row>
      </Container>
    </>
  );
};

export default Stewards;
