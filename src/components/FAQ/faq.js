import React, { useState } from 'react';
import {FaqData} from './faqData'

function Faq() {

    const [faqData, setFaqData] = useState(FaqData);

    // open selected FAQ
    // if one FAQ is open the other closes automatically
    const toggleFaq = (index) => {
        setFaqData(faqData.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <div className="d-flex ai-center dir-column faq-container">
            <h2 style={{marginTop: "0px"}}>FREQUENTLY ASKED QUESTIONS (FAQs)</h2>
            <div className="questions-container">
                {faqData.map((faq, index) => {
                    return (
                        <div className={"faq " + (faq.open ? 'open' : '')} key={index} onClick={() => toggleFaq(index)}>
                            <div className="d-flex jc-space-between ai-center">
                                <div className="question">{faq.question}</div>
                                <i className={"fas " + (!faq.open ? 'fa-plus' : 'fa-minus')}></i>
                            </div>
                            
                            <div className="answer">{faq.answer}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Faq;