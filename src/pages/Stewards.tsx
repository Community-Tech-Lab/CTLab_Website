import bannerPicture from "../assets/visit_banner.svg";
import Menu from "../components/Menu.tsx";
import Banner from "../components/Banner.tsx";

const Stewards = () => {
  return (
    <div>
      <Menu />
      <Banner
        bannerText="Meet the Stewards"
        bannerColor="red"
        image={bannerPicture}
      />
    </div>
  );
};

export default Stewards;
