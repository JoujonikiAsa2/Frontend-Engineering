import SectionTitle from "../sharedComponents/SectionTitle";
import img1 from "../assets/IBM.png";
import img2 from "../assets/Hostinger.png";
import img3 from "../assets/digitalocean.png";
import img4 from "../assets/Microsoft.png";

const tabs = [
  {
    key: 1,
    text: "Technology Partners",
  },
  {
    total: 2,
    text: "Branding Partners",
  },
  {
    total: 3,
    text: "Training Partners",
  },
  {
    total: 4,
    text: "Banking Partners",
  },
];
const items = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
];

const OurPartners = () => {
  return (
    <div className="w-full">
      <div className="lg:w-[1170px] mx-auto">
        <SectionTitle title="Our Partners" align="center" textColor="#004464" />
        <div className="w-full lg:h-[435px] flex flex-col lg:flex-row justify-center">
          <div className="w-full mx-auto px-4">
            <SectionTitle
              title="Our Partners"
              align="start"
              textColor="#004464"
            />
            <div className="flex flex-col lg:flex-row w-full gap-8">
              {tabs.map((tab) => (
                <div key={tab.key} className="">
                  <h5>{tab.text}</h5>
                </div>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-8 pt-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#A6E2E2] h-[82px] w-[250px] flex items-center justify-center rounded-xl"
                >
                  <img src={item.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
