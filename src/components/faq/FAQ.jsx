import React from 'react'
import Container from 'react-bootstrap/Container'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

const FAQ = () => {
  return (
    <div className='faqs pt-4'>
      <Container>
        <div className='faqs-header heading heading-center pt-4'>
          <h2><strong>FAQ</strong></h2>
        </div>
        <div className='faq-list justify-center align-items-center'>
          <Accordion transition={{duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}} className="shadow-lg p-1 border-0">
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-100 justify-between items-center text-start border-0 p-2 mt-1">
                            <span>How long does the membership last?</span>           
                            {/* <svg className={`w-2 h-2 ${!open ? '' : 'rotate-90'}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>                  */}
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="p-4 font-light">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-100 justify-between items-center text-start border-0 p-2 mt-1">
                            <span>How many trial classes can my child go for?</span>                            
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="p-3 font-light">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-100 justify-between items-center text-start border-0 p-2 mt-1">
                            <span>Can i use the membership for all my children?</span>                            
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="p-3 font-light">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-100 justify-between items-center text-start border-0 p-2 mt-1">
                            <span>How can my child go for the special events?</span>                            
                        </AccordionHeader>

                        <AccordionBody>
                            <div className="p-3 font-light">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className="w-100 justify-between items-center text-start border-0 p-2 mt-1">
                            <span>How can we do the trial classes? Can we choose any time slot?</span>                            
                        </AccordionHeader>

                        <AccordionBody>
                            <div className="p-3 font-light">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  )
}

export default FAQ