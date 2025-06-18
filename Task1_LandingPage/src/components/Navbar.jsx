import JiroboLogo from "../assets/Cursed_Seal_Jirobo.svg?react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  
  return (
    <>
      <div className="navbar flex items-center justify-between justify-self-evenly  px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[13rem]   py-7 md:py-4 ">
        <div className="logo flex items-center gap-1">
          <JiroboLogo className="logo-icon w-8 md:w-10 2xl:w-12  text-[#104026] " />

          <h1 className="text-xl md:text-2xl 2xl:text-3xl font-bold ">AI Foresty</h1>
        </div>
        <div className="nav-links hidden lg:flex items-center justify-evenly font-medium text-gray-700 2xl:text-xl w-1/2  ">
          <a href="">Blogs</a>
          <a href="">About Us</a>
          <a href="">Pricing</a>
          <a href="">Benefits</a>
        </div>
        <Button text="Get Started" className="hidden lg:block 2xl:text-lg xl:py-3 xl:px-4" />
        <FontAwesomeIcon icon={faBars} className="text-xl lg:!hidden" />
      </div>
    </>
  );
};

export default Navbar;
