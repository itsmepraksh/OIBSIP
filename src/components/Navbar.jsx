import JiroboLogo from "../assets/Cursed_Seal_Jirobo.svg?react";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="logo flex items-center gap-1"> 
          <JiroboLogo className="logo-icon w-12   text-red-500 " /> 

        <h1>Ai Foresty</h1>
      </div>
      <div className="nav-links none lg:flex">
        <a href="">Blogs</a>
        <a href="">About Us</a>
        <a href="">Pricing</a>
        <a href="">Benefits</a>
      </div>
      <Button text="Get Started" />
    </>
  );
};

export default Navbar;
