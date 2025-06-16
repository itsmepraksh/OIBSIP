import React from 'react'
import Button from '../components/Button'

const SectionFive = () => {
  return (
    <>
        <div className="FAQS">
            <h1>Frequently Answered Questions</h1>
            <div className="questions">
                <div className="question">
                    <p>Quisque arcu lorem at, fermentum diam</p>
                    <div className="btn"></div>
                </div>
                <div className="question">
                    <p>Quisque arcu lorem atm</p>
                    <div className="btn"></div>
                </div>
                <div className="question">
                    <p>Quisque arcu lorem at, diam</p>
                    <div className="btn"></div>
                </div>
                <div className="question">
                    <p>Quisque arcu fermentum diam</p>
                    <div className="btn"></div>
                </div>
            </div>
            <div className="Book-a-call">
                <img src="" alt="" />
                <h2>Wanna talk before joining us ?</h2>
                <Button text ="Book a Call"/>
            </div>

        </div>
    </>
  )
}

export default SectionFive