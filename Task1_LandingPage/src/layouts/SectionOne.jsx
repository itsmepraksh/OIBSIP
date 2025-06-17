import Button from "../components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const SectionOne = () => {
  return (
    <>
      <section className="secOne px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-7 md:py-4">
        <div className="  w-15 -right-[80%] -top-10    relative">
          <FontAwesomeIcon
            className="text-[#104026] absolute -left-2 -bottom-4 rotate-180"
            icon={faLocationArrow}
          />
          <img
            className="w-10 h-10 rounded-3xl object-cover object-top"
            src="https://images.unsplash.com/photo-1661955571743-583dbaa19c58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="hero-site flex flex-col items-center justify-center">
          <small className="bg-white p-1 px-4 font-medium text-gray-500 text-xs rounded-lg">
            Empowering Tomorrow's Al Innovators
          </small>
          <h1 className="text-2xl md:text-3xl  md:w-[80%] font-bold text-[#133C2A] text-center py-5 md:py-7">
            Empowering Al Innovators to Build and Collaborate
          </h1>
          <p className="text-xs text-gray-500 font-medium text-center pb-5 md:pb-10  md:w-[75%] ">
            Join a thriving community of innovators, entrepreneurs, and experts
            to collaborate, learn, and grow. Unlock the full potential of Al
            with exclusive resources and support.
          </p>
          <div className="flex justify-between bg-white  w-full md:w-[60%]">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 w-[45%] placeholder:text-xs  text-xs"
            />
            <div>
              <Button
                text="Join the Community"
                className="w-[55%]  "
                icon={<FontAwesomeIcon icon={faArrowRight} className="px-1" />}
              />
            </div>
          </div>
        </div>

        <div className="  w-15 -bottom-10  relative">
          <FontAwesomeIcon
            className="text-[#104026] absolute right-2 -top-2"
            icon={faLocationArrow}
          />
          <img
            className="w-10 h-10 rounded-3xl object-cover object-top"
            src="https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        
        <div className="  w-15 -right-[80%] -bottom-10  relative">
          <FontAwesomeIcon
            className="text-[#104026] absolute -left-2 -top-4 rotate-280"
            icon={faLocationArrow}
          />
          <img
            className="w-10 h-10 rounded-3xl object-cover object-top"
            src="https://images.unsplash.com/photo-1690846152581-37a78f2e83e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default SectionOne;
