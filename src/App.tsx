//image imports
import home_banner from "./assets/Homepage_banner.svg";

//component imports
import Banner from "./components/Banner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Banner image={home_banner} />

      <Container>
        <Row>
          <Col>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada
              diam rutrum platea primis, parturient himenaeos tempus. Pharetra
              phasellus vehicula odio dictumst nostra mattis. Quisque sociosqu
              sollicitudin venenatis senectus arcu semper integer. Ullamcorper
              felis nibh netus sollicitudin facilisi. Erat lobortis libero nisl
              nostra mollis mus mus curabitur. Lectus rutrum neque proin mauris
              justo mauris nibh ridiculus. Felis massa convallis eu inceptos
              neque. Nunc sapien inceptos diam molestie, at aliquet a erat. In
              duis etiam porttitor venenatis eu. Sapien dis euismod imperdiet;
              lobortis lacus odio. Fringilla enim congue ipsum torquent commodo
              magnis cras viverra ipsum. Habitant erat adipiscing semper posuere
              nisi vulputate; placerat suscipit porttitor. Ultrices posuere
              sodales suspendisse faucibus placerat imperdiet nunc habitant?
              Orci massa dis quis cubilia a maecenas lacus placerat. Consequat
              netus commodo, et augue inceptos dignissim eget elit. Leo vel
              conubia justo adipiscing lectus lectus finibus. Ridiculus
              consectetur rhoncus pretium luctus per scelerisque tortor
              ultricies. Auctor augue mattis curabitur dapibus ligula elementum
              ex nam. Justo sodales lectus lectus auctor at potenti. Mauris
              facilisis interdum id auctor posuere facilisi. Himenaeos neque
              facilisi praesent elit pulvinar litora hac. Ligula praesent rutrum
              posuere finibus ad. Taciti finibus iaculis hendrerit dolor viverra
              facilisi. Avitae gravida, praesent at lobortis neque eu fames. Nam
              bibendum mollis mus magnis taciti praesent.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
