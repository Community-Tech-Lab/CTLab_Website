import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  image: string;
  bodyText: string;
  listedItems?: string[];
}

const CurriculumCard = ({ title, image, bodyText, listedItems }: Props) => {
  /*this is a set of css propertie that may or may not be relevant to the final design */

  // const cardStyle: React.CSSProperties = {
  //   textWrap: "wrap",
  //   display: "flex",
  //   flexFlow: "column",
  //   justifyContent: "center",
  //   height: "100%",
  // };

  return (
    <Col>
      <h2>{title}</h2>
      <img src={image}></img>
      <p>{bodyText}</p>

      <ul>
        {listedItems?.map((item, key) => (
          <ul key={key}>{item}</ul>
        ))}
      </ul>
    </Col>
  );
};

export default CurriculumCard;

// const StewardCard = ({
//   title,
//   image,
//   bodyText,
// }

// }: Props) => {
//   const cardStyle: React.CSSProperties = {
//     textWrap: "wrap",
//     display: "flex",
//     flexFlow: "column",
//     justifyContent: "center",
//     height: "100%",
//   };
