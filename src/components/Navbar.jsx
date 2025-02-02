import { MenuIcon, UserPlus } from "lucide-react";
import logo from "../assets/logo.png";
import Button from "../sharedComponents/Button";
import { useState } from "react";

const items = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Programs",
    path: "/programs",
  },
  {
    name: "Locations",
    path: "/locations",
  },
  {
    name: "Career & Placement",
    path: "/career-placement",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center h-[110px] md:h-[86pz] lg:w-[1170px] mx-auto">
      <div>
        <img src={logo} alt="" className="h-[41px] w-[173px]" />
      </div>
      <div className="hidden lg:block">
        <ul className="text-decoration-none flex  justify-between item-center gap-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="font-medium text-sm text-[#004464] hover:text-[#0786C0] focus:text-[#0786C0]"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="block lg:hidden">
        <MenuIcon onClick={() => setOpen(!open)} />
        {open === true && (
          <div className="block lg:hidden h-72 w-48 p-2 bg-white absolute shadow-xl border-t border-gray-400 mt-2 right-0">
            <ul className="text-decoration-none flex flex-col justify-between item-center gap-4">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="font-medium text-sm text-[#004464] hover:text-[#0786C0] focus:text-[#0786C0]"
                >
                  {item.name}
                </li>
              ))}
              <Button btnText="Sign Up" icon={<UserPlus size={18} />} />
            </ul>
          </div>
        )}
      </div>
      <div className="hidden lg:block">
        <Button btnText="Sign Up" icon={<UserPlus size={18} />} />
      </div>
    </div>
  );
};

export default Navbar;
