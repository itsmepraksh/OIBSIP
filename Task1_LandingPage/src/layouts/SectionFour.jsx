import TestinomialCard from "./TestinomialCard"

 

const SectionFour = () => {
  return (
    <>
        <div className="testimonials mb-20 mt-40 md:mt-50 flex flex-col items-center justify-center ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#133C2A] text-center  py-1">
         Testimonials</h2>
            <h5 className="text-xs text-gray-500 font-medium text-center pb-5 md:pb-10  px-7 md:w-[75%] lg:w-[55%] xl:w-[40%] ">Lorem ipsum dolor sit amet.</h5>
            <div className="reviews flex flex-wrap gap-4 p-5 items-center justify-center xl:w-[60%] 2xl:w-[50%]  ">
                <TestinomialCard reviewerPost={"Content Manager"} 
                reviewerName={"Max"} 
                imageUrl={"https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                />
                 <TestinomialCard reviewerPost={"Content Manager"} 
                reviewerName={"Robert"} 
                imageUrl={"https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                />
                 <TestinomialCard reviewerPost={"Content Manager"} 
                reviewerName={"Melisa"} 
                imageUrl={"https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                /> <TestinomialCard reviewerPost={"Content Manager"} 
                reviewerName={"Max"} 
                imageUrl={"https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                /> <TestinomialCard reviewerPost={"Content Manager"} 
                reviewerName={"Elisa"} 
                imageUrl={"https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                /> <TestinomialCard reviewerPost={"Content Manager"} 
                reviewerName={"alexandra"} 
                imageUrl={"https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                />

                
                
            </div>
        </div>
    </>
  )
}

export default SectionFour