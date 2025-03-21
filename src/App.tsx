//image imports
import home_banner from "./assets/lab_photo.svg";
import nyuStewards from "./assets/nyu_stewards.svg";
import antenna_logo from "./assets/PNK Logos/1.svg";
import teachingKits from "./assets/PNK_teaching_kits.svg";
import pnkImg from "./assets/pnkimage_2.svg";
//component imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Banner from "./components/Banner";
import ColoredTextBanner from "./components/ColoredTextBanner";
import Menu from "./components/Menu";
import TextImgBlock from "./components/TextImgBlock";

//hook imports
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

interface bttnProps {
  title: string;
  link: string;
  variant?: string;
}

function App() {
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

  const aboutText: string = `Back in late 2021 a partnership formed between Community Tech New York (CTNY) and El Puente. As a result of this, a handful of El Puente staff were trained by CTNY taking part in their Digital Stewardship Program. That training included a complete crash course intro to their PNK project, as well as The Detroit Digital Justice Principals that would go on to influence El Puente's involvement and push for Digital Equity. This lab is the first initiative to come of the partnership between the two organizations.

    Its purpose being to further their efforts to combat digital inequality within Black and Brown communities by providing a space in which people can come through learn the ins and outs of everyday technologies that are otherwise foreign to them. What sets this initiative apart from similar spaces in New York City, is that participants don't just sit in on lectures or workshops, they gain valuable hands-on experience with proper equipment, with networking tools such as servers, antennas, routers, etc. We hope to empower people through the Digital Steward program and the use of the CTNY's own PNKs as teaching tools.
`;
  const stewProgText: string =
    "This is the main program offered here at the Community Tech Lab. Facilitated by El Puente Staff and CTNY staff trained to help introduce community members to the fundementals of computer networking. Everything from configuring routers, to setting up linux server. All culminating in the stewards deploying Portable Network Kits with the understanding of how to troubleshoot and configure the equipment themselves.";

  const openingText: string =
    "The Community Tech Lab is a hands-on tech and digital equity learning space located at El Puente’s flagship Leadership Center in South Williamsburg.  The first of its kind in NYC, the Lab launched in January 2023 through a partnership between CTNY and El Puente and in collaboration with the communities it serves.";

  const pnkText: string = `The portable network kit is first and foremost a teaching tool. Created by CTNY, it is a kit made using easily accessible hardware with the goal to teach people how to set up and maintain their own personal networks. It also serves as a emergency communication device and allows for people to communicate and share information without the need to connect to the internet.

    `;

  const dsBttnProps: bttnProps = {
    title: "Learn More",
    link: "stewards",
  };

  const pnkBttnProps: bttnProps = {
    title: "Explore PNKs",
    link: "pnks",
    variant: "outline-dark",
  };

  return (
    <>
      <Banner
        bannerColor={"#CF698f"}
        bannerText="Community Tech Lab"
        image={home_banner}
        isMobile={isMobile}
      />

      <Menu />
      <Container className="py-3">
        <Row className="mt-3 mx-3">
          <h1 className="main-heading">Elevation Through Education!</h1>
        </Row>
        <Row>
          <TextImgBlock
            image={antenna_logo}
            bodyText={openingText}
            flip={false}
          />
          <TextImgBlock
            title="About the Community Tech Lab"
            image={home_banner}
            bodyText={aboutText}
            flip={true}
          />
        </Row>
      </Container>
      <ColoredTextBanner
        image1={teachingKits}
        image2={nyuStewards}
        title="Digital Stewardship Program"
        outerColor="#AC3D52"
        innerColor="#CF698F"
        bodyText={stewProgText}
        isMobile={isMobile}
        button={dsBttnProps}
      />
      <Container className="py-3 my-3">
        <Row className="mt-3 mx-3">
          <h1 className="main-heading">Portable Network Kits</h1>
        </Row>
        <Row>
          <TextImgBlock
            image={pnkImg}
            bodyText={pnkText}
            flip={true}
            title="What are they? And why do we use them?"
            button={pnkBttnProps}
          />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
