//component imports
import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

interface Props {
  steward: Steward;
}

const StewardCard = ({ steward }: Props) => {
  const cardStyle: React.CSSProperties = {
    // backgroundImage: `url(${steward.image})`,
    // backgroundSize: "contain",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // aspectRatio: "16/9"
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
    width: "100%"
  };
  const txtStyle: React.CSSProperties = {
    // backgroundImage: `url(${steward.image})`,
    // backgroundSize: "contain",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // aspectRatio: "16/9"
    position: "absolute",
    zIndex: 2,
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
      <img src={steward.image} style={imgStyle}></img>
    </Col>
  );
};

export default StewardCard;
