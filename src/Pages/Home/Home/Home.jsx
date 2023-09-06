import HomePageBgImage from "../HomePageBgImage/HomePageBgImage";
import MadrasahInNumbers from "../MadrasahInNumbers/MadrasahInNumbers";
import TeachersSection from "../TeachersSection/TeachersSection";
import TopBanner from "../TopBanner/TopBanner";
import MadrasahInformation from "../MadrasahInformation/MadrasahInformation";
import MadrasahPhotoGallery from "../MadrasahPhotoGallery/MadrasahPhotoGallery";
import MadrasahDetails from "../MadrasahDetails/MadrasahDetails";
import AboutMadrasahSection from "../AboutMadrasahSection/AboutMadrasahSection";
import PrincipalWordAndBoardLinks from "../PrincipalWordAndBoardLinks/PrincipalWordAndBoardLinks";
import MadrasahOverviewAndLinks from "../MadrasahOverviewAndLinks/MadrasahOverviewAndLinks";
import AddressLocationInformation from "../AddressLocationInformation/AddressLocationInformation";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <HomePageBgImage></HomePageBgImage>
      <TopBanner></TopBanner>
      <MadrasahDetails></MadrasahDetails>
      <TeachersSection></TeachersSection>
      <AboutMadrasahSection></AboutMadrasahSection>
      <PrincipalWordAndBoardLinks></PrincipalWordAndBoardLinks>
      <MadrasahOverviewAndLinks></MadrasahOverviewAndLinks>
      <MadrasahInformation></MadrasahInformation>
      <MadrasahInNumbers></MadrasahInNumbers>
      <MadrasahPhotoGallery></MadrasahPhotoGallery>
      <AddressLocationInformation></AddressLocationInformation>
    </div>
  );
};

export default Home;
