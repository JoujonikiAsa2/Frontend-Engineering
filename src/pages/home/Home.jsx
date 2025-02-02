import Banner from "../../components/Banner";
import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HowWork from "../../components/HowWork";
import LatestNews from "../../components/LatestNews";
import Navbar from "../../components/Navbar";
import OurCommunity from "../../components/OurCommunity";
import OurPartners from "../../components/OurPartners";
import OurPrograms from "../../components/OurPrograms";
import Testimonials from "../../components/Testimonials";
import WhatWeDo from "../../components/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="space-y-20 lg:space-y-32">
        <div className="lg:pb-28">
          <Banner />
        </div>
        <WhatWeDo />
        <HowWork />
        <OurPrograms />
        <OurCommunity />
        <OurPartners />
        <Testimonials />
        <LatestNews />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
