import SectionTitle from "../sharedComponents/SectionTitle";
import selfDevelopmentIcon from "../assets/self-development.png";
import card1img from "../assets/Rectangle 129.png";
import { Info, Star, UserPlus } from "lucide-react";
import Button from "../sharedComponents/Button";
import bg from'../assets/image4.png'
const tabs = [
  {
    key: 1,
    icon: selfDevelopmentIcon,
    text: "Technology Partners",
  },
  {
    key: 1,
    icon: selfDevelopmentIcon,
    text: "Technology Partners",
  },
  {
    key: 1,
    icon: selfDevelopmentIcon,
    text: "Technology Partners",
  },
];

const items = [
  {
    img: card1img,
    title: "IT Support Specialist",
    rating: "5.0(255)",
    price: 300,
  },
  {
    img: card1img,
    title: "IT Support Specialist",
    rating: "5.0(255)",
    price: 300,
  },
  {
    img: card1img,
    title: "IT Support Specialist",
    rating: "5.0(255)",
    price: 300,
  },
  {
    img: card1img,
    title: "IT Support Specialist",
    rating: "5.0(255)",
    price: 300,
  },
  {
    img: card1img,
    title: "IT Support Specialist",
    rating: "5.0(255)",
    price: 300,
  },
  {
    img: card1img,
    title: "IT Support Specialist",
    rating: "5.0(255)",
    price: 300,
  },
];

const OurPrograms = () => {
  return (
    <div className="w-full h-[1200px] pb-32" style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="lg:w-[1170px] mx-auto">
        <SectionTitle title="Our Programs" align="center" textColor="#004464" />
        <div className="w-full lg:h-[435px] flex flex-col lg:flex-row justify-center">
          <div className="w-full mx-auto px-4">
            <SectionTitle
              title="Our Partners"
              align="start"
              textColor="#004464"
            />
            <div className="flex flex-col lg:flex-row w-full gap-8">
              {tabs.map((tab, index) => (
                <div
                  key={tab.key}
                  className={`flex gap-6 items-center pb-4 ${
                    index === 0
                      ? "border-b border-[#29BDBF]"
                      : "border-b border-gray-200"
                  } `}
                >
                  <img src={tab.icon} alt="" className="w-8 h-8" />
                  <h5 className="text-[16px] font-semibold leading-4">
                    {tab.text}
                  </h5>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 pt-8">
              {items.map((item, index) => (
                <div key={index} className="w-[346px] h-[482px] border p-6 rounded-lg">
                  <img src={item.img} alt="" className="w-full h-[328px]"/>
                  <h4>{item.title}</h4>
                  <div className="flex gap-2 items-center justify-between w-[336px] py-2">
                    <p className="flex gap-1 items-center">
                      {[1, 2, 3, 4, 5].map((star, index) => (
                        <Star
                          key={index}
                          color="#5A0AC2"
                          fill="#5A0AC2"
                          size={10}
                        />
                      ))}
                      {item.rating}
                    </p>
                    <p>{item.price}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button className="text-left text-[#F15B2D] flex gap-2 items-center">
                      More Info <Info size={18} />
                    </button>
                    <Button
                      btnText="Enroll Now"
                      icon={<UserPlus size={18} />}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
