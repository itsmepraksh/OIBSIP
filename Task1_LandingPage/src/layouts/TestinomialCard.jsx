const TestinomialCard = ({imageUrl , reviewerName, reviewerPost}) => {
  return ( 
    <div className="review bg-white w-[65%] lg:w-[40%] xl:w-[30%] p-6">
      <div className="reviewer-info flex gap-2 items-center ">
        <img
          className="w-10 h-10 object-cover object-top rounded-full"
          src={imageUrl}
          alt="reviewer-img"
        />
        <div className="font-medium text-gray-500">
          <p className="text-gray-700 leading-[1]">{reviewerName}</p>
          <h6 className="text-xs">{reviewerPost}</h6>
        </div>
      </div>
      <p className="text-xs text-gray-400 py-2 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        delectus nostrum impedit enim, deserunt quisquam hic sapiente
        reprehenderit fuga eveniet.
      </p>
    </div>
  );
};

export default TestinomialCard;
