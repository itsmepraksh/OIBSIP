import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReasonCard from "../components/ReasonCard";

const SectionTwo = () => {
  return (
    <>
      <section className="secTwo">
        <div className="why-member">
          <h1 className="text-2xl md:text-3xl lg:text-4xl  md:w-[80%] lg:w-[65%] xl:w-[55%]     font-bold text-[#133C2A] text-center py-5 md:py-7">
            Why Become a Member?
          </h1>
          <p className="text-xs text-gray-500 font-medium text-center pb-5 md:pb-10  md:w-[75%] lg:w-[55%] xl:w-[40%] ">
            Experience the benefits of being part of a vibrant Al startup
            community that fosters collaboration and innovation.
          </p>
          <div className="reasons-box  flex flex-col lg:flex-wrap items-center  gap-2 px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] ">
            <ReasonCard text="Networking" />
            <ReasonCard text="Exclusive Resources" />
            <ReasonCard text="Mentorship Programs" />
            <ReasonCard text="Sales and Marketing" />
            <ReasonCard text="Market Insights" />
            <ReasonCard text="Monthly Meetups" />
          </div>
        </div>
        <div className="raise-funding">
          <div className="funds-data">
            <div className="invested">
              $30,000 <h5>invested!</h5>
            </div>
            <div className="investing">
              $100,000 <h5>investing</h5>
            </div>
          </div>
          <div className="funding-info">
            <h1>Raise Funding for Your Startup</h1>
            <p>
              Launch a funding round through our online platform, allowing
              individuals to invest smaller amounts. Tap into your friends and
              family network, engage your brand's community, and connect with
              our global network of individual investors eager to support your
              growth.
            </p>

            <Button className="w-[55%]   xl:py-3 xl:px-4  " text="Learn more" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
