//component imports
import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

interface Props {
  steward: Steward;
}

const StewardCard = ({steward}: Props) => {
  const cardStyle: React.CSSProperties = {
    textWrap: "wrap",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    height: "100%",
  };

  return (
    <Col className="space-grotesk-small" style={cardStyle} xs={12} lg={4}>
      <Image src={steward.image} fluid className="py-3" />
      <Link
        to={steward.link ?? "#"}
        style={{
          textDecoration: "none",
        }}
      >
        <h1 className="sub-heading">{steward.name}</h1>
      </Link>

      <h3>{steward.location}</h3>

      <h5>{steward.dateTrained}</h5>
      <p
        style={{
          textAlign: "justify",
        }}
      >
        {steward.description}
      </p>
    </Col>
  );
};

export default StewardCard;
