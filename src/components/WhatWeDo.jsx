import { ArrowRightCircle } from "lucide-react";
import img from "../assets/Img.png";
import Button from "../sharedComponents/Button";
import SectionTitle from "../sharedComponents/SectionTitle";
const WhatWeDo = () => {
  return (
    <div className=" lg:max-w-7xl xl:max-w-[1920px] mx-auto lg:pt-32">
        <SectionTitle title="What We Do" align="center" textColor="#004464"/>
      <div className="w-full lg:h-[435px] flex flex-col lg:flex-row justify-center">
        <div className="lg:w-[366px] bg-[#A6E2E2] p-10 text-[#242424]">
          <h3 className="text-2xl leading-9 tracking-tighter-[1%]">Bulipe Tech is a dynamic and innovative company</h3>
          <p className="text-base leading-5 py-8">
            We empower individuals to unlock career opportunities through our
            proven Digital Skill Development program. Partnering with 300 local
            organisations and 3,000+ global partners in 21 countries, we provide
            access to top U.S. certifications and salary-based employment
            starting at $250, with the potential to exceed $3,000 through
            continuous up-skilling.
          </p>
          <div>
            <Button btnText="Learn More" bg="#004464" icon={<ArrowRightCircle size={18}/>} />
          </div>
        </div>
        <div>
          <img src={img} alt="" className="flex-1 w-full"/>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
