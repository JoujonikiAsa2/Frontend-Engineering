import SectionTitle from "../sharedComponents/SectionTitle";
const items = [
  {
    total: 3,
    text: "Global partners worldwide",
  },
  {
    total: 23,
    text: "Countries and adding",
  },
  {
    total: 300,
    text: "Local training partners",
  },
];
const OurCommunity = () => {
  return (
    <div className="bg-[#000000]">
      <div className="lg:max-w-7xl xl:max-w-[1920] mx-auto py-16 px-4">
        <SectionTitle title="Our Community" align="start" textColor="white" />
        <div className="max-w-[572px]">
          <p className="text-white text-base leading-6">
            Bulipe Tech aims to train unemployed individuals in Bangladesh,
            equipping them with essential digital skills and linking them to job
            opportunities across 23 countries worldwide.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center mt-16">
          {items.map((item, index) => (
            <div key={index} className={`border-b-white border border-[#004464] lg:w-[300px] text-white p-10 ${index === 0 && "lg:rounded-l-lg"} ${index === 2 && "lg:rounded-r-lg"}`}>
              <h1 className="text-[60px] leading-[60px]">{item.total}+</h1>
              <h6 className="text-base">{item.text}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
