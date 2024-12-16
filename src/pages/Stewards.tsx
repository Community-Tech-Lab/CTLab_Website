//Component Imports
import Menu from "../components/Menu.tsx";
import Banner from "../components/Banner.tsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StewardCard from "../components/StewardCard.tsx";
import TextImgBlock from "../components/TextImgBlock.tsx";

//Image imports
import logo from "../assets/PNK Logos/4.svg";
import bannerPicture from "../assets/visit_banner.svg";
import kcawImg from "../assets/Steward Photos/KCAW.jpeg";
import theJoyProjImg from "../assets/Steward Photos/TheJoyProject.jpeg";
import piperImg from "../assets/Steward Photos/Piper.jpeg";
import rccImg from "../assets/Steward Photos/rrc.jpg";
import endstateAtlImg from "../assets/Steward Photos/endstateATL.jpg";

const Stewards = () => {
  const aboutUsText: string =
    "Digital Stewards are a group of technologists that work in local neighborhoods to build wireless networks, and develop local applications their communities need to foster healthy relationships, build resilience, and increase access to critical information.";
  const kcawText: string =
    "KCAW is a community radio station located in sitka, alaska. KCAW provides essential information services such as Emergency Alert System and AMBER announcements and severe weather warnings, as well as local, regional, state, national and international news. As a member of CoastAlaska, it creates and archives stories of its community members as radio content for the station to broadcast.";
  const joyProjectText: string =
    "The JOY Project is a community-driven initiative that reconnects people with indigenous practices and the cultural heritage of Black and Brown communities through food, gardening, and storytelling. It features spaces like a sensory garden, seed library, outdoor learning center, and healing areas to promote restoration, reconciliation, and education. The project integrates traditional and modern agricultural techniques to foster conversations about history, resilience, and community healing.";
  const detroitNetworkText: string =
    "The Detroit Black Community Food Sovereignty Network (DBCFSN) focuses on empowering Black communities through food sovereignty, promoting access to healthy, culturally appropriate food produced sustainably. DBCFSN runs the Detroit Food Commons, supporting local food justice initiatives.";
  const rrcText: string =
    "The Robert Redford Conservancy for Southern California Sustainability at Pitzer College, founded in 2012, promotes socio-ecological justice and environmental sustainability. It engages in advocacy, education, and research to address environmental challenges in Southern California and beyond. Programs include student fellowships, regenerative agriculture, and hands-on K-12 environmental education. The Conservancy fosters collaboration on sustainability efforts through community engagement and policy work.";
  const endstateText: string =
    "EndstateATL is an Atlanta-based community organization dedicated to Black liberation, rooted in Black Queer Feminist principles. It focuses on building a future grounded in justice and equity through programs and initiatives that empower marginalized communities. ";

  return (
    <>
      <Banner
        bannerText="The Future of Community-Owned Networks"
        bannerColor="red"
        image={bannerPicture}
      />
      <Menu />
      <Container>
        <Row>
          <TextImgBlock
            flip={false}
            image={logo}
            bodyText={aboutUsText}
            title="What are Digital Stewards?"
          />
        </Row>
        <Row>
          <h1 className="main-heading">Discover Our Stewards</h1>
        </Row>
        <Row>
          <StewardCard
            title="KCAW Raven Radio"
            bodyText={kcawText}
            image={kcawImg}
            date="October 15th - 18th"
          />
          <StewardCard
            title="The Joy Project"
            bodyText={joyProjectText}
            image={theJoyProjImg}
            date="October 7th - 10th"
          />

          <StewardCard
            title="Detroit Black Food Sovereignty Network"
            date="October 7th - 10th"
            bodyText={detroitNetworkText}
            image={piperImg}
          />
        </Row>
        <Row>
          <StewardCard
            title="Robert Redford Conservancy"
            date="September 23rd - 26th"
            bodyText={rrcText}
            image={rccImg}
          />
          <StewardCard
            title="EndState ATL"
            date="September 9th - 12th"
            bodyText={endstateText}
            image={endstateAtlImg}
          />
        </Row>
      </Container>
    </>
  );
};

export default Stewards;
