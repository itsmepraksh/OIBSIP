import { faCcStripe, faIntercom } from "@fortawesome/free-brands-svg-icons"; 
import NetworkCard from "../components/NetworkCard";

const SectionThree = () => {
  return (
    <>
      <section className="secThree relative flex flex-col justify-center items-center  px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem]  py-[1rem] md:py-[3rem] bg-white m-3 md:m-6 rounded">
        <div className="startup-nextlvl text-center flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl  md:w-[80%] lg:w-[65%] xl:w-[55%]     font-bold text-[#133C2A] text-center py-5 md:py-7">
            Everything you need to take your Startup to the next level.
          </h1>
          <h6 className="text-xs text-gray-500 font-medium text-center pb-5 md:pb-10  px-7 md:w-[75%] lg:w-[55%] xl:w-[40%] ">
            Access our exclusive network with perks worth over 550,000 and boost
            your startup
          </h6>
          <div className="networks flex flex-wrap justify-center items-center gap-4 lg:gap-5 xl:gap-4  ">

            <NetworkCard companyName="Intercom" fontIconName={faIntercom} />

            <NetworkCard companyName="Stripe" fontIconName={faCcStripe} /> 

            <NetworkCard companyName="Intercom" fontIconName={faIntercom} />  
            
            <NetworkCard companyName="Stripe" fontIconName={faCcStripe} /> 

            
          </div>
        </div>
        <div className="founder-mssg my-20 ">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium  text-center py-5 md:py-7">
           "Here's a Message from our Founder"</h1>
                
                <img className="w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[40%] md:aspect-[16/9]  md:object-cover rounded absolute -translate-x-1/2 left-1/2" src="https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
      </section>
    </>
  );
};

export default SectionThree;
