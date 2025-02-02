import { UserPlus } from 'lucide-react';
import logo from '../assets/logo.png'

const items = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/about-us'
    },
    {
        name: "Programs",
        path: '/programs'
    },
    {
        name: "Locations",
        path: '/locations'
    },
    {
        name: "Career & Placement",
        path: '/career-placement'
    },
    {
        name: "Contact Us",
        path: '/contact-us'
    },
]
const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-[110px] md:h-[86pz] lg:max-w-7xl xl:max-w-[1920] mx-auto'>
            <div>
                <img src={logo} alt="" className='h-[102px]'/>
            </div>
            <div>
                <ul className='text-decoration-none flex  justify-between item-center gap-4'>
                    {
                        items.map((item, index)=>(
                            <li key={index} className='font-medium text-sm text-[#004464] hover:text-[#0786C0] focus:text-[#0786C0]'>{item.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <button className='w-fit px-3 py-1 rounded-2xl flex gap-3 items-center bg-[#F15B2D] text-white'>Sign Up <UserPlus size={18}/></button>
            </div>
        </div>
    );
};

export default Navbar;