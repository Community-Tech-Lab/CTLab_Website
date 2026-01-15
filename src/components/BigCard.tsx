import "./BigCard.css";
const BigCard = () => {
  return (
    <div className="big-card">
      <h1 className="header" style={{ fontFamily: "Space Grotesk" }}>
        Discotech
      </h1>
      <p
        className="description"
        style={{
          fontFamily: "Space Grotesk",
        }}
      >
        We make a great effort to engage with our local community as much as
        possible. Each cohort works towards planning a community event known as
        a Discovery of Tech event, otherwise known as a discotech. allowing for
        our stewards to directly communicate with community members on Digital
        Equity issues and technology that could be used to address those issues.
      </p>
    </div>
  );
};
export default BigCard;
