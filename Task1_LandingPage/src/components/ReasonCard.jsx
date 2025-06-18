import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import Button from "./Button";

const ReasonCard = ({text}) => {
  return (
    <div className="reason bg-white shrink-[0] w-[80%] md:w-[45%] lg:w-[30%] aspect-1/1 lg:aspect-3/1  px-[2rem]  md:px-[3rem] lg:px-[2.5rem]   py-[2rem] md:py-[3rem] ">
      <FontAwesomeIcon className="text-[#104026] mb-2 text-lg" icon={faGlobe} />
      <h4 className="font-medium">{text}</h4>
      <small className=" block leading-[1.3] py-3 font-medium text-gray-400 text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit officiis
        asperiores exercitationem? Fuga neque minus at exercitationem nobis.
      </small>
      <Button className=" w-[55%] xl:w-[45%] xl:text-center  my-4   xl:py-3 xl:px-4  " text="Details" />
    </div>
  );
};

export default ReasonCard;
