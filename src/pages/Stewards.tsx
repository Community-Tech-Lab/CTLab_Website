//Component Imports
import Menu from "../components/Menu.tsx";
import Banner from "../components/Banner.tsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StewardCard from "../components/StewardCard.tsx";
import TextImgBlock from "../components/TextImgBlock.tsx";
import BigCard from "../components/BigCard.tsx";

//Image imports
import bannerPicture from "../assets/visit_banner.svg";
import Networking from "../assets/cablecrimping.png";
import WebDev from "../assets/WebDev.png";
import CommunityOutreach from "../assets/CommunityOutreach.png";

//hook imports
import { useEffect, useState } from "react";
import Footer from "../components/Footer.tsx";
import CurriculumCard from "../components/CurriculumCard.tsx";

//Other imports
import IsocStewards from "../Data.ts";

const Stewards = () => {
  //hooks
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia("(max-width: 768px").matches
  );

  // const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(max-width: 768px)");

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <Menu />
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
          <CurriculumCard
            title="Networking"
            image={Networking}
            bodyText="Topics covered include but are not limited to:"
            listedItems={[
              "Wireless Antenna Configuration",
              "Router Configuration ",
              "Linux Protocols",
            ]}
          />
          <CurriculumCard
            title="Web Development"
            image={WebDev}
            bodyText="We encourage our stewards to also be builders. Covering skills such as:"
            listedItems={["Local Server Hosting", "HTML, CSS, JS", "React.js"]}
          />
          <CurriculumCard
            title="Community Outreach"
            image={CommunityOutreach}
            bodyText="Embodying the Train the Trainer model, we also train our stewards in:"
            listedItems={[
              "Digital Justice Principles",
              "Community organization",
              "Workshop facilitation",
            ]}
          />
        </Row>
      </Container>
      <BigCard />
      <Container>
        <h1
          style={{
            color: "#AC3D52",
            fontFamily: "Space Grotesk",
            textAlign: "center",
            borderBottom: "1px solid black",
          }}
        >
          Grassroots Stewards
        </h1>
        <p
          style={{
            fontFamily: "Space Grotesk",
            margin: "20px",
          }}
        >
          Thanks to the funding of Internet Society Foundation, we are able to
          train the following grassroots organizations in building and
          maintaining their own Portable Newtork Kits.
        </p>
      </Container>

      <div>
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
          }}
        >
          {IsocStewards.map((steward, index) => (
            <StewardCard index={index} steward={steward} key={index} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Stewards;
