//component imports
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PnkTab from "../components/PnkTab";

//image imports
import pnk_banner from "../assets/pnk_banner.svg";
import teaching_kits from "../assets/PNK_teaching_kits.jpg";
import pnkv1Img from "../assets/pnkv1Img.png";

//hook imports
import { useEffect, useState } from "react";

interface Material {
  name: string;
  desc: string;
  price?: string;
  link?: string;
}

const PnkInfo = () => {
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

  const mainPnkText: string = `The Portable Network Kit (PNK) serves as a way for people to communicate and share information without the need to connect to the internet.

    The PNK works by broadcasting a Local Area Network (LAN) through the use of the mesh antenna inside and the router. You connect to it like you would any other Wireless Fidelity (WiFi) signal and once you do you will be able to access all the applications and documents hosted on the server ONLY, no world wide web. It creates an entire mesh network when multiple have direct line of sight (LoS) to each other. Allowing for a vast amount of people to connect and interact.

    However It is possible to connect the PNK to the internet. Allowing for it to broadcast a WiFi signal as well that will let anyone already connected browse the internet as usual.

    `;

  const pnkv1Text: string = `The original proof of concept, demonstration version of the PNK software image was created to run on a Raspberry Pi 3 by Andy Gunn and was not publicly shared.
`;

  const pnkv1Materials: Material[] = [
    {
      name: "Router",
      desc: "A router capable of reading and identifying host names within a local network",
    },
    {
      name: "Raspberry Pi 3",
      desc: "This version of the kit's server build was built off the the 32-bit debian bookworm os that was made for this model of pi",
      link: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/",
      price: "$25 - $50",
    },
  ];

  return (
    <>
      <Banner
        image={pnk_banner}
        bannerText="Portable Network Kits"
        isMobile={isMobile}
        bannerColor="#006EA8"
      />
      <Menu />

      <Container className="py-3 my-3">
        <Row>
          {/*Header */}
          <Col xs={12}>
            <h1 className="main-heading">What is a Portable Network Kit?</h1>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-center flex-column align-items-center py-3"
          >
            <Image fluid rounded src={teaching_kits} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {" "}
            <p
              style={{
                whiteSpace: "pre-line",
              }}
              className="space-grotesk-small"
            >
              {mainPnkText}
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Tabs className="space-grotesk-small">
              <Tab title="PNK v1" eventKey="v1">
                <PnkTab
                  title="PNK Version 1.0 (2017)"
                  body={pnkv1Text}
                  image={pnkv1Img}
                  matertials={pnkv1Materials}
                />
              </Tab>
              <Tab title="PNK v2" eventKey="v2">
                <h1 className="main-heading my-2 py-1">
                  PNK Version 2.0 (2019)
                </h1>
              </Tab>
              <Tab title="PNK v3" eventKey="v3">
                <h1 className="main-heading my-2 py-1">
                  PNK Version 3.0 (2024)
                </h1>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default PnkInfo;
