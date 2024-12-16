//image imports
import home_banner from "./assets/lab_photo.svg";
import antenna_logo from "./assets/PNK Logos/1.svg";

//component imports
import Banner from "./components/Banner";
import ColoredTextBanner from "./components/ColoredTextBanner";
import Menu from "./components/Menu";
import TextImgBlock from "./components/TextImgBlock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <>
      <Banner
        bannerColor={"#fceb00"}
        bannerText="Community Tech Lab"
        image={home_banner}
      />

      <Menu />
      <Container className="py-3">
        <Row className="mt-3 mx-3">
          <h1 className="main-heading">Elevation Through Education!</h1>
        </Row>
        <Row>
          <TextImgBlock
            image={antenna_logo}
            bodyText={
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa elementum arcu ad mattis at risus ultrices. Consectetur hac bibendum conubia congue convallis. Litora libero tellus mattis risus vel tempus magnis. Ornare arcu vestibulum pulvinar habitant lacus gravida. Porttitor justo pellentesque litora eleifend massa ac vitae fringilla?Tortor velit class dignissim volutpat primis varius facilisis! Mauris bibendum maecenas porta molestie rutrum magnis aptent. Enim ipsum torquent tincidunt tincidunt ut mollis proin primis. Ipsum vitae vehicula conubia neque scelerisque natoque facilisis. Ante curabitur semper est consectetur convallis mattis nam interdum urna. Molestie a aliquam commodo cubilia faucibus non pharetra. Magnis magnis vulputate placerat nam vivamus vestibulum. Sapien feugiat commodo sociosqu elementum nunc penatibus nostra."
            }
            flip={false}
          />
          <TextImgBlock
            title="About the Project"
            image={home_banner}
            bodyText={
              "Lorem ipsum odor amet, consectetuer adipiscing elit. Massa elementum arcu ad mattis at risus ultrices. Consectetur hac bibendum conubia congue convallis. Litora libero tellus mattis risus vel tempus magnis. Ornare arcu vestibulum pulvinar habitant lacus gravida. Porttitor justo pellentesque litora eleifend massa ac vitae fringilla?Tortor velit class dignissim volutpat primis varius facilisis! Mauris bibendum maecenas porta molestie rutrum magnis aptent. Enim ipsum torquent tincidunt tincidunt ut mollis proin primis. Ipsum vitae vehicula conubia neque scelerisque natoque facilisis. Ante curabitur semper est consectetur convallis mattis nam interdum urna. Molestie a aliquam commodo cubilia faucibus non pharetra. Magnis magnis vulputate placerat nam vivamus vestibulum. Sapien feugiat commodo sociosqu elementum nunc penatibus nostra."
            }
            flip={false}
          />
        </Row>
      </Container>
      <ColoredTextBanner />
    </>
  );
}

export default App;
