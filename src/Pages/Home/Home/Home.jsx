import EventsSection from "../EventsSection/EventsSection";
import HomePageBgImage from "../HomePageBgImage/HomePageBgImage";
import MadrasahInNumbers from "../MadrasahInNumbers/MadrasahInNumbers";
import NoticeSection from "../NoticeSection/NoticeSection";
import TeachersSection from "../TeachersSection/TeachersSection";
import TopBanner from "../TopBanner/TopBanner";
import MadrasahInformation from "../MadrasahInformation/MadrasahInformation";
import MadrasahPhotoGallery from "../MadrasahPhotoGallery/MadrasahPhotoGallery";
import MadrasahDetails from "../MadrasahDetails/MadrasahDetails";
import AboutMadrasahSection from "../AboutMadrasahSection/AboutMadrasahSection";
import PrincipalWordAndBoardLinks from "../PrincipalWordAndBoardLinks/PrincipalWordAndBoardLinks";

const Home = () => {
  return (
    <div>
      <HomePageBgImage></HomePageBgImage>
      <TopBanner></TopBanner>
      <MadrasahDetails></MadrasahDetails>
      <TeachersSection></TeachersSection>
      <AboutMadrasahSection></AboutMadrasahSection>
      <PrincipalWordAndBoardLinks></PrincipalWordAndBoardLinks>
      <MadrasahInformation></MadrasahInformation>
      <EventsSection></EventsSection>
      <MadrasahInNumbers></MadrasahInNumbers>
      <MadrasahPhotoGallery></MadrasahPhotoGallery>
      {/* <NoticeSection></NoticeSection> */}
    </div>
  );
};

export default Home;
