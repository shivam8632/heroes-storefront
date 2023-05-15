import React from 'react'
import Container from 'react-bootstrap/Container';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
import { Link } from "react-router-dom";

import './faqs.scss';

const Faqs = () => {
  return (
    <div className='faqs pt-3'>
      <Container>
        <div className='faqs-header heading heading-center pt-4'>
          <h2><strong>FAQS</strong></h2>
        </div>
        <div className='faq-list justify-center align-items-center'>
          <Accordion transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}} className="shadow-lg p-1 border-0">
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-100 justify-between items-center text-start border-0 p-2 mt-1">
                            <span>How do we pay for the membership?</span>           
                            {/* <svg className={`w-2 h-2 ${!open ? '' : 'rotate-90'}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>                  */}
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="p-4 font-light text-start">
                            There are multiple payment methods; credit cards, internet banking, debit cards,.. Choose your preferred method during checkout.
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-100 justify-between items-center text-start border-0 p-2 mt-1">
                            <span>How long does the membership last?</span>                            
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="p-3 font-light text-start">
                            Your membership has a validity of 1 year from the date you sign up/renew.
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-100 justify-between items-center text-start border-0 p-2 mt-1">
                            <span>What do I need to bring/prepare for the class?</span>                            
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="p-3 font-light text-start">
                            Your child can join one (1) time for each trial classes.
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-100 justify-between items-center text-start border-0 p-2 mt-1">
                            <span>Can I use the membership for all my children?</span>                            
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="p-3 font-light text-start">
                            Every child needs to be registered as a member in order to participate our activities. We want to ensure every child's learning experience is unique & personalized and get exclusive access to members-only events.
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-100 justify-between items-center text-start border-0 p-2 mt-1">
                            <span>Can all my children share 1 membership</span>                            
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="p-3 font-light text-start">
                            You can sign up for the special events under "Special Events" category. The number of slots is limited, be sure to grab it before they are gone!
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
            {/* <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-100 justify-between items-center text-start border-0 p-2 mt-1">
                            <span>How can we do the trial classes? Can we choose any time slot?</span>                            
                        </AccordionHeader>

                        <AccordionBody>
                            <div className="p-3 font-light text-start">
                            Trial classes are available under activities. Some of the classes offered have multiple time slots and you can choose whichever is most convenient for you.
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem> */}
          </Accordion>
        </div>

        <div className="pt-5">
            <Link to='/faq' className="button button-fill mx-auto" type="submit">More FAQ</Link>
        </div>

      </Container>
    </div>
  )
}

export default Faqs