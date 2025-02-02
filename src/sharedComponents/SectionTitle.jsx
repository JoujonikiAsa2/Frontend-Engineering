import PropTypes from 'prop-types';

const SectionTitle = ({title, align, textColor}) => {
    return (
       <div className={`flex flex-col ${align && `justify-${align}  items-${align} ` }pb-8`}>
         <div className="w-fit pb-4">
            <h2 className={`text-3xl leading-9 font-bold text-${textColor}`}>{title}</h2>
        </div>
        <div className='h-1 w-28  border-b-2 border-[#F15B2D]'>
        </div>
       </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    align: PropTypes.string,
    textColor: PropTypes.string,
};

export default SectionTitle;