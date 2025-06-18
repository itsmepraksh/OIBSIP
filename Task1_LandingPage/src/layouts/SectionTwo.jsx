 
import Button from "../components/Button"; 
import ReasonCard from "../components/ReasonCard";

const SectionTwo = () => {
  return (
    <>
      <section className="secTwo flex flex-col justify-self-center items-center px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem]  ">
        <div className="why-member flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl  md:w-[80%] lg:w-[65%] xl:w-[55%]     font-bold text-[#133C2A] text-center py-5 md:py-7">
            Why Become a Member?
          </h1>
          <p className="text-xs text-gray-500 font-medium text-center pb-5 md:pb-10  md:w-[55%] lg:w-[55%] xl:w-[40%] ">
            Experience the benefits of being part of a vibrant Al startup
            community that fosters collaboration and innovation.
          </p>
          <div className="reasons-box my-4 flex flex-col md:flex-row  md:flex-wrap items-center  justify-center gap-2 md:gap-4 ">
            <ReasonCard text="Networking" />
            <ReasonCard text="Exclusive Resources" />
            <ReasonCard text="Mentorship Programs" />
            <ReasonCard text="Sales and Marketing" />
            <ReasonCard text="Market Insights" />
            <ReasonCard text="Monthly Meetups" />
          </div>
        </div>
        <div className="raise-funding py-10 px-4 flex flex-col md:flex-row justify-around  xl:justify-evenly items-center ">
          <div className="funds-data md:w-1/2 xl:w-[35%] ">
            <div className="invested flex items-center justify-between -rotate-[3deg] gap-4 w-[95%] py-2 xl:py-4 px-8  text-white text-base xl:text-lg font-medium rounded-md my-4 bg-[#104026] md:w-[80%]  ">
              $30,000 <h5 className="text-xs xl:text-sm font-normal">Invested!</h5>
            </div>
            <div className="investing flex items-center justify-between  gap-4 w-[95%] xl:w-[80%] py-2 xl:py-4  px-8   text-base xl:text-lg font-medium rounded-md my-4 bg-white md:w-[80%]  ">
              $100,000 <h5 className="text-gray-400 text-xs xl:text-sm font-normal">Investing</h5>
            </div>
          </div>
          <div className="funding-info md:w-1/2 ">
            <h1  className="text-2xl text-left md:text-3xl lg:text-4xl  md:w-[80%] lg:w-[75%] xl:w-[65%]     font-bold text-[#133C2A] text-center py-5 md:py-7">Raise Funding for Your Startup</h1>
            <p className="text-xs text-gray-500 text-left font-medium text-center pb-5 md:pb-10  md:w-[75%] lg:w-[70%] xl:w-[60%]  ">
              Launch a funding round through our online platform, allowing
              individuals to invest smaller amounts. Tap into your friends and
              family network, engage your brand's community, and connect with
              our global network of individual investors eager to support your
              growth.
            </p>

            <Button className="w-[55%] xl:w-[25%] xl:text-center xl:py-3 xl:px-4  " text="Learn more" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
