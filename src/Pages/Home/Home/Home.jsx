import EventsSection from "../EventsSection/EventsSection";
import HomePageBgImage from "../HomePageBgImage/HomePageBgImage";
import MadrasahInNumbers from "../MadrasahInNumbers/MadrasahInNumbers";
import NoticeSection from "../NoticeSection/NoticeSection";
import TeachersSection from "../TeachersSection/TeachersSection";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <HomePageBgImage></HomePageBgImage>
      <TopBanner></TopBanner>
      <TeachersSection></TeachersSection>
      <MadrasahInNumbers></MadrasahInNumbers>
      <EventsSection></EventsSection>
      <NoticeSection></NoticeSection>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;
