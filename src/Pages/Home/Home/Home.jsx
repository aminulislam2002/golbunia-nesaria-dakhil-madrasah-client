import EventsSection from "../EventsSection/EventsSection";
import NoticeSection from "../NoticeSection/NoticeSection";
import TeachersSection from "../TeachersSection/TeachersSection";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <TeachersSection></TeachersSection>
      <EventsSection></EventsSection>
      <NoticeSection></NoticeSection>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;
