//component imports
import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

interface Props {
  steward: Steward;
}

const StewardCard = ({ steward }: Props) => {
  function getRandomHexColor(): string {
    const colors = ["#0000FF", "#FFFF00", "#FF0000"]; // blue, yellow, red
    const randomIndex = Math.floor(Math.random() * colors.length);
    const baseColor = colors[randomIndex];
    const opacityHex = "59"; // 45% opacity in hex

    return `${baseColor}${opacityHex}`;
  }

  const cardStyle: React.CSSProperties = {
    // backgroundImage: `url(${steward.image})`,
    // backgroundSize: "contain",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    margin: 0,
    position: "relative",
  };
  const imgStyle: React.CSSProperties = {
    // backgroundImage: `url(${steward.image})`,
    // backgroundSize: "contain",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // aspectRatio: "16/9"
    position: "relative",
    width: "100%",
  };
  const txtStyle: React.CSSProperties = {
    // backgroundImage: `url(${steward.image})`,
    // backgroundSize: "contain",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // aspectRatio: "16/9"
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

  return (
    // <Col className="space-grotesk" style={cardStyle} xs={12} lg={4}>
    //   <Image src={steward.image} fluid className="py-3" />
    //   <Link
    //     to={steward.link ?? "#"}
    //     style={{
    //       textDecoration: "none",
    //     }}
    //   >
    //     <h1 className="sub-heading">{steward.name}</h1>
    //   </Link>

    //   <h3>{steward.location}</h3>

    //   <h5>{steward.dateTrained}</h5>
    //   <p
    //     style={{
    //       textAlign: "justify",
    //     }}
    //   >
    //     {steward.description}
    //   </p>
    // </Col>
    <Col className="space-grotesk" style={cardStyle} xs={12} lg={4}>
      <div className="" style={txtStyle}>
        <h2>{steward.name}</h2>
        <h5>{steward.dateTrained}</h5>
      </div>
      <img src={steward.image} style={imgStyle}></img>
    </Col>
  );
};

export default StewardCard;
