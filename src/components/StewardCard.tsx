//component imports
import React from "react";
import Col from "react-bootstrap/Col";
import Modal from "./Modal";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

interface Props {
  steward: Steward;
  onClick?: () => void;
  index: number;
}

const StewardCard = ({ steward }: Props) => {
  function getRandomHexColor(): string {
    const colors = ["#0000FF", "#FFFF00", "#FF0000"]; // blue, yellow, red
    const randomIndex = Math.floor(Math.random() * colors.length);
    const baseColor = colors[randomIndex];
    const opacityHex = "45"; // 45% opacity in hex

    return `${baseColor}${opacityHex}`;
  }

  const cardStyle: React.CSSProperties = {
    margin: 0,
    position: "relative",
  };
  const imgStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
  };
  const txtStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: 2,
    color: "#ffeceeff",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column-reverse",
    padding: "1rem",
    backgroundColor: getRandomHexColor(),
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Container fluid style={{ fontFamily: "Space Grotesk" }}>
          <Row>
            <Col
              xs={12}
              md={12}
              lg={4}
              xl={4}
              className=" d-flex justify-content-center"
            >
              <img src={steward.image} className="modal-img" style={{boxShadow: "3px 1px 1px rgb(217, 217, 217)"}}></img>
            </Col>
            <Col>
              <h1 className="main-heading">{steward.name}</h1>
              <h4 className="sub-heading"> {steward.dateTrained}</h4>
              <p className="modal-description">{steward.description}</p>
            </Col>
          </Row>
        </Container>
      </Modal>

      <Col
        className="space-grotesk"
        style={cardStyle}
        xs={12}
        lg={4}
        xl={3}
        onClick={() => setIsOpen(true)}
      >
        <div className="" style={txtStyle}>
          <h5>{steward.dateTrained}</h5>
          <h2>{steward.name}</h2>
        </div>
        <img src={steward.image} style={imgStyle}></img>
      </Col>
    </>
  );
};

export default StewardCard;
