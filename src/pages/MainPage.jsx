import Layout from "../components/layout/Layout.component";
import Section from "../components/section/main-page/Section.component";

const MainPage = () => {
  return (
    <Layout>
      <Section title="Eng mashhur mahsulotlar" />
      <Section title="Eng sara mahsulotlar" />
      <Section title="Eng yangi mahsulotlar" />
    </Layout>
  );
};

export default MainPage;
