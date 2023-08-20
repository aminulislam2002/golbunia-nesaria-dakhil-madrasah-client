const TopBanner = () => {
  const image =
    "https://img.freepik.com/free-photo/village-background-asset-game-2d-futuristic-generative-ai_191095-2024.jpg?w=740&t=st=1692504602~exp=1692505202~hmac=b4cdabb0c95ca8cba9541538a770b228600e944e13663733f75f6c25900ade6a";
  return (
    <div>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default TopBanner;
