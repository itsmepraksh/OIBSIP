
import Button from '../components/Button'

const SectionOne = () => {
  return (
    <>
        <section className="secOne">
            <div className="hero-site">
                <small>Empowering Tomorrow's Al Innovators</small>
                <h1>Empowering Al Innovators to Build and Collaborate</h1>
                <p>Join a thriving community of innovators, entrepreneurs, and experts to collaborate, learn, and grow.
                    Unlock the full potential of Al with exclusive resources and support.</p>
                <input type="text" placeholder="Enter your email"/>
                <Button text="Join the community" />
                <div className="focuser-elem">
                    {/* <img src="" alt=""/> */}
                    <i>here a arrow svg come</i>
                </div>
            </div>
            <div className="company-logo">
                <div className="companyLogo"></div>
                <div className="companyLogo"></div>
                <div className="companyLogo"></div>
                <div className="companyLogo"></div>
            </div>
        </section>
    </>
  )
}

export default SectionOne