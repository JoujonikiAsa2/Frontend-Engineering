import { Info, UserPlus } from "lucide-react";
import banner from "../assets/banner.png";
import Button from "../sharedComponents/Button";
import Card from "../sharedComponents/Card";
import icon5 from "../assets/icon_05.png";
import icon6 from "../assets/icon_06.png";
import icon7 from "../assets/icon_07.png";

const cards = [
  {
    img: icon5,
    title: "Master In-Demand Digital Skills to Advance Your Career",
    description:
      "Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today with 300 local partners to stay ahead of the curve!",
  },
  {
    img: icon6,
    title: "Earn Vendor Certifications and Join Us",
    description:
      "Our post-training assessments connect you with leading U.S. certification providers. Join over 3,000 global partners across 21+ countries and begin your career today!",
  },
  {
    img: icon7,
    title: "Start Earning BDT 30,000 Monthly and Grow Your Skills",
    description:
      "Salary-based employment starting at BDT 30,000, with the potential to exceed BDT 3,00,000+ as you up-skill and master new digital skills. Your earning potential is limitless.",
  },
];
const Banner = () => {
  return (
    <div className=" flex flex-col gap-20">
      <div className="bg-[#004464] min-h-screen p-6 lg:h-[764px] lg:relative">
        <div className="h-full lg:max-w-7xl xl:max-w-[1920px] mx-auto flex flex-col-reverse lg:flex-row  justify-between items-center">
          <div className="lg:w-[45%]  text-white">
            <h4 className="text-lg">ELEVATING</h4>
            <h1 className="text-[54px] leading-[65px]">
              IT Service Industry <br /> with Digital Skills <br />
              Development
            </h1>
            <p className="text-md leading-[28px] pt-6 pb-16">
              Bulipe Tech as a visionary agent collaborates with its parent{" "}
              <br />
              companies from the USA and UK to bring forth a far-reaching <br />{" "}
              Digital Skills Development project for the ever-changing workforce{" "}
              <br /> of Bangladesh.
            </p>
            <div className="flex gap-6">
              <Button btnText="Sign Up" icon={<UserPlus size={18} />} />
              <button className="text-[#F15B2D] w-fit px-3 py-1 rounded-full flex gap-3 items-center border-2 border-[#F15B2D] bg-transparent text-white">
                Enroll Now <Info size={18} />
              </button>
            </div>
          </div>
          <div className="lg:h-[462px] lg:w-[470px]">
            <img
              src={banner}
              alt=""
              className="w-full h-full rounded-lg lg:rounded-xl lg:rounded-b-full rounded-t-xl"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-10 justify-center items-center static lg:absolute lg:-bottom-[80%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-[7.5rem]">
        {cards.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
