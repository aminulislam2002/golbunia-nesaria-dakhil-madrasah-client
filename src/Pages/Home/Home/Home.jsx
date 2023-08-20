import EventsSection from "../EventsSection/EventsSection";
import TeachersSection from "../TeachersSection/TeachersSection";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <TeachersSection></TeachersSection>
      <EventsSection></EventsSection>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;
