
import Navbar from './components/Navbar'
import SectionOne from './layouts/SectionOne'
import SectionTwo from './layouts/SectionTwo'
import SectionThree from './layouts/SectionThree'
import SectionFour from './layouts/SectionFour'
import Footer from './components/Footer'
import BrandBar from './components/BrandBar'

const App = () => {
  return (
    <> 
     {/* px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[9rem] 2xl:px-[12rem] py-[1rem] md:py-[3rem] */}
    <main  >
        <Navbar/>

        <SectionOne/>
        <BrandBar/>

        <SectionTwo/>
        {/* <SectionThree/> */}
        {/* <SectionFour/> */}
        {/* <Footer/> */}
    </main>

    </>
  )
}

export default App