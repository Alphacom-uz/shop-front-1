import Layout from "../components/layout/Layout.component";
import MainSlider from "../components/main-slider/MainSlider.component";
import Section from "../components/section/main-page/Section.component";

const MainPage = () => {
  return (
    <Layout>
      <MainSlider />
      <Section title="Eng mashhurlari" />
      <Section title="Eng saralari" />
      <Section title="Eng yangilari" />
    </Layout>
  );
};

export default MainPage;
