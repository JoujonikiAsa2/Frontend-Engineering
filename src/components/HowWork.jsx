import vectorImg from "../assets/Vector127.png";
import pin from "../assets/Group.png";
import SectionTitle from "../sharedComponents/SectionTitle";
const HowWork = () => {
  return (
    <div className="w-full bg-[#F2F2F2] py-32">
        
        <SectionTitle title="How Doed It Works" align="center" textColor="#004464" />
      <div className="lg:w-[1170px] mx-auto flex flex-col lg:flex-row gap-20">
        {[1, 2,3].map((item, index) => (
          <div key={index} className="lg:w-[320] h-[520px] p-6 border rounded-xl bg-white">
            <div className="relative">
              <img src={vectorImg} alt="" className="" />
              <div className="w-12 h-12">
                <img
                  src={pin}
                  alt=""
                  className="size-8 border absolute -top-1.5 left-16"
                />
              </div>
            </div>
            <h2>Training</h2>
            <p className="text-base leading-6 text-center">
              Our training programs, tailored to each subject matter and
              specialized courses, last at least 3 months and take place in our
              physical venues. Access to all course materials will be provided
              through the Bulipe App/repository, ensuring a comprehensive
              learning experience for all participants.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWork;
