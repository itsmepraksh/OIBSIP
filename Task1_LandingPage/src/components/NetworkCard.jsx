import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  

const NetworkCard = ({ fontIconName,companyName }) => {
  return (
    <div className="network rounded-lg bg-[#fff2e7] w-[85%] md:w-[45%] xl:w-[23%] aspect-1/1 font-medium flex flex-col gap-1 text-center items-center justify-center">
      <FontAwesomeIcon className="text-zinc-800 text-3xl" icon={fontIconName} /> 
      <h3 className="">{companyName}</h3>
      <h4 className="text-sm text-gray-700">S1000 en credit Notion Plus lon</h4>
      <p className="text-xs text-gray-500 w-[70%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit quod
        adipisci!
      </p>
    </div>
  );
};

export default NetworkCard;
