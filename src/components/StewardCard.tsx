import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

interface Props {
  title: string;
  image: string;
  bodyText: string;
  date: string;
}

const StewardCard = ({ title, image, bodyText, date }: Props) => {
  const cardStyle: React.CSSProperties = {
    textWrap: "wrap",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    height: "100%",
  };

  return (
    <Col className="space-grotesk" style={cardStyle} xs={12} lg={4}>
      <Image src={image} fluid className="py-3" />
      <h1 className="sub-heading">{title}</h1>
      <h2>{date}</h2>
      <p>{bodyText}</p>
    </Col>
  );
};

export default StewardCard;
