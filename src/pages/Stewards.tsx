import bannerPicture from "../assets/visit_banner.svg";
import Menu from "../components/Menu.tsx";
import Banner from "../components/Banner.tsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StewardCard from "../components/StewardCard.tsx";
import KCAW from "../assets/KCAW.jpeg";
import theJoyProjImg from "../assets/TheJoyProject.jpeg";
import piper from "../assets/Piper.jpeg";
import RRC from "../assets/RRC.jpeg";
import EndstateATL from "../assets/endstateATL.png";
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
          <TextImgBlock
            image={logo}
            bodyText={
              "Digital Stewards are a group of technologists that work in local neighborhoods to build wireless networks, and develop local applications their communities need to foster healthy relationships, build resilience, and increase access to critical information."
            }
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
            title="KCAW Raven Radio"
            bodyText={
              "KCAW is a community radio station located in sitka, alaska. KCAW provides essential information services such as Emergency Alert System and AMBER announcements and severe weather warnings, as well as local, regional, state, national and international news. As a member of CoastAlaska, it creates and archives stories of its community members as radio content for the station to broadcast."
            }
            image={KCAW}
            date="October 15th - 18th"
          />
          <StewardCard
            title="The Joy Project"
            bodyText={
              "The JOY Project is a community-driven initiative that reconnects people with indigenous practices and the cultural heritage of Black and Brown communities through food, gardening, and storytelling. It features spaces like a sensory garden, seed library, outdoor learning center, and healing areas to promote restoration, reconciliation, and education. The project integrates traditional and modern agricultural techniques to foster conversations about history, resilience, and community healing."
            }
            image={theJoyProjImg}
            date="October 7th - 10th"
          />

          <StewardCard
            title="Detroit Black Food Sovereignty Network"
            date="October 7th - 10th"
            bodyText={
              "The Detroit Black Community Food Sovereignty Network (DBCFSN) focuses on empowering Black communities through food sovereignty, promoting access to healthy, culturally appropriate food produced sustainably. DBCFSN runs the Detroit Food Commons, supporting local food justice initiatives."
            }
            image={piper}
          />

          <StewardCard
            title="Robert Redford Conservancy"
            date="September 23rd - 26th"
            bodyText={
              "The Robert Redford Conservancy for Southern California Sustainability at Pitzer College, founded in 2012, promotes socio-ecological justice and environmental sustainability. It engages in advocacy, education, and research to address environmental challenges in Southern California and beyond. Programs include student fellowships, regenerative agriculture, and hands-on K-12 environmental education. The Conservancy fosters collaboration on sustainability efforts through community engagement and policy work."
            }
            image={RRC}
          />
          <StewardCard
            title="EndState ATL"
            date="September 9th - 12th"
            bodyText={
              "EndstateATL is an Atlanta-based community organization dedicated to Black liberation, rooted in Black Queer Feminist principles. It focuses on building a future grounded in justice and equity through programs and initiatives that empower marginalized communities. "
            }
            image={EndstateATL}
          />
        </Row>
      </Container>
    </>
  );
};

export default Stewards;
