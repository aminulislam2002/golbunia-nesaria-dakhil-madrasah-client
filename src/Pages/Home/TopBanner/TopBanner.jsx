import topBannerImage from "../.../../../../assets/image/cover.jpg";

const TopBanner = () => {
  return (
    <div>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${topBannerImage})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default TopBanner;
