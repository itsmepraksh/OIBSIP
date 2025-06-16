import Button from "../components/Button"

 

const SectionTwo = () => {
  return (
    <>
        <section class="secTwo">
            <div class="why-member">
                <h1>Why Become a Member?</h1>
                <p>Experience the benefits of being part of a vibrant Al startup community that fosters collaboration
                    and innovation.</p>
                <div class="reasons-box">
                    <div class="reason">
                        <div class="icon"></div>
                        <h4>Networking</h4>
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit officiis asperiores exercitationem? Fuga neque minus at exercitationem nobis.
                        </small>
                        <Button text="Details"/>
                    </div>
                    <div class="reason">
                        <div class="icon"></div>
                        <h4>Exclusive Resources</h4>
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit officiis asperiores exercitationem? Fuga neque minus at exercitationem nobis.
                        </small>
                        <Button text="Details"/>
                    </div>
                    <div class="reason">
                        <div class="icon"></div>
                        <h4>Mentorship Programs</h4>
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit officiis asperiores exercitationem? Fuga neque minus at exercitationem nobis.
                        </small>
                        <Button text="Details"/>
                    </div>
                    <div class="reason">
                        <div class="icon"></div>
                        <h4>Sales and Marketing</h4>
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit officiis asperiores exercitationem? Fuga neque minus at exercitationem nobis.
                        </small>
                        <Button text="Details"/>
                    </div>
                    <div class="reason">
                        <div class="icon"></div>
                        <h4>Market Insights</h4>
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit officiis asperiores exercitationem? Fuga neque minus at exercitationem nobis.
                        </small>
                        <Button text="Details"/>
                    </div>
                    <div class="reason">
                        <div class="icon"></div>
                        <h4>Monthly Meetups</h4>
                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit officiis asperiores exercitationem? Fuga neque minus at exercitationem nobis.
                        </small> 
                        <Button text="Details"/>
                    </div>
                </div>
            </div>
            <div class="raise-funding">
                <div class="funds-data">
                    <div class="invested">$30,000 <h5>invested!</h5></div>
                    <div class="investing">$100,000 <h5>investing</h5></div>
                </div>
                <div class="funding-info">
                    <h1>Raise Funding for Your Startup</h1>
                    <p>Launch a funding round through our online platform, allowing individuals to invest smaller amounts. Tap into your friends and family network, engage your brand's community, and connect with our global network of individual investors eager to support your growth.</p>
                   
                    <Button text="Learn more"/>
                </div>
            </div>
        </section>
    </>
  )
}

export default SectionTwo