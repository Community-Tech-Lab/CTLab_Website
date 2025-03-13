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
import pnkv2Img from "../assets/pnkv2Img.png";
import pnkv3Img from "../assets/pnkv3Img.jpeg";

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

  const pnkv1Text: string = `The original proof of concept, demonstration version of the PNK created by Raul Enriquez to teach basic networking skills to community members.
    `;

  const pnkv1Materials: Material[] = [
    {
      name: "Router",
      desc: "A router capable of reading and identifying host names within a local network no specific router is needed or reccomended.",
    },
    {
      name: "Raspberry Pi 3",
      desc: "This version of the kit's server build was built off the the 32-bit debian bookworm os that was made for this model of pi",
      link: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b/",
      price: "$25.00 - $50.00",
    },
    {
      name: "Server Build (Currenly Unavailable)",
      desc: "This version of the PNK software image was created to run on a Raspberry Pi 3 by Andy Gunn and was not publicly shared.",
      link: "https://github.com/Community-Tech-Lab/PNK-Software",
    },
  ];

  const pnkv2Text: string = `This is the first version of the kit that was distributed publically. This version of the kit was meant to be deployed in communities to help build out their own infastructure for community onwed networks. The PNK v2 is a more modular design, allowing for the base kit to be expanded upon to fit the needs of the user. In other words there is no "Correct" way of putting this together.
    `;

  const pnkv2Materials: Material[] = [
    {
      name: "Mikrotik Hex PoE",
      desc: "A small, affordable and easy to use router that is PoE endabled with smart ports capable of detecting PoE devices. Most importantly, it is compatible with the rest of the hardware and software. Allowing for the identification host names within a local network and also suppoorting the right voltages to power out antennas.",
      link: "https://mikrotik.com/product/RB960PGS",
      price: "$89.00",
    },

    {
      name: "Ubiquiti EdgeRouter X (Discontinued)",
      desc: `This was the router initially used for the PNKv2 as it offered a friendly UI and great compatibility with the Ubiquity Anttennas, However Ubiquiti Network's EdgeRouter X (ER-X) appears to have been discontinued, or at the very least been perpetually out of stock with no hint of ever coming back.`,
      link: "https://store.ui.com/us/en/products/er-x",
      price: "$59.00",
    },

    {
      name: "Ubiquiti AC Mesh (UAP-AC-M)",
      desc: "This is a compact, indoor/outdoor WiFi 5 AP with optional external antenna support for directional coverage. Stock has been known to be limited at times.",
      link: "https://store.ui.com/us/en/category/wifi-outdoor/products/uap-ac-mesh?s=us&l=en",
      price: "$99.00",
    },

    {
      name: "Raspberry Pi 3b+",
      desc: "The third Generation Raspberry Pi, this server build was also built off the the 32-bit debian bookworm os that was made for this model of pi.",
      link: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/",
      price: "$35.00",
    },

    {
      name: "Raspberry Pi 4b",
      desc: "The fourth Generation Raspberry Pi, this server build was also built off the the 32-bit debian bookworm os which happens to be compatible with this model of pi. We reccomend the version with either 1 or 2 GB of RAM if you are going to use the PNKv2 version of the server build. The other versions don't seem to work with the PNKv2 server image.",
      link: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/",
      price: "Starting at $35.00",
    },

    {
      name: "Server Build (Depricated)",
      desc: "A 32bit PNK build pipeline created to run on both Raspberry Pi 3 and 4 by Josh King @jheretic and released under the GNU General Public License v3.0 (GPLv3). This version of the server image only works with Raspberry Pi 3 models and early models of the Raspberry Pi 4",
      link: "https://github.com/Community-Tech-Lab/PNK-Software",
    },
  ];

  const pnkv3Text: string = `This version was created in response to the release of the raspberry pi 5 in order to take advantage of the computation power of the machine. The server image can be found in the build materials below or at our GitHub @Community-Tech-Lab/PNK-Software under the releases section.`;
  const pnkv3Materials: Material[] = [
    {
      name: "Mikrotik Hex PoE",
      desc: "A small, affordable and easy to use router that is PoE endabled with smart ports capable of detecting PoE devices. Most importantly, it is compatible with the rest of the hardware and software. Allowing for the identification host names within a local network and also suppoorting the right voltages to power out antennas.",
      link: "https://mikrotik.com/product/RB960PGS",
      price: "$89.00",
    },

    {
      name: "Ubiquiti AC Mesh (UAP-AC-M)",
      desc: "This is a compact, indoor/outdoor WiFi 5 AP with optional external antenna support for directional coverage. Stock has been known to be limited at times.",
      link: "https://store.ui.com/us/en/category/wifi-outdoor/products/uap-ac-mesh?s=us&l=en",
      price: "$99.00",
    },
    {
      name: "Raspberry Pi 5",
      desc: "The fifth Generation Raspberry Pi, this server build was built off the the 64-bit debian bookworm. We reccomend the version with 8GB of RAM if you are going to use the PNKv3 version of the server build.",
      link: "https://www.raspberrypi.com/products/raspberry-pi-5/",
      price: "Starting at $50.00",
    },
    {
      name: "Raspberry Pi 4b",
      desc: "The fourth Generation Raspberry Pi, this server build was also built off the the 64-bit debian bookworm os which happens to be compatible with this model of pi. We reccomend the version with either 3 or 4 GB of RAM if you are going to use the PNKv3 version of the server build.",
      link: "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/",
      price: "Starting at $35.00",
    },
    {
      name: "Server Build",
      desc: "A 64bit PNK disk image created to run on Raspberry Pi 5 by Oscar Kevin Comunidad @SkyMazter and released under the Apache License 2.0. Download Link Found Below.",
      link: "https://github.com/Community-Tech-Lab/PNK-Software/releases/tag/v3.0.0",
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
              <Tab title="PNK v3" eventKey="v3">
                <PnkTab
                  title="PNK Version 3.0 (2024)"
                  image={pnkv3Img}
                  body={pnkv3Text}
                  materials={pnkv3Materials}
                ></PnkTab>
              </Tab>

              <Tab title="PNK v2" eventKey="v2">
                <PnkTab
                  title="PNK Version 2.0 (2019)"
                  image={pnkv2Img}
                  body={pnkv2Text}
                  materials={pnkv2Materials}
                ></PnkTab>
              </Tab>

              <Tab title="PNK v1" eventKey="v1">
                <PnkTab
                  title="PNK Version 1.0 (2017)"
                  body={pnkv1Text}
                  image={pnkv1Img}
                  materials={pnkv1Materials}
                />
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
