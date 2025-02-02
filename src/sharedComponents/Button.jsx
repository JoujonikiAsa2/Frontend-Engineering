import PropTypes from 'prop-types'

const Button = ({btnText, icon, bg}) => {
  return (
    <button className={`w-fit px-3 py-1 rounded-full flex gap-3 items-center bg-[${bg}] text-white`}>
      {btnText} {icon}
    </button>
  );
};

Button.propTypes = {
    btnText: PropTypes.string,
    icon: PropTypes.string,
    bg: PropTypes.string
}

export default Button;
