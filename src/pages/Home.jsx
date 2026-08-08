import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero/Hero";
import AboutSection from "../components/AboutSection/AboutSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mr.Saim | Portfolio</title>

        <meta
          name="description"
          content="Mr.Saim Portfolio — Modern Web Developer, Graphic Designer, UI/UX Designer and Digital Marketing Specialist."
        />
      </Helmet>

      <Hero />
      <AboutSection />
      <SkillsSection />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;