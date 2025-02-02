import PropTypes from 'prop-types';

const SectionTitle = ({title}) => {
    return (
       <div className='flex flex-col justify-center items-center pb-8'>
         <div className=' w-fit pb-4 text-center'>
            <h2 className='text-3xl leading-9 font-bold'>{title}</h2>
        </div>
        <div className='h-1 w-28  border-b-2 border-[#F15B2D]'>
        </div>
       </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
};

export default SectionTitle;