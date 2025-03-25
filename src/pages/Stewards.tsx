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
import kcawImg from "../assets/Steward Photos/KCAW.jpg";
import theJoyProjImg from "../assets/Steward Photos/TheJoyProject.jpeg";
import piperImg from "../assets/Steward Photos/Piper.jpeg";
import rccImg from "../assets/Steward Photos/RRC.jpeg";
import endstateAtlImg from "../assets/Steward Photos/endstate.png";
import IENimg from "../assets/Steward Photos/Govinda.jpeg";
import Bvlbancha from "../assets/Steward Photos/bvlbancha.jpeg";
import AC from "../assets/Steward Photos/activationresidency.jpeg";
import APRODEC from "../assets/Steward Photos/aprodec.jpg";
import LCAN from "../assets/Steward Photos/LCAN.jpg";
import LS from "../assets/los_sures.svg";

//hook imports
import { useEffect, useState } from "react";
import Footer from "../components/Footer.tsx";

const Stewards = () => {
  //hooks
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia("(max-width: 768px").matches,
  );

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(max-width: 768px)");

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const aboutUsText: string =
    "Digital Stewards are a group of technologists that work in local neighborhoods to build wireless networks, train community members and develop local applications their communities need to foster healthy relationships, build resilience, and increase access to critical information.";
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
  const ienText: string =
    "The Indigenous Environmental Network (IEN) is an alliance dedicated to protecting the sacredness of Earth through Indigenous knowledge and natural law. Its campaigns include fighting fossil fuel expansion, promoting a just transition to renewable energy, and addressing climate policy failures. IEN emphasizes the integration of traditional wisdom and sustainable practices to create systemic change.";
  const bvlbanchaText: string =
    "SwampNet is a collaborative project that started in 2023 with the goal of bringing alternative and autonomous communication systems to Bvlbancha, New Orleans and across the Gulf South. The project focuses on supporting mutual aid distribution and community-based endeavors, particularly during emergencies and periods of uncertainty. It also aims to explore the relationships between data, place, and memory, while reimagining interactions with communication and digital technologies beyond capitalist and extractive frameworks. ";
  const acText: string =
    "Activation Residency is a Black trans-led artist residency in Syracuse, NY, founded in 2018. It focuses on creating safer, collaborative spaces tailored to residents' needs, fostering healing, wellness, and artistic expression. The program envisions transformative futures and offers a supportive environment for marginalized creatives. ";
  const aprodecText: string =
    "The Alianza Pro Desarrollo Económico de Ceiba (APRODEC) is a nonprofit organization that focuses on empowering communities through initiatives that promote sustainable development, improve quality of life, and seek tangible solutions. APRODEC envisions being a robust nonprofit driving comprehensive regional development through projects, activities, and services that enhance well-being and human development.";
  const LCANText: string =
    "The Latino Climate Action Network (LCAN), launched by El Puente, is dedicated to environmental justice with a focus on Latino and Puerto Rican communities. Established in 2013, it organizes leadership summits to address climate change mitigation, adaptation, and resiliency. Inspired by El Puente’s 'Green Light District' initiative, LCAN aims to empower leaders and develop strategic plans for climate action. It fosters collaboration across sectors, advocating for policies that support both Puerto Rico and Latino communities in the U.S. ";
  const LSText: string =
    "Los Sures is a community-based organization in Williamsburg, Brooklyn, dedicated to preserving affordable housing, supporting family well-being, and fostering neighborhood diversity. Founded in 1972, it addresses housing issues, advocates for tenants, and provides resources such as a food pantry, hydroponic farm, senior centers, and community outreach programs. Los Sures has played a pioneering role in managing and rehabilitating city-owned properties, promoting housing equity in the face of gentrification. ";
  return (
    <>
      <Banner
        bannerText="The Future of Community-Owned Networks"
        bannerColor="red"
        image={bannerPicture}
        isMobile={isMobile}
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
          <h1 className="main-heading">Meet Our Stewards</h1>
        </Row>
        <Row>
          <StewardCard
            link="https://www.kcaw.org/"
            title="KCAW Raven Radio"
            bodyText={kcawText}
            image={kcawImg}
            // date="Trained from Oct 15th to 18th"
            location="Sitka, Alaska"
          />

          <StewardCard
            title="The Joy Project"
            bodyText={joyProjectText}
            image={theJoyProjImg}
            // date="October 7th - 10th"
            link="https://www.joytheproject.com/"
            location="Detroit, Michigan"
          />

          <StewardCard
            title="Detroit Black Food Sovereignty Network"
            // date="October 7th - 10th"
            bodyText={detroitNetworkText}
            image={piperImg}
            link="http://dbcfsn.org/"
            location="Detroit, Michigan"
          />

          <StewardCard
            title="Robert Redford Conservancy"
            // date="September 23rd - 26th"
            bodyText={rrcText}
            image={rccImg}
            link="https://www.pitzer.edu/offices/redfordconservancy"
            location="Claremont, California"
          />
          <StewardCard
            title="EndstateATL"
            // date="September 9th - 12th"
            bodyText={endstateText}
            image={endstateAtlImg}
            link="https://www.endstateatl.org/"
            location="Atlanta, Georgia"
          />
          <StewardCard
            title="Indigenous Environmental Network"
            // date="June 24th - 27th"
            bodyText={ienText}
            image={IENimg}
            link="https://www.ienearth.org/"
            location="Ukiah, California"
          />
          <StewardCard
            title="SwampNet"
            // date="June 24th - 27th"
            bodyText={bvlbanchaText}
            image={Bvlbancha}
            link="https://swampnet.info/"
            location="New Orleans, Louisiana"
          />
          <StewardCard
            title="Activation Residency"
            // date="June 17th - 20th"
            bodyText={acText}
            image={AC}
            link="http://activationresidency.com/"
            location="Syracuse, New York"
          />
          <StewardCard
            title="APRODEC Inc"
            // date="May 6th - 10th"
            bodyText={aprodecText}
            image={APRODEC}
            link="http://aprodec.net/"
            location="Ceiba, Puerto Rico"
          />
          <StewardCard
            title="Latino Climate Action Network"
            // date="May 6th - 10th"
            bodyText={LCANText}
            image={LCAN}
            link="https://www.cakex.org/community/directory/organizations/latino-climate-action-network-lcanx"
            location="San Juan, Puerto Rico"
          />
          <StewardCard
            title="Los Sures United HDFC"
            // date="April 29th - May 2nd"
            bodyText={LSText}
            image={LS}
            link="https://www.southsideunitedhdfc.org/about-us/mission-history/"
            location="Brooklyn, New York"
          />
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Stewards;
