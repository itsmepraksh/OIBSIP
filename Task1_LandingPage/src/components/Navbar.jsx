import JiroboLogo from "../assets/Cursed_Seal_Jirobo.svg?react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  
  return (
    <>
      <div className="navbar flex items-center justify-between  px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-7 md:py-4 ">
        <div className="logo flex items-center gap-1">
          <JiroboLogo className="logo-icon w-8 md:w-10  text-[#104026] " />

          <h1 className="text-xl md:text-2xl font-bold ">AI Foresty</h1>
        </div>
        <div className="nav-links hidden text-red-400">
          <a href="">Blogs</a>
          <a href="">About Us</a>
          <a href="">Pricing</a>
          <a href="">Benefits</a>
        </div>
        <Button text="Get Started" className="hidden" />
        <FontAwesomeIcon icon={faBars} className="text-xl" />
      </div>
    </>
  );
};

export default Navbar;
