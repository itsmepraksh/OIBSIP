 
import Button from '../components/Button'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SectionFive = () => {
  return (
    <>
        <div className="FAQS flex flex-col items-center justify-center gap-5 px-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl  md:w-[80%] lg:w-[65%] xl:w-[55%]    font-bold text-[#133C2A] text-center py-5 md:py-7">
            Frequently Answered Questions</h1>
            <div className='w-[80%] xl:w-[60%] 2xl:w-[50%] flex flex-col lg:flex-row items-center justify-center lg:justify-between 2xl:justify-evenly gap-5 '>
                
            <div className="questions  ">
                <div className="question flex items-center gap-4 justify-between py-2 ">
                    <p className='text-sm text-gray-600 font-medium'>Quisque arcu lorem at, fermentum diam</p>
                    <FontAwesomeIcon className='text-[#133C2A]' icon={faCirclePlus} />
                </div>
                <div className="question flex items-center gap-4 justify-between py-2">
                    <p className='text-sm text-gray-600 font-medium'>Quisque arcu lorem atm</p>
                    <FontAwesomeIcon className='text-[#133C2A]' icon={faCirclePlus} />
                </div>
                <div className="question flex items-center gap-4 justify-between py-2">
                    <p className='text-sm text-gray-600 font-medium'>Quisque arcu lorem at, diam</p>
                    <FontAwesomeIcon className='text-[#133C2A]' icon={faCirclePlus} />
                </div>
                <div className="question flex items-center gap-4 justify-between py-2">
                    <p className='text-sm text-gray-600 font-medium'>Quisque arcu fermentum diam</p>
                    <FontAwesomeIcon className='text-[#133C2A]' icon={faCirclePlus} />
                </div>
            </div>
            <div className="Book-a-call w-[90%] md:w-[80%] lg:w-[40%] xl:w-[45%] 2xl:w-[30%] flex flex-col items-center justify-center gap-4 bg-white p-7 ">
                <img className='w-10 h-10 rounded-full object-cover object-top ' src="https://images.unsplash.com/photo-1717671999279-b9b9853e2249?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h2 className='text-gray-800 font-medium text-xl px-5 text-center'>Wanna talk before joining us ?</h2>
                <Button text ="Book a Call"/>
            </div>
            </div>

        </div>
    </>
  )
}

export default SectionFive