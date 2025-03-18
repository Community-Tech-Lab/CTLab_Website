//component imports
import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  image: string;
  bodyText: string;
  date: string;
  link: string;
  location: string;
}

const StewardCard = ({
  title,
  image,
  bodyText,
  date,
  link,
  location,
}: Props) => {
  const cardStyle: React.CSSProperties = {
    textWrap: "wrap",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    height: "100%",
  };

  return (
    <Col className="space-grotesk-small" style={cardStyle} xs={12} lg={4}>
      <Image src={image} fluid className="py-3" />
      <Link
        to={link}
        style={{
          textDecoration: "none",
        }}
      >
        <h1 className="sub-heading">{title}</h1>
      </Link>

      <h3>{location}</h3>

      <h5>{date}</h5>
      <p
        style={{
          textAlign: "justify",
        }}
      >
        {bodyText}
      </p>
    </Col>
  );
};

export default StewardCard;
