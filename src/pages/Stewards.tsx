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
import Networking from "../assets/cablecrimping.png";
import WebDev from "../assets/WebDev.png";

//hook imports
import { useEffect, useState } from "react";
import Footer from "../components/Footer.tsx";
import CurriculumCard from "../components/CurriculumCard.tsx";

const Stewards = () => {
  //hooks
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia("(max-width: 768px").matches
  );

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(max-width: 768px)");

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <Banner
        bannerText="Our Digital Stewards"
        bannerColor="red"
        image={bannerPicture}
        isMobile={isMobile}
      />

      <Container>
        <TextImgBlock
          title="The Digital Stewards Program"
          bodyText="Digital Stewards are a group of technologists that work in local neighborhoods to build wireless networks, train community members and develop local applications their communities need to foster healthy relationships, build resilience, and increase access to critical information. We pride ourselves on our ability to train community members using real world equipment, providing them with valuable hands on experience. This proves to be valuable to our community members who wouldn’t normally have access to networking equipment or server computers, but can experiment and learn with these technologies. This is an opportunity open to everyone, no prior knowledge required. "
        />
      </Container>

      <Container>
        <TextImgBlock
          title="Our Curriculum"
          bodyText="Through our use of the Portable network kits we are able to cover a variety of topics. Resulting in the creation of three main pillars that make up the bulk of our digital stewards training. Each centered around our digital Justice principles ensuring that the material we cover can be used to the benefit of our communities."
        />
        <Row>
          {" "}
          <CurriculumCard
            title="Networking"
            image={Networking}
            bodyText="Topics Covered include but are not limited to
          Wireless Antenna Configuration
          Router Configuration
          Linux Protocols"
          />
          <CurriculumCard title="Web Development" image="" bodyText="" />
          <CurriculumCard title="Community Outreach" image="" bodyText="" />
        </Row>
      </Container>
    </>
  );
};

export default Stewards;
