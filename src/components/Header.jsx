import { X } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-[#A6E2E2]">
      <div className="h-fit lg:h-[86px] md:h-[86pz] lg:max-w-7xl xl:max-w-[1920] mx-auto flex flex-col-reverse sm:flex-col-reverse md:flex-row justify-between items-center">
        <div className="text-[#FF751E] font-bold text-xl sm:text-2xl text-3xl">100%</div>
        <div className="border border-[#006444] rounded-lg h-fit p-1">
          <p>
            <span className="text-[#FF751E]">Scholarship</span>{" "}
            <span className="text-[#006444]">
              on all <br />
              of our programs
            </span>
          </p>
        </div>
        <div>
          <p>
            Exclusively for the physically challenged, and third-gender
            communities!
          </p>
        </div>
        <div>
          <button>
            <X color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
