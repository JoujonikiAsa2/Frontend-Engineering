import PropTypes from "prop-types";
const Card = ({ img, title, description }) => {
  return (
    <div className="text-[#242424] bg-white rounded-xl w-[80%] lg:w-[300px] lg:h-[300px] shadow-2xl shadow-black p-4 space-y-4 flex flex-col items-center justify-center relative  leading-[28px]">
      <div className=" absolute -top-8 mx-auto bg-[#014463] w-[80px] h-[80px] rounded-full flex items-center justify-center">
        <img
          src={img}
          alt=""
          className="w-[60px] h-[60px] border-white border rounded-full"
        />
      </div>
      <h4 className="text-left text-lg font-medium mt-10 pt-4">{title}</h4>
      <p className="text-left text-base">{description}</p>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
