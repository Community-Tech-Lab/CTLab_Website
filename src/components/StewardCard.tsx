import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

interface Props {
  title: string;
  image: string;
  bodyText: string;
}
const StewardCard = ({ title, image, bodyText }: Props) => {
  return (
    <Col>
      <h1>{title}</h1>
      <Image src={image} />
      <p>{bodyText}</p>
    </Col>
  );
};

export default StewardCard;
