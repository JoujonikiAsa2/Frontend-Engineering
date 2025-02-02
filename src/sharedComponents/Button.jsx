import PropTypes from 'prop-types'

const Button = ({btnText, icon}) => {
  return (
    <button className="w-fit px-3 py-1 rounded-full flex gap-3 items-center bg-[#F15B2D] text-white">
      {btnText} {icon}
    </button>
  );
};

Button.propTypes = {
    btnText: PropTypes.string,
    icon: PropTypes.string
}

export default Button;
