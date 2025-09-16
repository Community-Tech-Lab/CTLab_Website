import Col from "react-bootstrap/Col";

interface Props {
  title: string;
  image: string;
  bodyText: string;
  listedItems?: string[];
}

const CurriculumCard = ({ title, image, bodyText, listedItems }: Props) => {
  return (
    <Col className="space-grotesk">
      <h2 className="curriculum-heading  ">{title}</h2>
      <img style={{
        width: "100%"
      }}src={image}></img>
      <p>{bodyText}</p>

      <ul>
        {listedItems?.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </Col>
  );
};

export default CurriculumCard;
