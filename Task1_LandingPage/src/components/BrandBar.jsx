 
import {faPagelines, faSalesforce, faWizardsOfTheCoast, faYahoo} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BrandBar = () => {
  return (
    <>
         <div className="company-logo bg-[#104026] text-white my-15 flex items-center justify-around text-4xl py-4 md:px-10">
          <div className="companyLogo"><FontAwesomeIcon icon={faPagelines} /></div>
          <div className="companyLogo"><FontAwesomeIcon icon={faSalesforce} /></div>
          <div className="companyLogo"><FontAwesomeIcon icon={faYahoo} /></div>
          <div className="companyLogo"><FontAwesomeIcon icon={faWizardsOfTheCoast} /></div>
        </div>
    </>
  )
}

export default BrandBar